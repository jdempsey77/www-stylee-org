#!/usr/bin/env python3
"""Check a static export (out/): key pages exist and internal links resolve.

Usage: python3 scripts/check_site.py [out_dir]
Exits 0 when clean, 1 with one line per problem otherwise. Stdlib only, no network.
"""
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

KEY_PAGES = [
    "index.html",
    "jerry/index.html",
    "jerry/resume/index.html",
    "links/index.html",
    "blog/index.html",
    "projects/index.html",
    "404.html",
]

# Attributes that point at something the browser will fetch or navigate to.
LINK_ATTRS = {"a": "href", "link": "href", "img": "src", "script": "src", "source": "src"}


class _Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        want = LINK_ATTRS.get(tag)
        for name, value in attrs:
            if name == want and value:
                self.urls.append(value.strip())


def extract_links(html):
    parser = _Links()
    parser.feed(html)
    return parser.urls


def is_internal(url):
    parts = urlsplit(url)
    return not parts.scheme and not parts.netloc and bool(parts.path)


def resolve(out_dir, page, url):
    """Return the file an internal URL maps to, or None if nothing serves it."""
    path = unquote(urlsplit(url).path)
    base = out_dir if path.startswith("/") else page.parent
    target = (base / path.lstrip("/")).resolve()
    root = out_dir.resolve()
    if target != root and root not in target.parents:
        return None
    candidates = [target / "index.html"] if path.endswith("/") else [
        target, target.with_name(target.name + ".html"), target / "index.html"]
    for c in candidates:
        if c.is_file():
            return c
    return None


def check(out_dir):
    out_dir = Path(out_dir)
    if not out_dir.is_dir():
        return [f"no build output at {out_dir}"]
    problems = [f"missing key page {p}" for p in KEY_PAGES if not (out_dir / p).is_file()]
    for page in sorted(out_dir.rglob("*.html")):
        rel = page.relative_to(out_dir)
        for url in extract_links(page.read_text(encoding="utf-8", errors="replace")):
            if is_internal(url) and resolve(out_dir, page, url) is None:
                problems.append(f"{rel}: broken link {url}")
    return problems


def main(argv):
    out_dir = argv[1] if len(argv) > 1 else "out"
    problems = check(out_dir)
    for p in problems:
        print(p)
    if problems:
        print(f"FAIL: {len(problems)} problem(s) in {out_dir}")
        return 1
    print(f"OK: key pages present, internal links resolve in {out_dir}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
