# WEBSITE_UPDATE.md — jolaandco.com content update
### Instructions for Claude Code. Read fully before changing anything.

## Context

This is the jolaandco.com website — a JavaScript single-page app owned by Jola
(Jola & Co: automation, BI and operations consulting). The goal of this update:
add **AI-assisted development (Claude Code)** as a service, and add a new
portfolio case study, **"The Chaos Inbox"** — a Python supplier-document
pipeline built as a synthetic-data demo.

The person you are working with is not a professional developer. Work in small
steps, explain what you're changing, show a local preview after each major
change, and do not deploy anything without her explicit confirmation.

## Ground rules

1. **First, explore.** Map the project structure. Identify: how pages/sections
   are defined, where the services/offer section lives, whether a portfolio or
   projects section exists, how styling is done, and how the site is deployed
   (check for deploy scripts in package.json, a git remote, netlify/vercel
   config, or a README).
2. **Match the existing design exactly** — reuse existing components, fonts,
   colors, spacing. This is a content update, not a redesign.
3. **Don't touch** anything unrelated to the changes below.
4. **Preview locally** (npm run dev or equivalent) and have Jola review before
   any build/deploy step.
5. If the site has meta descriptions / SEO tags, update them consistently with
   the new positioning (task 5).

## Task 1 — Services: add an "AI-Assisted Development" pillar

Add alongside the existing Automation (Make) and Power BI services, matching
their layout and length. Content:

> **AI-Assisted Development (Claude Code)**
> Some problems are too custom for no-code and too small for a dev agency.
> That's where I come in: I direct AI to build working tools for your
> business — document-processing pipelines, internal apps, data cleaners —
> in days, not months. You bring the messy process; I ship the tool that
> eats it.

If the Automation service copy mentions only Make, extend it to
"Automation (Make + Python)" and add one sentence: "When no-code hits its
limits, I build custom Python pipelines."

## Task 2 — Portfolio: add "The Chaos Inbox" case study

If a portfolio/projects section exists, add this as the newest entry using the
existing entry format. If none exists, create a simple portfolio section or
page consistent with the site's design, and add this as its first entry.

**Title:** The Chaos Inbox — from 6 hours of Friday admin to 2 seconds

**Italic disclaimer at top:**
> Demo case study built on fully synthetic data. "Bottega Nord S.r.l." is a
> fictional client — every document was generated for the demo. The pipeline,
> and the problems it solves, are entirely real.

**The pain**
> Bottega Nord, a specialty food distributor in Lombardy, receives ~800
> supplier order confirmations a month — PDF invoices in three different
> layouts, Excel exports that never match, semicolon CSVs with Italian decimal
> commas, and orders typed straight into emails. Every Friday, ~6 hours
> disappeared into manual reconciliation. Duplicate invoices still got paid.
> Price increases still went unnoticed.

**The build**
> A five-stage Python pipeline, built with AI-assisted development (Claude
> Code): ingestion → extraction → normalization → anomaly detection →
> reporting. One command. No manual steps.

**The numbers** (render as stat cards if the design supports it):
- 149 documents in · 938 clean order lines out · ~2 seconds
- 105 problems caught automatically · €259,272 flagged at risk
- Biggest single catch: a €90,941 mis-keyed order (793 units instead of ~27)

**The kicker**
> The data is synthetic. The pipeline isn't. If your team runs on supplier
> paperwork, spreadsheets nobody trusts, or an inbox that eats a day a week —
> this same architecture drops onto your data. **→ Let's talk.** (link to the
> site's existing contact route)

**Footer line:** Python · pandas · pdfplumber · rapidfuzz · Claude Code
· GitHub: [ASK JOLA for the repo URL — if not published yet, omit the link and
leave a TODO comment in the code]

**Screenshots:** ask Jola for 1–3 images (a messy source PDF, the weekly
report). If she has them, include them per the site's image conventions; if
not, ship without images and leave a TODO.

## Task 3 — Homepage line (optional, ask Jola)

Offer to add this one-liner near the main tagline; skip if she declines:
> No-code when it's enough. Python when it's not. AI-assisted either way.

## Task 4 — Anywhere the tool stack is listed

If the site lists tools/skills anywhere (footer, about, services), add:
Claude Code · Python. Keep existing items.

## Task 5 — SEO/meta consistency

Current meta description mentions "Automation, BI & operations". Extend to
also mention AI-assisted development, e.g.:
> Jola Tacij — Automation (Make + Python), BI & AI-assisted development for
> founders and lean teams. 20+ years in operations. Automate. Analyse. Advance.

Keep within sensible meta-description length (~155 chars for the main one).

## Definition of done

- [ ] New service pillar visible and styled like the others
- [ ] Chaos Inbox case study live in portfolio with disclaimer + numbers
- [ ] Tool lists and meta tags updated
- [ ] Jola has reviewed the local preview
- [ ] Deployed via the project's existing deploy route, only after her OK
