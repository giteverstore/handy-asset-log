import { Link } from '@tanstack/react-router';
import {
  Sparkles,
  ArrowRight,
  UserX,
  Filter,
  TrendingDown,
  MessageSquare,
  Send,
  Search,
  Users,
  Building2,
  Target,
  Check,
  XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const font = "'Onest', system-ui, sans-serif";

const investors = [
  {
    name: 'Omnivore',
    initials: 'OM',
    sector: 'AgriTech VC',
    ticket: '₹1Cr – 5Cr',
    stage: 'Seed – Series A',
    match: 96,
    portfolio: 'DeHaat, Stellapps',
  },
  {
    name: 'Ankur Capital',
    initials: 'AC',
    sector: 'Climate / Agri',
    ticket: '₹50L – 3Cr',
    stage: 'Seed',
    match: 92,
    portfolio: 'Ecozen, Tartan',
  },
  {
    name: 'Sequoia Capital India',
    initials: 'SC',
    sector: 'Tech',
    ticket: '₹5Cr+',
    stage: 'Series A+',
    match: 84,
    portfolio: 'Zomato, OYO, Byju\'s',
  },
];

const problems = [
  {
    icon: UserX,
    title: 'Founders struggle to reach the right investors',
    description: 'Cold emails go unanswered. Warm intros are gated by who you already know.',
  },
  {
    icon: Filter,
    title: 'Investors waste time filtering irrelevant pitches',
    description: 'Inboxes overflow with decks that don\'t match thesis, stage, or sector.',
  },
  {
    icon: TrendingDown,
    title: 'Opportunities are lost due to poor matching',
    description: 'Great startups stall. Great capital sits idle. Both sides lose.',
  },
];

const steps = [
  { num: '01', icon: MessageSquare, title: 'Describe your startup', desc: 'Tell us your stage, sector, and what you need — in plain English.' },
  { num: '02', icon: Sparkles, title: 'Get a ranked list of investors most likely to invest', desc: 'Our AI ranks investors, grants, and incubators by real fit.' },
  { num: '03', icon: Send, title: 'Connect and pitch', desc: 'Reach out with context — and a head-start on relevance.' },
];

function Wordmark() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-fountor-orange-soft">
        <Sparkles className="h-4 w-4 text-fountor-orange" strokeWidth={2.4} />
      </div>
      <span className="text-[17px] font-semibold tracking-tight text-fountor-ink">Fountor</span>
    </div>
  );
}

function PrimaryCTA({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <Link to="/" hash="login" className={`inline-block ${className}`}>
      <Button
        size="lg"
        className="rounded-full gap-2 min-h-[44px] px-6 bg-fountor-orange text-white hover:bg-fountor-orange-hover shadow-[0_4px_14px_-4px_oklch(0.7_0.18_50/_0.4)] font-medium text-[14.5px] transition-all"
      >
        {children}
      </Button>
    </Link>
  );
}

function OutlineCTA({ children }: { children: React.ReactNode }) {
  return (
    <Link to="/waitlist" className="inline-block">
      <Button
        size="lg"
        variant="outline"
        className="rounded-full min-h-[44px] px-6 bg-white border-fountor-border text-fountor-ink hover:bg-fountor-surface font-medium text-[14.5px]"
      >
        {children}
      </Button>
    </Link>
  );
}

