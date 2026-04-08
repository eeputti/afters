const problemCards = [
  {
    title: "Missed Follow-Ups",
    body: "Patients who should return often do not, leading to broken care continuity and lost revenue.",
  },
  {
    title: "Unfilled Cancellations",
    body: "A single empty slot seems small, but repeated gaps quickly compound into meaningful losses.",
  },
  {
    title: "Manual Chasing",
    body: "Front desk teams should not spend hours doing repetitive reminder and rescue work.",
  },
  {
    title: "Too Much Complexity",
    body: "Most tools promise control but add operational burden and another system to manage.",
  },
];

const solutionPillars = [
  {
    title: "Follow-Up Recovery",
    body: "Automated SMS reminders encourage patients to book the next visit before they drift away.",
  },
  {
    title: "Cancellation Recovery",
    body: "When a slot opens, Flowon helps fill it fast with targeted outreach to suitable patients.",
  },
  {
    title: "Workflow-Friendly",
    body: "No heavy retraining, no giant implementation, and no new operating burden for your team.",
  },
];

const steps = [
  {
    title: "Connect To Your Existing Workflow",
    body: "Flowon fits around the way your clinic already runs. No rip-and-replace. No major process change.",
  },
  {
    title: "Set Simple Follow-Up And Fill Rules",
    body: "Choose when reminders go out, which appointments matter most, and how empty slots should be filled.",
  },
  {
    title: "Flowon Sends Automated SMS",
    body: "Patients receive timely, clear messages that prompt them to book, return, or take an open slot.",
  },
  {
    title: "Recover Revenue Without Extra Admin",
    body: "Your team spends less time chasing. Your schedule stays fuller. More patients come back.",
  },
];

const benefits = [
  "More revenue from the patients you already have.",
  "Fewer empty hours in the diary.",
  "Less manual follow-up for staff.",
  "A simpler way to improve retention.",
  "Better patient continuity.",
];

