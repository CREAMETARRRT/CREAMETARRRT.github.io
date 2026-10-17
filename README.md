# CREAM TART V2 Framework Update

This is a safe framework update for the existing GitHub Pages site.

## What it changes
- Adds bilingual EN / 中文 interface.
- Rebuilds the homepage around the actual editorial mix.
- Adds CONVERSATIONS, NOTES, GOODS and ARCHIVE.
- Keeps SCREENINGS and FESTIVALS.
- Keeps `/writing/` as a legacy route, but folds its public role into NOTES.
- Adds optional contact/social links through `_config.yml`.
- Adds archive filtering.
- Does not include or delete `_posts`, so existing articles remain untouched.

## Upload
Upload the contents of this folder to the repository root and commit. Existing files with the same names should be replaced. New folders should be added.

After GitHub Pages rebuilds, check:
- `/`
- `/screenings/`
- `/festivals/`
- `/conversations/`
- `/notes/`
- `/goods/`
- `/archive/`
- `/about/`

## Contact and social links
Edit `_config.yml` later. Leave values blank to hide them.
