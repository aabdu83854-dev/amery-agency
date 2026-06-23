---
name: Tourism image localization (al-ameri)
description: Why tourism images are served locally and how onError must be handled
---
Many Unsplash photo IDs referenced in destinations.ts returned HTTP 404 (≈half), and the Replit preview proxy also serves some Unsplash IDs unreliably.

**Decision:** download all destination hero/gallery/attraction images into `artifacts/al-ameri/public/tourism/` (heroes) and `public/tourism/g/<id>-N.jpg` (gallery+attractions), reference via `${import.meta.env.BASE_URL}tourism/...`. Do not rely on remote Unsplash URLs.

**Why:** dead remote URLs caused broken images AND an infinite render loop (see below).

**onError loop trap:** an `<img onError>` that re-assigns `src` to another broken URL re-fires onError forever → constant re-render = flicker/hang. Always guard: `if (img.dataset.fb) return; img.dataset.fb="1"; img.src = local-fallback`. Use a guaranteed-local fallback (e.g. `${import.meta.env.BASE_URL}heroes/tourism.jpg`).

**Downloading images:** plain `fetch(url,{headers:{"User-Agent":"Mozilla/5.0","Referer":"https://www.google.com/"}})` works for wikimedia/pexels/britannica/istock. Validate content-type startsWith("image/") and buffer length > 5000 bytes.
