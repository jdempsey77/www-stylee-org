# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Headers

This site implements the following security headers:

- **X-Frame-Options**: DENY - Prevents clickjacking attacks
- **X-Content-Type-Options**: nosniff - Prevents MIME type sniffing
- **Referrer-Policy**: strict-origin-when-cross-origin - Controls referrer information
- **X-XSS-Protection**: 1; mode=block - Enables XSS filtering
- **Strict-Transport-Security**: Enforces HTTPS with HSTS
- **Content-Security-Policy**: Restricts resource loading to prevent XSS

## Content Security Policy

The site uses a strict CSP that:
- Only allows resources from the same origin (`'self'`)
- Restricts script execution to same origin
- Prevents inline script execution (except for Next.js requirements)
- Blocks frame embedding (`frame-ancestors 'none'`)

## Dependencies

- All dependencies are regularly audited using `npm audit`
- Security vulnerabilities are addressed in CI/CD pipeline
- Dependencies are pinned to specific versions

## Reporting a Vulnerability

If you discover a security vulnerability, please report it to:
- Email: jerry@stylee.org
- GitHub: Create a private security advisory

## Security Best Practices

1. **Static Site Generation**: Reduces attack surface
2. **No Server-Side Code**: Eliminates server-side vulnerabilities
3. **TypeScript**: Provides type safety
4. **ESLint**: Enforces secure coding practices
5. **HTTPS Only**: All traffic encrypted in transit
6. **No Sensitive Data**: No secrets or credentials in code

## Infrastructure Security

- **Cloudflare**: Provides DDoS protection and additional security layers
- **GitHub Pages**: Secure hosting with automatic HTTPS
- **GitHub Actions**: Secure CI/CD with minimal permissions
