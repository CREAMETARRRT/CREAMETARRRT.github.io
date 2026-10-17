# CREAM TART V2 — Content Guide

## Public editorial structure

1. SCREENINGS — stable archive, roughly 40% of output.
   - Independent / underground film screenings only.
   - Record film, guest, Q&A, city, venue, programme context.
   - Do not foreground the names of the underlying screening organisations unless intentionally made public.
   - Curated series live here as `screening_type: "PROGRAMME"` rather than becoming a separate top-level section for now.

2. FESTIVALS — roughly 20%.
   - Festival dispatches, market notes, viewing diaries, venues, encounters, industry observations.
   - Priority for future media-accreditation credibility.

3. CONVERSATIONS — roughly 20%.
   - Director / filmmaker interviews, Q&As, edited conversations.
   - Can originate from screenings or festivals.

4. NOTES — flexible personal/editorial section.
   - Filmgoing, cinemas, travel connected to cinema, objects, industry observations, occasional reviews.
   - Old `writing` category is displayed here for backwards compatibility.

5. GOODS — display only.
   - No online checkout.
   - Purchase language should say offline only.

6. ARCHIVE — everything by date/category.

## Bilingual publishing

Interface defaults to English. Visitors can switch EN / 中文.

For future bilingual posts, add fields such as:

```yaml
---
layout: post
categories: [festivals]
category: festivals
title_en: "A Night at Busan Cinema Center"
title_zh: "釜山电影殿堂的一夜"
deck_en: "..."
deck_zh: "..."
date: 2026-10-12 20:00:00 +0800
author: "CREAM TART"
location: "Busan"
---
```

Then write both bodies inside the same post:

```html
<div class="article-lang article-lang-en" markdown="1">
English article here.
</div>

<div class="article-lang article-lang-zh" markdown="1">
中文正文写在这里。
</div>
```

Old Chinese-only archive posts do not need to be rewritten immediately. They remain readable and can receive English translations gradually.

## Screening record front matter

```yaml
---
layout: post
categories: [screenings]
category: screenings
screening_type: "Q&A"
title_en: "Film Title — Hangzhou Screening & Q&A"
title_zh: "《片名》杭州放映与映后"
date: 2026-10-20 19:30:00 +0800
location: "Hangzhou"
author: "CREAM TART"
---
```

Suggested `screening_type` values:
- SCREENING
- Q&A
- PROGRAMME
- SPECIAL SCREENING
- RETROSPECTIVE

## Festival structure later

When one festival has enough coverage, create a dedicated landing page such as:
- `/festivals/busan-2026/`
- `/festivals/tokyo-2027/`
- `/festivals/cannes-2027/`

Do this only after there are at least 3–5 substantial pieces for that festival.

## Things intentionally NOT added yet

- Podcast section: keep off the main navigation until there is real audio output.
- Separate CURATION section: curated programmes are a subtype of SCREENINGS for now.
- Newsletter / membership / comments: not necessary for the current media-accreditation goal.
- Public relationship to other screening brands: not encoded in this framework.
