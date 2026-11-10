---
name: verify-unesco-sites
description: Verifies UnescoSites (Warm heritage journey) - the static build plus the repo's own warm-design browser suite in real Chrome at four widths - with machine-readable evidence.
---

# Verify UnescoSites

## Launch

```bash
python3 .cursor/skills/verify-unesco-sites/verify.py
```

Exit 0 and `FAILURES=0` mean green.

## Doctor

Gates on `node` and a Chrome/Chromium binary (`CHROME_BIN`; the suite
launches /usr/bin/google-chrome). Installs the declared playwright
devDependency when node_modules is absent.

## Drive

1. `node scripts/build-static.mjs` - the Cloudflare Pages build must
   produce `dist/index.html`.
2. `node tests/warm-design.mjs` - the design's own browser suite:
   seven chapters/stops, 44px touch targets, no storage, motion
   behavior, zero page errors at 320/390/844/1280 widths. Screenshots
   land in `evidence/warm-design/`.

## Evidence

Each run writes a fresh `EVIDENCE_DIR` with `evidence.json`.
`FAILURES=n` is the last line; the exit code mirrors it.

## Known boundaries

- The hosted deployment checks (tests/story-map-hosted.mjs against
  unescosites.pages.dev) are release-time work, not local verification.
- Photography licenses are documented in data/photography.js; the
  suite proves behavior, not licensing.
