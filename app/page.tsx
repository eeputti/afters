"use client";

import { useEffect, useMemo, useState } from "react";

type Language = "en" | "fi";

type Dictionary = {
  nav: { problem: string; solution: string; benefits: string; faq: string };
  ctaPrimary: string;
  heroBadge: string;
  heroTitle: string;
  heroBody: string;
  ctaSecondary: string;
  builtForPrefix: string;
  heroBullets: string[];
  previewLabel: string;
  previewCards: Array<{ title: string; body: string }>;
  problemTitle: string;
  problemBody: string;
  problemCards: Array<{ title: string; body: string }>;
  solutionTitle: string;
  solutionBody: string;
  solutionPillars: Array<{ title: string; body: string }>;
  howTitle: string;
  howBody: string;
  stepLabel: string;
  steps: Array<{ title: string; body: string }>;
  benefitsTitle: string;
  benefits: string[];
  benefitsRow: string[];
  testimonialsTitle: string;
  testimonials: string[];
  pilotBadge: string;
  pilotTitle: string;
  pilotBody: string;
  pilotCta: string;
  faqTitle: string;
  faqs: Array<{ q: string; a: string }>;
  footer: string;
};

const content: Record<Language, Dictionary> = {
  en: {
    nav: { problem: "Problem", solution: "Solution", benefits: "Benefits", faq: "FAQ" },
    ctaPrimary: "Book A Free Pilot",
    heroBadge: "Bring Patients Back. Fill Empty Slots.",
    heroTitle: "Recover Lost Clinic Revenue With Simple SMS Follow-Up Automation.",
    heroBody:
      "Flowon helps clinics bring patients back for follow-ups and fill cancelled appointments automatically, without changing the way the team already works.",
    ctaSecondary: "See How It Works",
    builtForPrefix: "Built for",
    heroBullets: [
      "Bring back patients who would otherwise disappear.",
      "Fill last-minute gaps before revenue is lost.",
      "Start without changing your current systems.",
    ],
    previewLabel: "Product preview",
    previewCards: [
      { title: "Cancelled appointment alert", body: "3:30 PM slot opened for today" },
      { title: "Automated SMS sent", body: "A slot opened today at 3:30. Reply YES to claim it." },
      { title: "Follow-up sequence", body: "Day 3 check-in → Day 7 prompt → Rebooking reminder" },
      { title: "Revenue Recovered This Month", body: "$8,420" },
    ],
    problemTitle: "Most Clinics Do Not Have A Lead Problem. They Have A Return-Visit Problem.",
    problemBody:
      "Revenue gets lost in small, repeated ways. A patient forgets to book their next session. A cancelled appointment leaves a hole in the day. Front desk follow-up gets buried by real-world clinic pace.",
    problemCards: [
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
    ],
    solutionTitle: "Flowon Fixes The Two Biggest Revenue Leaks In A Clinic.",
    solutionBody:
      "Flowon sends the right SMS at the right time to bring patients back and refill cancelled slots before they go unused. It runs quietly in the background so your team can stay focused on care.",
    solutionPillars: [
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
    ],
    howTitle: "How Flowon Works",
    howBody: "Set it once. Let it run. Keep the schedule moving.",
    stepLabel: "Step",
    steps: [
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
    ],
    benefitsTitle: "What Clinics Actually Get",
    benefits: [
      "More revenue from the patients you already have.",
      "Fewer empty hours in the diary.",
      "Less manual follow-up for staff.",
      "A simpler way to improve retention.",
      "Better patient continuity.",
    ],
    benefitsRow: [
      "Recover missed revenue.",
      "Reduce admin time.",
      "Increase follow-up compliance.",
      "Fill more schedule gaps.",
    ],
    testimonialsTitle: "Built For Clinics That Want Simple Wins",
    testimonials: [
      "Flowon helped us bring back patients we would have otherwise lost, without adding admin.",
      "We started filling cancelled appointments faster, and the front desk stopped chasing every gap manually.",
      "It felt unusually easy to implement. That was the biggest surprise.",
    ],
    pilotBadge: "Start With A Free Pilot",
    pilotTitle: "See Revenue Recovery In Your Clinic Before You Commit.",
    pilotBody:
      "Get a free 30-day pilot with setup, one follow-up workflow, one cancellation recovery workflow, and hands-on launch support.",
    pilotCta: "Apply For A Free Pilot",
    faqTitle: "Frequently Asked Questions",
    faqs: [
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
    ],
    footer: "Flowon is the simple revenue recovery system for modern clinics.",
  },
  fi: {
    nav: { problem: "Haaste", solution: "Ratkaisu", benefits: "Hyödyt", faq: "UKK" },
    ctaPrimary: "Varaa ilmainen pilotti",
    heroBadge: "Tuo asiakkaat takaisin. Täytä tyhjät ajat.",
    heroTitle: "Palauta menetettyä liikevaihtoa klinikalle yksinkertaisella SMS-automaatiolla.",
    heroBody:
      "Flowon auttaa klinikoita saamaan asiakkaat takaisin jatkokäynneille ja täyttämään peruutusajat automaattisesti ilman, että tiimin nykyistä toimintatapaa pitää muuttaa.",
    ctaSecondary: "Katso miten se toimii",
    builtForPrefix: "Rakennettu",
    heroBullets: [
      "Tuo takaisin asiakkaat, jotka muuten katoaisivat.",
      "Täytä viime hetken aukot ennen kuin liikevaihtoa menetetään.",
      "Aloita ilman nykyisten järjestelmien vaihtoa.",
    ],
    previewLabel: "Tuote-esikatselu",
    previewCards: [
      { title: "Peruutusajan hälytys", body: "Tälle päivälle vapautui aika klo 15.30" },
      { title: "Automaattinen SMS lähetetty", body: "Tänään vapautui aika klo 15.30. Vastaa KYLLÄ varataksesi." },
      { title: "Jatkohoitoviestien sarja", body: "Päivä 3 check-in → Päivä 7 muistutus → Uusintavaraus" },
      { title: "Tässä kuussa palautettu liikevaihto", body: "8 420 $" },
    ],
    problemTitle: "Useimmilla klinikoilla ongelma ei ole liidit. Ongelma on paluukäynnit.",
    problemBody:
      "Liikevaihtoa valuu pois pienissä toistuvissa kohdissa. Asiakas unohtaa varata seuraavan ajan. Peruutus jättää tyhjän aukon päivään. Vastaanoton seuranta hautautuu kiireeseen.",
    problemCards: [
      {
        title: "Unohtuneet jatkokäynnit",
        body: "Asiakkaat, joiden pitäisi palata, eivät usein palaa. Hoidon jatkuvuus katkeaa ja liikevaihtoa menetetään.",
      },
      {
        title: "Täyttämättömät peruutukset",
        body: "Yksi tyhjä aika vaikuttaa pieneltä, mutta toistuvat aukot kasvavat nopeasti merkittäväksi menetykseksi.",
      },
      {
        title: "Manuaalinen peräänsoitto",
        body: "Vastaanoton ei pitäisi käyttää tunteja toistuvaan muistuttamiseen ja aukkojen paikkaamiseen.",
      },
      {
        title: "Liikaa monimutkaisuutta",
        body: "Moni työkalu lupaa hallintaa, mutta lisää käytännössä työtä ja uuden järjestelmän ylläpidon.",
      },
    ],
    solutionTitle: "Flowon korjaa klinikan kaksi suurinta liikevaihdon vuotokohtaa.",
    solutionBody:
      "Flowon lähettää oikean SMS-viestin oikeaan aikaan, jotta asiakkaat palaavat ja peruutusajat täyttyvät ennen kuin ne jäävät käyttämättä. Se toimii hiljaa taustalla, jotta tiimi voi keskittyä hoitoon.",
    solutionPillars: [
      {
        title: "Jatkokäyntien palautus",
        body: "Automaattiset SMS-muistutukset kannustavat varaamaan seuraavan ajan ennen kuin hoito katkeaa.",
      },
      {
        title: "Peruutusaikojen täyttö",
        body: "Kun aika vapautuu, Flowon auttaa täyttämään sen nopeasti kohdennetulla viestinnällä sopiville asiakkaille.",
      },
      {
        title: "Työnkulkuystävällinen",
        body: "Ei raskasta uudelleenkoulutusta, ei massiivista käyttöönottoa eikä uutta operatiivista kuormaa.",
      },
    ],
    howTitle: "Miten Flowon toimii",
    howBody: "Aseta kerran. Anna pyöriä. Pidä kalenteri liikkeessä.",
    stepLabel: "Vaihe",
    steps: [
      {
        title: "Yhdistä nykyiseen työnkulkuun",
        body: "Flowon sopii klinikan nykyiseen toimintatapaan. Ei rip-and-replace -projektia. Ei suurta prosessimuutosta.",
      },
      {
        title: "Aseta yksinkertaiset säännöt",
        body: "Valitse milloin muistutukset lähtevät, mitkä ajanvaraukset ovat tärkeimpiä ja miten tyhjät ajat täytetään.",
      },
      {
        title: "Flowon lähettää SMS-viestit automaattisesti",
        body: "Asiakkaat saavat oikea-aikaiset ja selkeät viestit, jotka ohjaavat varaamaan, palaamaan tai ottamaan vapaan ajan.",
      },
      {
        title: "Palauta liikevaihtoa ilman lisäadminia",
        body: "Tiimi käyttää vähemmän aikaa peräänjuoksuun. Kalenteri pysyy täydempänä. Useampi asiakas palaa.",
      },
    ],
    benefitsTitle: "Mitä klinikka käytännössä saa",
    benefits: [
      "Enemmän liikevaihtoa nykyisistä asiakkaista.",
      "Vähemmän tyhjiä tunteja kalenterissa.",
      "Vähemmän manuaalista seurantaa henkilöstölle.",
      "Yksinkertaisempi tapa parantaa asiakaspitoa.",
      "Parempi hoidon jatkuvuus.",
    ],
    benefitsRow: [
      "Palauta menetettyä liikevaihtoa.",
      "Vähennä hallinnollista työtä.",
      "Paranna jatkokäyntien toteutumista.",
      "Täytä useampia kalenteriaukkoja.",
    ],
    testimonialsTitle: "Rakennettu klinikoille, jotka haluavat selkeitä tuloksia",
    testimonials: [
      "Flowon auttoi meitä saamaan takaisin asiakkaat, jotka olisimme muuten menettäneet ilman lisätyötä.",
      "Aloimme täyttää peruutusaikoja nopeammin, eikä vastaanoton tarvinnut enää jahdata jokaista aukkoa käsin.",
      "Käyttöönotto oli yllättävän helppo. Se oli suurin yllätys.",
    ],
    pilotBadge: "Aloita ilmaisella pilotilla",
    pilotTitle: "Näe liikevaihdon palautuminen omalla klinikallasi ennen sitoutumista.",
    pilotBody:
      "Saat maksuttoman 30 päivän pilotin, johon kuuluu käyttöönotto, yksi jatkokäyntien työnkulku, yksi peruutusaikojen täyttötyönkulku ja käytännön tuki käynnistykseen.",
    pilotCta: "Hae ilmaiseen pilottiin",
    faqTitle: "Usein kysytyt kysymykset",
    faqs: [
      {
        q: "Pitääkö nykyinen ajanvarausjärjestelmä vaihtaa?",
        a: "Ei. Flowon on suunniteltu toimimaan nykyisen työnkulun kanssa, ei korvaamaan sitä.",
      },
      {
        q: "Onko tämä vain isoille klinikoille?",
        a: "Ei. Flowon on tehty pienille ja keskisuurille klinikoille, jotka haluavat käytännöllistä palautusta ilman monimutkaisuutta.",
      },
      {
        q: "Millaisille klinikoille Flowon sopii?",
        a: "Fysioterapeuteille, hammaslääkäreille, terapeuteille ja muille toistuvista käynneistä riippuvaisille terveydenhuollon toimijoille.",
      },
      {
        q: "Tekeekö tämä vastaanotolle lisää työtä?",
        a: "Ei. Tavoite on päinvastainen: vähentää manuaalista seurantaa ja palauttaa ajanvarauksia pienemmällä vaivalla.",
      },
      {
        q: "Kuinka nopeasti voimme aloittaa?",
        a: "Pilotti on tarkoituksella kevyt ja rakennettu nopeaan aloitukseen.",
      },
      {
        q: "Miksi juuri SMS?",
        a: "Se on suora, nopea ja asiakkaalle helppo tapa reagoida muistutuksiin ja vapaisiin aikoihin.",
      },
    ],
    footer: "Flowon on modernin klinikan yksinkertainen liikevaihdon palautusjärjestelmä.",
  },
};

