"""Tests for scripts/check_site.py against fake static exports (no build, no network)."""
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "scripts"))
import check_site  # noqa: E402

PAGE = '<html><body>{}</body></html>'


def make_site(root, extra=None):
    """Write a minimal fake export with every key page, plus any extra files."""
    files = {p: PAGE.format('<a href="/">home</a>') for p in check_site.KEY_PAGES}
    files.update(extra or {})
    for rel, body in files.items():
        f = root / rel
        f.parent.mkdir(parents=True, exist_ok=True)
        f.write_text(body, encoding="utf-8")


class CheckSiteTest(unittest.TestCase):
    def setUp(self):
        self._tmp = tempfile.TemporaryDirectory()
        self.out = Path(self._tmp.name)

    def tearDown(self):
        self._tmp.cleanup()

    def test_clean_site_passes(self):
        make_site(self.out, {
            "index.html": PAGE.format(
                '<a href="/jerry/">j</a><a href="/blog/hello/#top">post</a>'
                '<a href="links/">rel</a><a href="https://example.com/x">ext</a>'
                '<a href="mailto:a@example.com">m</a><a href="#main">frag</a>'
                '<img src="/me.jpg"><script src="/_next/static/app.js"></script>'
                '<a href="/doc.pdf?v=1">pdf</a>'),
            "blog/hello/index.html": PAGE.format('<a href="../">up</a>'),
            "me.jpg": "x",
            "doc.pdf": "x",
            "_next/static/app.js": "x",
        })
        self.assertEqual(check_site.check(self.out), [])

    def test_missing_key_page_fails(self):
        make_site(self.out)
        (self.out / "jerry/resume/index.html").unlink()
        self.assertEqual(check_site.check(self.out),
                         ["missing key page jerry/resume/index.html"])

    def test_broken_page_link_fails(self):
        make_site(self.out, {"blog/index.html": PAGE.format('<a href="/blog/no-such-post/">x</a>')})
        self.assertEqual(check_site.check(self.out),
                         ["blog/index.html: broken link /blog/no-such-post/"])

    def test_broken_asset_fails(self):
        make_site(self.out, {"jerry/resume/index.html": PAGE.format(
            '<a href="/jerry-dempsey-resume.pdf">pdf</a><img src="gone.png">')})
        self.assertEqual(check_site.check(self.out), [
            "jerry/resume/index.html: broken link /jerry-dempsey-resume.pdf",
            "jerry/resume/index.html: broken link gone.png",
        ])

    def test_link_escaping_out_dir_fails(self):
        make_site(self.out, {"index.html": PAGE.format('<a href="../../etc/passwd">x</a>')})
        self.assertEqual(check_site.check(self.out),
                         ["index.html: broken link ../../etc/passwd"])

    def test_extensionless_link_resolves_to_html(self):
        make_site(self.out, {"index.html": PAGE.format('<a href="/about">a</a>'),
                             "about.html": PAGE.format("")})
        self.assertEqual(check_site.check(self.out), [])

    def test_no_output_dir_fails(self):
        self.assertEqual(check_site.check(self.out / "nope"),
                         [f"no build output at {self.out / 'nope'}"])

    def test_main_exit_codes(self):
        make_site(self.out)
        self.assertEqual(check_site.main(["check_site.py", str(self.out)]), 0)
        (self.out / "index.html").unlink()
        self.assertEqual(check_site.main(["check_site.py", str(self.out)]), 1)


if __name__ == "__main__":
    unittest.main()
