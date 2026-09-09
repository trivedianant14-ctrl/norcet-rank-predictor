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