function HeroMockUI() {
  return (
    <div className="mx-auto max-w-[760px] rounded-2xl border border-fountor-border bg-white shadow-[0_24px_60px_-30px_oklch(0.18_0.005_270/_0.25)] overflow-hidden">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-fountor-border bg-fountor-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-fountor-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-fountor-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-fountor-border" />
        <div className="ml-3 flex-1 text-center">
          <span className="text-[11px] text-fountor-ink-muted">fountor.ai / match</span>
        </div>
      </div>

      <div className="p-5 sm:p-7">
        {/* helper line */}
        <p className="text-[12px] text-fountor-ink-muted mb-2 ml-1">Describe your startup in one sentence</p>

        {/* chat input */}
        <div className="rounded-xl border border-fountor-border bg-fountor-surface px-4 py-3 flex items-center gap-3">
          <Sparkles className="h-4 w-4 text-fountor-orange shrink-0" />
          <p className="text-[13.5px] sm:text-[14px] text-fountor-ink leading-snug text-left">
            AgriTech startup, pre-seed, building soil sensors for smallholder farmers in India
          </p>
        </div>

        {/* result count */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-[13px] text-fountor-ink-muted">
            <span className="font-medium text-fountor-ink">3 matches</span> found
          </p>
          <span className="text-[11px] text-fountor-ink-muted hidden sm:inline">Sorted by relevance</span>
        </div>

        {/* investor cards */}
        <div className="mt-3 space-y-2.5">
          {investors.map((inv) => (
            <div
              key={inv.name}
              className="rounded-xl border border-fountor-border bg-white px-4 py-3.5 flex items-center gap-3 sm:gap-4 transition-all hover:border-fountor-orange/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fountor-surface border border-fountor-border text-[12px] font-semibold text-fountor-ink">
                {inv.initials}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-[14px] font-semibold text-fountor-ink truncate">{inv.name}</p>
                  <span className="text-[10.5px] px-1.5 py-0.5 rounded bg-fountor-surface text-fountor-ink-muted border border-fountor-border">
                    {inv.sector}
                  </span>
                </div>
                <p className="text-[12px] text-fountor-ink-muted mt-0.5">
                  {inv.ticket} · {inv.stage}
                </p>
                <p className="text-[11px] text-fountor-ink-muted/80 mt-1">
                  Invested in: {inv.portfolio}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[15px] font-semibold text-fountor-orange leading-none">{inv.match}%</p>
                <p className="text-[10px] text-fountor-ink-muted mt-1">match</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const showcase = [
  {
    icon: Sparkles,
    title: 'AI Matching',
    desc: 'Describe your startup in plain English. Get a ranked shortlist in seconds.',
    visual: (
      <div className="space-y-2">
        <div className="rounded-lg bg-fountor-surface border border-fountor-border px-3 py-2 text-[11.5px] text-fountor-ink">
          "Pre-seed climate-tech, ₹2Cr round"
        </div>
        <div className="rounded-lg bg-fountor-orange-soft border border-fountor-orange/20 px-3 py-2 text-[11.5px] text-fountor-ink">
          ✓ Found 12 matched investors
        </div>
      </div>
    ),
  },
  {
    icon: Search,
    title: 'Investor Discovery',
    desc: 'Browse a curated database with filters for stage, sector, and ticket size.',
    visual: (
      <div className="space-y-1.5">
        <div className="flex gap-1.5 flex-wrap">
          {['Seed', 'AgriTech', '₹1–5Cr'].map((t) => (
            <span key={t} className="text-[10.5px] px-2 py-0.5 rounded-full bg-fountor-surface border border-fountor-border text-fountor-ink-muted">
              {t}
            </span>
          ))}
        </div>
        {['Omnivore', 'Ankur Capital', 'Beenext'].map((n) => (
          <div key={n} className="flex items-center justify-between rounded-md bg-fountor-surface px-2.5 py-1.5">
            <span className="text-[11.5px] text-fountor-ink">{n}</span>
            <span className="text-[10px] text-fountor-ink-muted">View</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Building2,
    title: 'Investor Details',
    desc: 'Ticket size, stage, sector focus, recent deals — everything before you pitch.',
    visual: (
      <div className="rounded-lg border border-fountor-border p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-7 w-7 rounded-full bg-fountor-surface border border-fountor-border flex items-center justify-center text-[10px] font-semibold text-fountor-ink">OM</div>
          <span className="text-[12px] font-semibold text-fountor-ink">Omnivore</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[['Ticket', '₹1–5Cr'], ['Stage', 'Seed'], ['Sector', 'Agri']].map(([l, v]) => (
            <div key={l} className="rounded bg-fountor-surface px-2 py-1.5">
              <p className="text-[9px] text-fountor-ink-muted uppercase tracking-wide">{l}</p>
              <p className="text-[11px] text-fountor-ink font-medium">{v}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: 'Ecosystem Tools',
    desc: 'Beyond capital — discover grants, incubators, accelerators, and co-founders.',
    visual: (
      <div className="grid grid-cols-2 gap-1.5">
        {['Grants', 'Incubators', 'Accelerators', 'Co-founders'].map((t) => (
          <div key={t} className="rounded-md bg-fountor-surface border border-fountor-border px-2.5 py-2 text-[11.5px] text-fountor-ink text-center">
            {t}
          </div>
        ))}
      </div>
    ),
  },
];

const whyFountorPoints = [
  { icon: XCircle, text: 'No cold emails' },
  { icon: XCircle, text: 'No guessing investor fit' },
  { icon: XCircle, text: 'No wasted introductions' },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-fountor-bg text-fountor-ink" style={{ fontFamily: font }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-fountor-border bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Wordmark />
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" hash="login" className="text-[14px] text-fountor-ink-muted hover:text-fountor-ink transition-colors">
              Sign in
            </Link>
            <Link to="/waitlist">
              <Button size="sm" className="rounded-full bg-fountor-orange text-white hover:bg-fountor-orange-hover font-medium text-[13.5px] h-9 px-4">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-fountor-border bg-fountor-surface px-3 py-1 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-fountor-orange" />
            <span className="text-[12.5px] text-fountor-ink-muted">AI-powered investor matching</span>
          </div>

          <h1 className="text-[34px] sm:text-[48px] lg:text-[58px] font-semibold tracking-[-0.02em] text-fountor-ink leading-[1.05] max-w-[920px] mx-auto">
            Find Investors Already Looking for Startups Like Yours - {' '}
            <span className="text-fountor-ink-muted">Without Cold Outreach</span>
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            No cold emails. No guesswork. Just relevant investor matches in seconds.
          </p>

          <p className="mx-auto mt-6 max-w-xl text-[16.5px] sm:text-[17.5px] text-fountor-ink-muted leading-relaxed">
            Describe your startup, and get matched with investors, grants, and incubators tailored to your needs.
          </p>

          <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
            <PrimaryCTA>Get Started <ArrowRight className="h-4 w-4" /></PrimaryCTA>
            <OutlineCTA>Join Waitlist</OutlineCTA>
          </div>
        </div>

        {/* Mock UI */}
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <HeroMockUI />
        </div>
      </section>

      {/* Trust logos */}
      <section className="border-y border-fountor-border bg-fountor-surface py-8">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[12px] text-fountor-ink-muted mb-5 tracking-wide">
            Inspired by leading startup ecosystems
          </p>
          <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap opacity-60">
            {['Y Combinator', 'Sequoia', 'Accel', 'Blume', '100X.VC'].map((l) => (
              <span key={l} className="text-[14px] sm:text-[15px] font-medium text-fountor-ink-muted">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[13px] font-medium text-fountor-orange mb-3 uppercase tracking-wide">The problem</p>
            <h2 className="text-[30px] sm:text-[40px] font-semibold text-fountor-ink leading-[1.1] tracking-[-0.015em]">
              Great startups don’t fail - they just don’t reach the right investors.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-fountor-border bg-white p-6 transition-all hover:shadow-[0_8px_24px_-12px_oklch(0.18_0.005_270/_0.15)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-fountor-orange-soft mb-5">
                  <p.icon className="h-4.5 w-4.5 text-fountor-orange" strokeWidth={2.2} />
                </div>
                <h3 className="text-[16px] font-semibold text-fountor-ink leading-snug">{p.title}</h3>
                <p className="mt-2 text-[14.5px] text-fountor-ink-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 sm:py-28 bg-fountor-surface border-y border-fountor-border">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="text-[13px] font-medium text-fountor-orange mb-3 uppercase tracking-wide">The solution</p>
              <h2 className="text-[30px] sm:text-[40px] font-semibold text-fountor-ink leading-[1.1] tracking-[-0.015em]">
                Intelligent matching, built for outcomes
              </h2>
              <p className="mt-5 text-[16.5px] text-fountor-ink-muted leading-relaxed">
                Fountor understands your startup — and matches you with investors who are actively looking for what you\'re building.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Stage-aware: pre-seed to growth',
                  'Sector-mapped to your category',
                  'Intent-aligned: capital, mentorship, or both',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-fountor-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fountor-orange-soft">
                      <Check className="h-3 w-3 text-fountor-orange" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Match score visual */}
            <div className="rounded-2xl border border-fountor-border bg-white p-6 shadow-[0_24px_60px_-30px_oklch(0.18_0.005_270/_0.18)]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[12px] text-fountor-ink-muted">Match score</p>
                  <p className="text-[26px] font-semibold text-fountor-ink leading-none mt-1">
                    96<span className="text-fountor-orange">%</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] text-fountor-ink-muted">Investor</p>
                  <p className="text-[14px] font-medium text-fountor-ink">Omnivore</p>
                </div>
              </div>
              <div className="space-y-3.5">
                {[
                  { label: 'Stage', value: 98 },
                  { label: 'Sector', value: 95 },
                  { label: 'Intent', value: 94 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-[12.5px] text-fountor-ink-muted mb-1.5">
                      <span>{row.label}</span>
                      <span className="text-fountor-ink font-medium">{row.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-fountor-surface overflow-hidden">
                      <div
                        className="h-full rounded-full bg-fountor-orange"
                        style={{ width: `${row.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[13px] font-medium text-fountor-orange mb-3 uppercase tracking-wide">How it works</p>
            <h2 className="text-[30px] sm:text-[40px] font-semibold text-fountor-ink leading-[1.1] tracking-[-0.015em]">
              Three steps to better intros
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[13px] font-mono text-fountor-orange">{s.num}</span>
                  <div className="h-px flex-1 bg-fountor-border" />
                  <s.icon className="h-4 w-4 text-fountor-ink-muted" />
                </div>
                <h3 className="text-[18px] font-semibold text-fountor-ink">{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-fountor-ink-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product showcase */}
      <section className="py-20 sm:py-28 bg-fountor-surface border-y border-fountor-border">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[13px] font-medium text-fountor-orange mb-3 uppercase tracking-wide">Product</p>
            <h2 className="text-[30px] sm:text-[40px] font-semibold text-fountor-ink leading-[1.1] tracking-[-0.015em]">
              Fundraising, rethought from the ground up
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {showcase.map((s) => (
              <div key={s.title} className="rounded-2xl border border-fountor-border bg-white p-6 sm:p-7 transition-all hover:shadow-[0_12px_32px_-16px_oklch(0.18_0.005_270/_0.18)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-fountor-orange-soft">
                    <s.icon className="h-4 w-4 text-fountor-orange" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-[16px] font-semibold text-fountor-ink">{s.title}</h3>
                </div>
                <p className="text-[14.5px] text-fountor-ink-muted leading-relaxed mb-5">{s.desc}</p>
                <div className="rounded-xl bg-fountor-surface border border-fountor-border p-4">
                  {s.visual}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fountor */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[30px] sm:text-[40px] font-semibold text-fountor-ink leading-[1.1] tracking-[-0.015em] mb-10">
              Why Fountor
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              {whyFountorPoints.map((point) => (
                <div key={point.text} className="flex items-center gap-2.5 text-[16px] text-fountor-ink">
                  <point.icon className="h-4 w-4 text-fountor-orange shrink-0" strokeWidth={2.5} />
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32 bg-fountor-surface border-t border-fountor-border">
        <div className="mx-auto max-w-[760px] px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-fountor-orange-soft mb-6">
            <Target className="h-5 w-5 text-fountor-orange" strokeWidth={2.2} />
          </div>
          <h2 className="text-[30px] sm:text-[42px] font-semibold text-fountor-ink leading-[1.1] tracking-[-0.015em]">
            Stop guessing. Start getting the right investor introductions.
          </h2>
          <p className="mt-5 text-[16.5px] text-fountor-ink-muted max-w-md mx-auto leading-relaxed">
            Join the waitlist, or try the live demo and see your matches in under 60 seconds.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
            <PrimaryCTA>Get Started <ArrowRight className="h-4 w-4" /></PrimaryCTA>
            <OutlineCTA>Join Waitlist</OutlineCTA>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-fountor-border py-8 bg-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Wordmark />
          <div className="flex items-center gap-6 text-[13px] text-fountor-ink-muted">
            <a href="#" className="hover:text-fountor-ink transition-colors">Privacy</a>
            <a href="#" className="hover:text-fountor-ink transition-colors">Terms</a>
            <a href="#" className="hover:text-fountor-ink transition-colors">Contact</a>
          </div>
          <p className="text-[12.5px] text-fountor-ink-muted">© {new Date().getFullYear()} Fountor</p>
        </div>
      </footer>
    </div>
  );
}