const faqs = [
  {
    q: "Do I need to change my current booking system?",
    a: "No. Flowon is designed to work with existing workflows, not replace them.",
  },
  {
    q: "Is this only for large clinics?",
    a: "No. Flowon is built for small to mid-sized clinics that want practical recovery without complexity.",
  },
  {
    q: "What kind of clinics is Flowon for?",
    a: "Physiotherapists, dentists, therapists, and healthcare providers that rely on repeat visits.",
  },
  {
    q: "Will this create more work for my front desk?",
    a: "No. The goal is the opposite: reduce manual follow-up and recover appointments with less effort.",
  },
  {
    q: "How quickly can we start?",
    a: "The pilot is intentionally lightweight and designed for fast launch.",
  },
  {
    q: "Why SMS?",
    a: "It is direct, fast, and easy for patients to act on in reminder and open-slot moments.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FCFCFD] text-[#0F172A]">
      <header className="sticky top-0 z-40 border-b border-[#DCEEFF] bg-[#FCFCFD]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Flowon home">
            <img
              src="/brand/flowon-symbol.svg"
              alt=""
              aria-hidden="true"
              className="h-9 w-9"
            />
            <img
              src="/brand/flowon-logo-horizontal-dark.svg"
              alt="Flowon"
              className="h-6 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#1E293B] md:flex">
            <a href="#problem" className="hover:text-[#2CB1A1]">Problem</a>
            <a href="#solution" className="hover:text-[#2CB1A1]">Solution</a>
            <a href="#benefits" className="hover:text-[#2CB1A1]">Benefits</a>
            <a href="#faq" className="hover:text-[#2CB1A1]">FAQ</a>
          </nav>
          <a href="#pilot" className="rounded-xl bg-[#2CB1A1] px-4 py-2 text-sm font-semibold text-white hover:bg-[#229989]">
            Book A Free Pilot
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pt-20">
        <div>
          <p className="inline-flex rounded-full bg-[#DCEEFF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#1E293B]">
            Bring Patients Back. Fill Empty Slots.
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Recover Lost Clinic Revenue With Simple SMS Follow-Up Automation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1E293B]">
            Flowon helps clinics bring patients back for follow-ups and fill cancelled appointments automatically,
            without changing the way the team already works.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pilot" className="rounded-xl bg-[#2CB1A1] px-5 py-3 text-sm font-semibold text-white hover:bg-[#229989]">Book A Free Pilot</a>
            <a href="#how" className="rounded-xl border border-[#DCEEFF] bg-white px-5 py-3 text-sm font-semibold text-[#1E293B] hover:bg-[#F5F7FA]">See How It Works</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-[#1E293B]">
            {["Physiotherapists", "Dentists", "Therapists", "Small Clinics"].map((item) => (
              <span key={item} className="rounded-full bg-[#F5F7FA] px-3 py-1">
                Built for {item}
              </span>
            ))}
          </div>
          <ul className="mt-8 space-y-2 text-[#1E293B]">
            <li>• Bring back patients who would otherwise disappear.</li>
            <li>• Fill last-minute gaps before revenue is lost.</li>
            <li>• Start without changing your current systems.</li>
          </ul>
        </div>

        <aside className="rounded-3xl border border-[#DCEEFF] bg-white p-6 shadow-[0_22px_50px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E293B]">Product preview</p>
          <div className="mt-5 space-y-4">
            <article className="rounded-2xl bg-[#F5F7FA] p-4">
              <p className="text-xs text-[#1E293B]">Cancelled appointment alert</p>
              <p className="mt-1 font-medium">3:30 PM slot opened for today</p>
            </article>
            <article className="rounded-2xl bg-[#DCEEFF] p-4">
              <p className="text-xs text-[#1E293B]">Automated SMS sent</p>
              <p className="mt-1 text-sm">“A slot opened today at 3:30. Reply YES to claim it.”</p>
            </article>
            <article className="rounded-2xl bg-[#F5F7FA] p-4">
              <p className="text-xs text-[#1E293B]">Follow-up sequence</p>
              <p className="mt-1 text-sm">Day 3 check-in → Day 7 prompt → Rebooking reminder</p>
            </article>
            <article className="rounded-2xl border border-[#14B87A]/30 bg-[#14B87A]/10 p-4">
              <p className="text-xs text-[#0F172A]">Revenue Recovered This Month</p>
              <p className="mt-1 text-2xl font-semibold text-[#0F172A]">$8,420</p>
            </article>
          </div>
        </aside>
      </section>

      <section id="problem" className="bg-[#F5F7FA] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">
            Most Clinics Do Not Have A Lead Problem. They Have A Return-Visit Problem.
          </h2>
          <p className="mt-5 max-w-4xl text-lg text-[#1E293B]">
            Revenue gets lost in small, repeated ways. A patient forgets to book their next session. A cancelled
            appointment leaves a hole in the day. Front desk follow-up gets buried by real-world clinic pace.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1E293B]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
          Flowon Fixes The Two Biggest Revenue Leaks In A Clinic.
        </h2>
        <p className="mt-5 max-w-4xl text-lg text-[#1E293B]">
          Flowon sends the right SMS at the right time to bring patients back and refill cancelled slots before they go unused.
          It runs quietly in the background so your team can stay focused on care.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {solutionPillars.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#DCEEFF] bg-[#FCFCFD] p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1E293B]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="bg-[#0F172A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">How Flowon Works</h2>
          <p className="mt-4 text-lg text-[#DCEEFF]">Set it once. Let it run. Keep the schedule moving.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {steps.map((step, idx) => (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2CB1A1]">Step {idx + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#DCEEFF]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">What Clinics Actually Get</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <article key={item} className="rounded-2xl border border-[#DCEEFF] bg-white p-5">
              <p className="font-medium text-[#1E293B]">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-3 rounded-2xl bg-[#F5F7FA] p-6 text-sm font-semibold text-[#1E293B] md:grid-cols-4">
          <p>Recover missed revenue.</p>
          <p>Reduce admin time.</p>
          <p>Increase follow-up compliance.</p>
          <p>Fill more schedule gaps.</p>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">Built For Clinics That Want Simple Wins</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              "Flowon helped us bring back patients we would have otherwise lost, without adding admin.",
              "We started filling cancelled appointments faster, and the front desk stopped chasing every gap manually.",
              "It felt unusually easy to implement. That was the biggest surprise.",
            ].map((quote) => (
              <article key={quote} className="rounded-2xl border border-white bg-white p-6">
                <p className="text-[#1E293B]">“{quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pilot" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-3xl bg-[#0F172A] p-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2CB1A1]">Start With A Free Pilot</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">See Revenue Recovery In Your Clinic Before You Commit.</h2>
          <p className="mt-4 max-w-3xl text-[#DCEEFF]">
            Get a free 30-day pilot with setup, one follow-up workflow, one cancellation recovery workflow,
            and hands-on launch support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#top" className="rounded-xl bg-[#2CB1A1] px-5 py-3 text-sm font-semibold text-white hover:bg-[#229989]">Apply For A Free Pilot</a>
            <a href="#how" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">See How It Works</a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-2xl border border-[#DCEEFF] bg-white p-5">
              <h3 className="font-semibold">{item.q}</h3>
              <p className="mt-2 text-sm text-[#1E293B]">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#DCEEFF] bg-[#FCFCFD] px-6 py-10 text-center text-sm text-[#1E293B]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
          <img
            src="/brand/flowon-logo-horizontal-dark.svg"
            alt="Flowon"
            className="h-6 w-auto"
          />
          <p>Flowon is the simple revenue recovery system for modern clinics.</p>
        </div>
      </footer>
    </main>
  );
}
