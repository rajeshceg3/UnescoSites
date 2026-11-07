# Readiness
Private story-map preview candidate. Production remains held by the shared Vercel capacity block. No GitHub push, merge, production retry, paid service or hosting/account change made for this task.

Source baseline: 49bf9be in https://github.com/rajeshceg3/UnescoSites . New source branch feat/leaflet-story-tour. Preview uses exactly the same tour.js, tour.css, data, diagrams, photos and vendored Leaflet with a thin Files component wrapper.

Required qualification: 320, 390, 844x390 and 1280 viewports; all seven stops; story/map framing; previous, next/end, restart; Chola overview grouping; independent pan/zoom and held story; overview/resume; keyboard markers; full image loading; disclosures; source-link destination; no horizontal overflow or page errors. Evidence and scripts kept in tests/ and evidence/.

Known boundary: overview geography rather than street tiles. Photo coverage currently one verified temple photo with six explanatory concept diagrams. Original art and text remain available as supporting content. Production should remain held until shared release queue approves the next capacity slot and per-app production browser checks pass.

## Qualified private preview
Canonical: https://files.instinct.com/qhewr3ocehml-tamil-nadu-heritage-map-tour
Access: PRIVATE. Public link card shows heritage title/photo/description only. Revision filerevision-01M6V82MQVJ8R8ACVJ2FA7SXC1, generation 1. Four-width live hosted test passed all seven stops, changed map framing, end/previous/restart, overview/resume, grouped keyboard map markers, keyboard pan, held story during zoom, eight timeline rows, six original narrative records and twelve original artwork assets. Source-link popup opened the actual UNESCO railway record and left the File available. No page errors or horizontal overflow. Final phone pixels for every stop inspected; long Gangaikondacholapuram heading uses an intentional word break. Map has fixed responsive height to avoid iframe viewport-height feedback. Production not deployed; no push or merge.

Final supporting viewport inspection passed: phone timeline, original narratives and loaded original art, narrow 320px map, landscape controls, and desktop map/story composition. Unauthenticated canonical access correctly preserves owner sign-in. Private hosted preview interaction tests were rerun from the committed portable scripts. Production browser qualification remains mandatory after the shared cooldown release.