const builtFor = ["Physiotherapists", "Dentists", "Therapists", "Small Clinics"];
const builtForFi = ["fysioterapeuteille", "hammaslääkäreille", "terapeuteille", "pienille klinikoille"];


export default function Page() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    setLang(params.get("lang") === "fi" ? "fi" : "en");
  }, []);

  const t = content[lang];

  const switchLanguage = (nextLang: Language) => {
    setLang(nextLang);

    if (typeof window === "undefined") {
      return;
    }

    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLang);
    window.history.replaceState({}, "", url.toString());
  };

  const builtForItems = useMemo(() => (lang === "fi" ? builtForFi : builtFor), [lang]);

  return (
    <main lang={lang} className="min-h-screen bg-[#FCFCFD] text-[#0F172A]">
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
            <a href="#problem" className="hover:text-[#2CB1A1]">{t.nav.problem}</a>
            <a href="#solution" className="hover:text-[#2CB1A1]">{t.nav.solution}</a>
            <a href="#benefits" className="hover:text-[#2CB1A1]">{t.nav.benefits}</a>
            <a href="#faq" className="hover:text-[#2CB1A1]">{t.nav.faq}</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-lg border border-[#C9DFF5] bg-white p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => switchLanguage("fi")}
                aria-pressed={lang === "fi"}
                className={`rounded-md px-2.5 py-1 transition ${
                  lang === "fi" ? "bg-[#0F172A] text-white" : "text-[#334155] hover:bg-[#F1F5F9]"
                }`}
              >
                FI
              </button>
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                aria-pressed={lang === "en"}
                className={`rounded-md px-2.5 py-1 transition ${
                  lang === "en" ? "bg-[#0F172A] text-white" : "text-[#334155] hover:bg-[#F1F5F9]"
                }`}
              >
                EN
              </button>
            </div>
            <a href="#pilot" className="rounded-xl bg-[#2CB1A1] px-4 py-2 text-sm font-semibold text-white hover:bg-[#229989]">
              {t.ctaPrimary}
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pt-20">
        <div>
          <p className="inline-flex rounded-full bg-[#DCEEFF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#1E293B]">{t.heroBadge}</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1E293B]">{t.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pilot" className="rounded-xl bg-[#2CB1A1] px-5 py-3 text-sm font-semibold text-white hover:bg-[#229989]">{t.ctaPrimary}</a>
            <a href="#how" className="rounded-xl border border-[#DCEEFF] bg-white px-5 py-3 text-sm font-semibold text-[#1E293B] hover:bg-[#F5F7FA]">{t.ctaSecondary}</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-[#1E293B]">
            {builtForItems.map((item) => (
              <span key={item} className="rounded-full bg-[#F5F7FA] px-3 py-1">
                {t.builtForPrefix} {item}
              </span>
            ))}
          </div>
          <ul className="mt-8 space-y-2 text-[#1E293B]">
            {t.heroBullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </div>

        <aside className="rounded-3xl border border-[#DCEEFF] bg-white p-6 shadow-[0_22px_50px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E293B]">{t.previewLabel}</p>
          <div className="mt-5 space-y-4">
            <article className="rounded-2xl bg-[#F5F7FA] p-4">
              <p className="text-xs text-[#1E293B]">{t.previewCards[0].title}</p>
              <p className="mt-1 font-medium">{t.previewCards[0].body}</p>
            </article>
            <article className="rounded-2xl bg-[#DCEEFF] p-4">
              <p className="text-xs text-[#1E293B]">{t.previewCards[1].title}</p>
              <p className="mt-1 text-sm">{t.previewCards[1].body}</p>
            </article>
            <article className="rounded-2xl bg-[#F5F7FA] p-4">
              <p className="text-xs text-[#1E293B]">{t.previewCards[2].title}</p>
              <p className="mt-1 text-sm">{t.previewCards[2].body}</p>
            </article>
            <article className="rounded-2xl border border-[#14B87A]/30 bg-[#14B87A]/10 p-4">
              <p className="text-xs text-[#0F172A]">{t.previewCards[3].title}</p>
              <p className="mt-1 text-2xl font-semibold text-[#0F172A]">{t.previewCards[3].body}</p>
            </article>
          </div>
        </aside>
      </section>

      <section id="problem" className="bg-[#F5F7FA] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">{t.problemTitle}</h2>
          <p className="mt-5 max-w-4xl text-lg text-[#1E293B]">{t.problemBody}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.problemCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1E293B]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">{t.solutionTitle}</h2>
        <p className="mt-5 max-w-4xl text-lg text-[#1E293B]">{t.solutionBody}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.solutionPillars.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#DCEEFF] bg-[#FCFCFD] p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1E293B]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="bg-[#0F172A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">{t.howTitle}</h2>
          <p className="mt-4 text-lg text-[#DCEEFF]">{t.howBody}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.steps.map((step, idx) => (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2CB1A1]">
                  {t.stepLabel} {idx + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#DCEEFF]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.benefitsTitle}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.benefits.map((item) => (
            <article key={item} className="rounded-2xl border border-[#DCEEFF] bg-white p-5">
              <p className="font-medium text-[#1E293B]">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-3 rounded-2xl bg-[#F5F7FA] p-6 text-sm font-semibold text-[#1E293B] md:grid-cols-4">
          {t.benefitsRow.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">{t.testimonialsTitle}</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {t.testimonials.map((quote) => (
              <article key={quote} className="rounded-2xl border border-white bg-white p-6">
                <p className="text-[#1E293B]">“{quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pilot" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-3xl bg-[#0F172A] p-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2CB1A1]">{t.pilotBadge}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">{t.pilotTitle}</h2>
          <p className="mt-4 max-w-3xl text-[#DCEEFF]">{t.pilotBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#top" className="rounded-xl bg-[#2CB1A1] px-5 py-3 text-sm font-semibold text-white hover:bg-[#229989]">{t.pilotCta}</a>
            <a href="#how" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">{t.ctaSecondary}</a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.faqTitle}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {t.faqs.map((item) => (
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
