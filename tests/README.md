# Story-map browser qualification
Tests use Playwright Chromium and Node. From the repository root, with Playwright available in your environment:

```
node tests/story-map-browser.mjs
PREVIEW_URL=<private revision preview URL> node tests/story-map-hosted.mjs
```

Optional environment values: PLAYWRIGHT_MODULE is an absolute Playwright ESM module path, CHROME_PATH selects an installed Chrome binary, PROJECT_ROOT overrides the local source root. No production network, repository write or deployment action occurs. Hosted tests change only local UI and open the source record in a separate tab. Never commit private preview credentials.

Both paths cover 320, 390, 844x390 and 1280. Hosted checks also cover grouped markers, keyboard pan/zoom, held story, full original gallery and timeline, loaded image bytes and opening the UNESCO source while retaining the File. The final hosted test uses keyboard activation; real pointer Next and overview were separately confirmed in browser. Full-page cross-origin screenshots can omit offscreen painted iframe regions, so retained hosted story evidence uses real viewport screenshots rather than treating those missing pixels as product state.
