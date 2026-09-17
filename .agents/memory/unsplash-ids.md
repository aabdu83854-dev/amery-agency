---
name: Unsplash IDs in Replit proxy
description: Which Unsplash photo IDs load vs fail silently in the Replit dev proxy environment for the al-ameri project.
---

# Unsplash photo ID behavior in Replit preview proxy

## Problem
Some Unsplash photo IDs fail silently in the Replit preview proxy — the `<img>` loads without error in the browser console, but the image is just dark/not rendered (looks like a black background behind the CSS gradient overlay). Picsum (`picsum.photos`) also fails to load.

**Why:** Certain Unsplash CDN assets are apparently inaccessible from the Replit network (possibly removed, private, or geo-blocked). There is no console error — the image silently fails.

## Confirmed WORKING IDs (as of June 2026)
- `photo-1552465011-b4e21bf6e79a` — tropical island (Langkawi)
- `photo-1441974231531-c6227db76b6e` — rainforest green (Taman Negara)
- `photo-1544551763-46a013bb70d5` — ocean/reef (Redang)
- `photo-1507525428034-b723cf961d3e` — tropical beach (Kapas/Terengganu)
- `photo-1464822759023-fed622ff2c3b` — mountain valley (Genting)
- `photo-1582236021175-9b2f6dc448bc` — underwater diving (Tenggol)
- `photo-1469474968028-56623f02e42e` — nature/wetlands
- `photo-1596423735880-5f2a689b903e` — sunset over water (Putrajaya Lake)
- `photo-1560814304-4f05b62af116` — city waterfront skyline (Perdana Putra / Petronas)
- `photo-1544485542-a279c6d48259` — cave/cliff (Batu Caves)
- `photo-1487958449943-2429e8be8625` — modern glass building (Palace of Justice)
- `photo-1540202404-b711142289eb` — tropical beach (Lang Tengah)
- `photo-1520250497591-112f2f40a3f4` — tropical resort pool (Botanical Garden)
- `photo-1506905925346-21bda4d32df4` — alpine mountains above clouds (Cameron)
- `photo-1510414842594-a61c69b5ae57` — coastal waterfall cliff (Penang)
- `photo-1559827260-dc66d52bef19` — dramatic ocean wave (KLCC)
- `photo-1544550581-5f7ceaf7f992` — overwater bungalow resort (Malacca)
- `photo-1517154421773-0529f29ea451` — Asian city street (Korean night market — loads but wrong content!)
- `photo-1528698827591-e19ccd7bc23d` — colorful shop interior (loads but wrong content!)

## Confirmed FAILING IDs (dark/black background, no console error)
- `photo-1596422846543-74c6fc0e6f11` ❌ (originally Petronas)
- `photo-1616089338270-43ce9c2e0b57` ❌ (originally Penang)
- `photo-1620306429532-6e2db0da8a07` ❌ (originally Cameron)
- `photo-1546708688-662580dfbf3a` ❌ (originally Putra Mosque)
- `photo-1583418855738-71b8a06a1ce5` ❌ (in Malacca/Terengganu galleries)
- `photo-1570183864708-306fc6e0ea79` ❌ (in Malacca/Penang galleries)
- Any `picsum.photos` URL ❌

## How to apply
When adding new tourism destination hero images or gallery photos for al-ameri, only use confirmed working IDs. Test new IDs with a screenshot before committing. Dark background = ID doesn't load. No console error will appear.
