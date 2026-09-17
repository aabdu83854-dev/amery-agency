---
name: video-js scaffold typecheck noise
description: The video-js artifact scaffold emits pre-existing tsc errors that are not yours to fix; validate via dev logs + validate-recording.sh, not tsc.
---

# video-js scaffold typecheck noise

Running `pnpm --filter @workspace/<slug> run typecheck` on a fresh video-js
artifact reports errors that are NOT from your code:
- `src/lib/video/animations.ts` — framer-motion `Variant`/`transition` typing mismatches.
- `src/lib/video/hooks.ts` — `Cannot find name 'window'`.
- `src/main.tsx` — `Cannot find name 'document'` (DOM lib not in tsconfig lib).

**Why:** `lib/video/hooks.ts` is read-only (recording/export pipeline depends on
its exact implementation), and the scaffold's tsconfig/framer-motion typings
produce these regardless. Vite/esbuild compiles and runs fine.

**How to apply:** Do NOT chase these by editing scaffold files. Verify a video
build with `bash scripts/validate-recording.sh` + clean dev-server logs (and a
preview screenshot), not with tsc. Only treat typecheck errors that point at
files YOU wrote (VideoTemplate, VideoWithControls, useSceneControls, scenes) as
actionable.

Also: the DESIGN subagent occasionally leaves a JSX tag mismatch (e.g. opening
`<motion.h2>` closed with `</h2>`), which surfaces as a Vite babel parse error
on first workflow start, not in tsc. Check the first refresh_all_logs after the
subagent returns and fix any such mismatch before proceeding.
