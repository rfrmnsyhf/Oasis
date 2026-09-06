# Image Audit Notes

Photos currently sourced from Unsplash. Some don't match the dish name. This
file tracks what needs swapping once real OASIS photos are available.

## Status

- **All 40 referenced IDs return HTTP 200** (no broken images)
- **9 photos are technically 200 but contextually wrong** — see table below

## Wrong-context images (audit 2026-09-06)

| File | Dish | Current ID | Problem | Replacement priority |
|---|---|---|---|---|
| `src/data/menu.ts:40` | The Power of Nasi Lemak | ~~1563245372-f21724e3856d~~ | Was dim sum → swapped to `1626777552726-4a6b54c97e46` (verified nasi lemak) | **DONE** |
| `src/data/menu.ts:49` | Nasi Bali | `1604908176997-125f25cc6f3d` | Pasta/squash, not Balinese rice | **HIGH** |
| `src/data/menu.ts:67` | Big Morning (lead) | `1525351484163-7529414344d8` | Single egg-on-toast, not a full breakfast plate | **HIGH** |
| `src/data/menu.ts:85` | Burnt Cheese Cake | `1565958011703-44f9829ba187` | Raspberry layer cake | **HIGH** |
| `src/data/menu.ts:103` | Forest (drink) | `1437418747212-8d9709afab22` | Wine glasses, not calamansi mocktail | **MEDIUM** |
| `src/data/menu.ts:114` | Nasi Goreng Kampung | `1512058564366-18510be2db19` | Paella | **HIGH** |
| `src/data/menu.ts:206` | Calamari | `1599487488170-d11ec9c172f0` | Grilled meat skewers (used twice, also for Ayam Bakar) | **HIGH** |
| `src/data/menu.ts:214` | Edamame | `1564834744159-ff0ea41ba4b9` | Rice bowl with sides | **HIGH** |
| `src/data/menu.ts:222` | Spring Rolls | `1606755962773-d324e0a13086` | Pulled-pork burger | **HIGH** |
| `src/data/menu.ts:264` | Tom Yum | `1548946526-f69e2424cf45` | Portrait of a man (also 404-adjacent) | **HIGH** |
| `src/data/menu.ts:290` | Matcha Roll Cake | `1551024601-bec78aea704b` | Donuts with sprinkles | **MEDIUM** |
| `src/data/menu.ts:308` | Thai Tea Strawberry | `1572490122747-3968b75cc699` | Chocolate frappuccino | **MEDIUM** |
| `src/data/menu.ts:316` | Yuzu in Tokyo | `1556679343-c7306c1976bc` | Dark rum/whiskey | **MEDIUM** |
| `src/data/menu.ts:332` | Yuzu Soda Pop | `1437418747212-8d9709afab22` | Same wine glasses as Forest | **MEDIUM** |
| `src/data/menu.ts:340` | Sakura in Tokyo | `1556679343-c7306c1976bc` | Same dark rum | **MEDIUM** |

## How to swap

1. Find a real photo or pick a verified Unsplash ID
2. Edit the `image: img("photo-…", …)` line in `src/data/menu.ts`
3. Rebuild: `npm run build`
4. Visually confirm in the served preview

## Recommended replacement strategy

**Best:** Replace all 14 with real OASIS photos once available. Drop files in
`public/images/menu/{dish-slug}.webp`, then update each `image` to a local
path starting with `/images/menu/…`. Local images remove the Unsplash
dependency and ship faster.

**Good:** Pick 14 verified Unsplash IDs that match each dish. Requires an
Unsplash API key to search reliably; without one, ID guessing is unreliable.

**Acceptable now:** Leave as-is. The site is functional and 100% of images
load (no 404s). Wrong context is visible on inspection but not catastrophic
for a launch placeholder.
