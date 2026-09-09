# NORCET Rank Predictor — Prototype

A static, single-page prototype of the AIIMS NORCET 10 Mains selection-chance
calculator: enter your Mains attempt, pick your category, and get a
4-band result card (chance of selection, headline, stats, next-step actions,
and a closing note).

This is a clean, framework-free reimplementation (plain HTML/CSS/JS, no
build step) built to demonstrate the four score bands:

| Band | Chance | Headline |
| --- | --- | --- |
| Chances are low | 1–50% | This attempt may not go your way. |
| Borderline | 51–70% | You're close. It can still go either way. |
| Good chance | 71–90% | Your chances are looking good. 🤞 |
| Very strong chance | 91%+ | Your Nursing Officer dream is looking closer than ever. 🎉 |

## Brand theme

Typeface and color tokens are centralized in `:root` at the top of
`index.html`'s `<style>` block — treat these as the source of truth rather
than adding new one-off hex values:

- **Font:** Inter (400–800), loaded from Google Fonts.
- **Ink / text:** `--ink #141A33`, `--sub #6C7480`, `--faint #8A929E`.
- **Brand blue:** `--blue #1B8EF2`, `--blue-light #3B9BF2`, `--blue-dk #1650B8`.
- **Brand violet** (PwBD / toggle accent): `--violet #7C6CF0`, `--violet-dk #5B4FC4`.
- **Status:** `--green #16A34A` (correct), `--red #E5533D` (wrong).
- **Surfaces:** `--page #EEF2F7`, `--panel #F2F5FA`, `--line #E7EAEE`.

## Run locally

No build step — just serve the folder:

```
npx serve .
```

## Notes

- All cutoffs, pool sizes, and the chance-of-selection formula in `app.js`
  are illustrative mock values for this prototype, not AIIMS's real data or
  algorithm.
- Deployed as a static site (zero-config on Vercel).
