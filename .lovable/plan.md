
The user wants the same Fountor landing page I previously planned, with a more specific mock UI (Indian VC examples with INR amounts). The previous plan was declined — likely because it was too verbose. I'll keep this one tight.

## Plan

**One file rewrite:** `src/components/landing-page.tsx` — full replacement for Fountor.

**Design tokens:** Add 3 CSS vars to `src/styles.css` (`--fountor-orange: oklch(0.7 0.18 50)`, soft tint, dark text). White bg, orange accent only on CTAs, badges, and key icons. Onest font (already loaded).

**Sections:**

1. **Header** (sticky, white, thin border) — Fountor wordmark + Sparkles icon (orange) on left; "Sign in" link + orange "Join Waitlist" button on right.

2. **Hero** — Pill badge "AI-powered investor matching". H1 "Find the Right Investors for Your Startup — Without Cold Outreach". Subtext as given. Two CTAs: orange filled "Try Demo" + outline "Join Waitlist". Both link to `/#login`.

3. **Hero mock UI** (built in JSX, no images):
   - Browser-style card with chat input row showing typed text: "AgriTech startup, pre-seed, building soil sensors for smallholder farmers in India"
   - Below: "3 matches found" + 3 investor cards:
     - **Omnivore** — AgriTech VC — ₹1Cr–5Cr — Seed–Series A — 96% match
     - **Ankur Capital** — Climate / Agri — ₹50L–3Cr — Seed — 92% match
     - **Sequoia Capital India** — Tech — ₹5Cr+ — Series A+ — 84% match
   - Each card: avatar circle with initials, name, sector chip, ticket size, stage, match % in orange.

4. **Logo strip** — "Trusted by founders backed by" + grayscale text logos: YC, Sequoia, Accel, Blume, 100X.

5. **Problem** — H2 "Fundraising is broken". 3 cards (icons: UserX, Filter, TrendingDown):
   - Founders struggle to reach the right investors
   - Investors waste time filtering irrelevant pitches
   - Opportunities are lost due to poor matching

6. **Solution** — Two-column. Left: H2 "Intelligent matching, built for outcomes" + paragraph on stage/sector/intent matching. Right: small "Match score" visual card showing Stage / Sector / Intent rows with orange progress bars.

7. **How it works** — 3 numbered steps (01/02/03), icons MessageSquare, Sparkles, Send: Describe your startup → Get matched → Connect and pitch.

8. **Product showcase** — 2x2 grid of feature cards, each with mini mockup:
   - AI Matching (chat bubble preview)
   - Investor Discovery (list rows + filter chips)
   - Investor Details (single profile with ticket/stage/sector pills)
   - Ecosystem Tools (tag grid: Grants, Incubators, Co-founders, Accelerators)

9. **Final CTA** — Centered "Start finding the right investors today" + subtext + same two buttons.

10. **Footer** — Minimal: Fountor wordmark + © year + Privacy/Terms/Contact links (non-functional).

**Routing:** No new routes. Both CTAs use `<Link to="/" hash="login">` (matches existing index.tsx pattern that shows LoginPage when `#login`).

**Out of scope:** Functional waitlist form, in-app rebrand (sidebar/dashboard still AssetWise), real demo. CTAs send users to existing login.

**No new dependencies.**
