const benefits = [
  "enemmän jatkokäyntejä ilman manuaalista muistuttamista",
  "vähemmän asiakkaita, jotka aikovat palata mutta unohtavat",
  "viestit, jotka tuntuvat inhimillisiltä, eivät kampanjalta",
  "toimii myös pienen vastaanoton arjessa",
  "ei vaadi uuden järjestelmän opettelua alusta",
];

const objections = [
  {
    q: "en halua spämmätä asiakkaita",
    a: "afters ei perustu massaviesteihin. viestejä lähetetään harkitusti ja harvoin, asiakkaan tilanteeseen sopivalla rytmillä.",
  },
  {
    q: "meillä on jo ajanvarausjärjestelmä",
    a: "hyvä niin. afters ei korvaa ajanvarausta, vaan täydentää sitä hetkissä, joissa asiakas muuten hiljenee käynnin jälkeen.",
  },
  {
    q: "en halua lisää hallintoa",
    a: "käyttö on kevyt: määrität perusrytmin ja viestien sävyn kerran. sen jälkeen afters hoitaa muistuttamisen taustalla.",
  },
  {
    q: "entä tietosuoja?",
    a: "afters on suunniteltu niin, että viestintä voidaan pitää kevyenä ja rajattuna. tavoitteena ei ole käsitellä enempää tietoa kuin on tarpeen.",
  },
  {
    q: "sopiiko tämä pienelle vastaanotolle?",
    a: "kyllä. palvelu on tehty erityisesti pienille toimijoille, joilla ei ole aikaa tai tarvetta raskaalle järjestelmäprojektille.",
  },
  {
    q: "haluavatko asiakkaat näitä viestejä?",
    a: "kun viesti on lyhyt, asiallinen ja oikea-aikainen, se tuntuu huolenpidolta eikä myynniltä. tarkoitus on tukea hoidon jatkumista.",
  },
];

const smsSamples = [
  "hei mira, miltä selkä on tuntunut viime käynnin jälkeen?",
  "hei tomi, ajattelin vain varmistaa että olkapää on lähtenyt oikeaan suuntaan. haluatko varata jatkoajan?",
  "hei sari, jos haluat jatkaa samasta kohdasta kuin viimeksi, voimme katsoa sinulle uuden ajan.",
];

const fitFor = [
  "itsenäinen fysioterapeutti",
  "pieni klinikka",
  "vastaanotto, jossa halutaan pitää asiakkaista paremmin kiinni",
];

const notFitFor = [
  "jos haluatte aggressiivista markkinointia",
  "jos etsitte täyttä crm-järjestelmää",
  "jos tarkoitus on lähettää massaviestejä kaikille",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#26211d]">
      <header className="sticky top-0 z-30 border-b border-[#ddd4c8]/80 bg-[#f6f2ea]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <a href="#alku" className="font-serif text-2xl text-[#1d1916]">
            afters.
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#5e554e] md:flex">
            <a href="#ratkaisu" className="hover:text-[#231f1b]">ratkaisu</a>
            <a href="#hyodyt" className="hover:text-[#231f1b]">hyödyt</a>
            <a href="#kysymykset" className="hover:text-[#231f1b]">kysymykset</a>
            <a href="#kayttoonotto" className="hover:text-[#231f1b]">käyttöönotto</a>
          </nav>
          <a
            href="#loppu-cta"
            className="rounded-md border border-[#b4a697] bg-[#ecdfcd] px-4 py-2 text-sm text-[#2c2723] transition hover:bg-[#e3d3be]"
          >
            varaa esittely
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:px-8 lg:px-12 lg:pt-14" id="alku">
        <section className="grid gap-8 rounded-[12px] border border-[#dcd2c5] bg-[#f9f5ee] p-7 shadow-[0_1px_0_rgba(38,33,29,0.03)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-xs tracking-[0.12em] text-[#7b7066]">hoidon jatkuvuus fysioterapiaan</p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-[#1f1a17] sm:text-5xl">
              asiakas ei saisi kadota käynnin jälkeen.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#4d453e]">
              afters auttaa fysioterapeutteja pitämään hoitosuhteen elossa käynnin jälkeen. oikea viesti
              lähtee oikeaan aikaan — automaattisesti, rauhallisesti ja ilman ylimääräistä hallintaa.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#loppu-cta"
                className="rounded-md border border-[#b09f8d] bg-[#e7d8c3] px-5 py-2.5 text-sm text-[#2a2521] transition hover:bg-[#decdb5]"
              >
                varaa esittely
              </a>
              <a
                href="#loppu-cta"
                className="rounded-md border border-[#c9bcab] bg-[#f6efe3] px-5 py-2.5 text-sm text-[#423b34] transition hover:bg-[#f0e5d5]"
              >
                kysy lisää
              </a>
            </div>
            <p className="mt-4 text-sm text-[#6a6159]">
              suunniteltu pienille vastaanotoille, jotka haluavat enemmän jatkuvuutta ilman lisäkuormaa.
            </p>
          </div>

          <aside className="space-y-4">
            <article className="rounded-[10px] border border-[#dfd4c6] bg-[#fcf9f4] p-5">
              <p className="text-xs tracking-[0.1em] text-[#7a7066]">esimerkkivirta</p>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#3f3933]">
                <p className="rounded-md border border-[#e6dccf] bg-[#f6eee2] p-3">käynnin jälkeen: ”miltä olo tuntuu tänään?”</p>
                <p className="rounded-md border border-[#e6dccf] bg-[#f6eee2] p-3">7 päivän kohdalla: ”tarvitsetko jatkoajan?”</p>
                <p className="rounded-md border border-[#e6dccf] bg-[#f6eee2] p-3">myöhemmin: ”jatketaanko samasta kohdasta?”</p>
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <article className="rounded-[10px] border border-[#dfd4c6] bg-[#f4ece0] p-4">
                <p className="text-xs tracking-[0.1em] text-[#7a7066]">mitä tapahtuu käynnin jälkeen</p>
                <p className="mt-2 text-sm text-[#4b433c]">afters muistuttaa asiakkaasta silloin, kun muuten tulisi hiljaista.</p>
              </article>
              <article className="rounded-[10px] border border-[#dfd4c6] bg-[#f4ece0] p-4">
                <p className="text-xs tracking-[0.1em] text-[#7a7066]">arvolupaus</p>
                <p className="mt-2 text-sm text-[#4b433c]">vähemmän unohtuneita jatkokäyntejä ilman manuaalista viestittelyä.</p>
              </article>
            </div>
          </aside>
        </section>

        <section className="mt-20 border-t border-[#e2d8cc] pt-16">
          <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#201b18] sm:text-4xl">
            moni asiakas hyötyisi jatkosta — mutta ei koskaan varaa uutta aikaa.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4f4740]">
            hoito päättyy liian helposti ensimmäiseen tai toiseen käyntiin. asiakas aikoo palata, mutta arki
            vie huomion. manuaalinen muistuttaminen jää kiireessä tekemättä, eikä ajanvarausjärjestelmä yksin
            ratkaise tätä väliin jäävää hetkeä.
          </p>
        </section>

        <section id="ratkaisu" className="mt-20 border-t border-[#e2d8cc] pt-16">
          <h2 className="font-serif text-3xl text-[#201b18] sm:text-4xl">afters pitää hoitosuhteen liikkeessä.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["1", "käynti päättyy", "vastaanotto etenee normaalisti. mitään ylimääräistä rutiinia ei tarvita."],
              ["2", "afters lähettää sopivan viestin", "asiakkaalle lähtee oikea-aikainen, lyhyt ja asiallinen muistutus."],
              ["3", "asiakas palaa helpommin", "kynnys varata jatkoaika madaltuu, koska yhteys ei ehdi katketa."],
            ].map(([step, title, body]) => (
              <article key={step} className="rounded-[10px] border border-[#ddd3c6] bg-[#f8f3eb] p-5">
                <p className="text-xs tracking-[0.12em] text-[#7e7369]">vaihe {step}</p>
                <h3 className="mt-2 text-lg text-[#26211d]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#585048]">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="hyodyt" className="mt-20 border-t border-[#e2d8cc] pt-16">
          <h2 className="font-serif text-3xl text-[#201b18] sm:text-4xl">miksi tämä toimii käytännössä</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <article key={item} className="rounded-[10px] border border-[#ddd3c6] bg-[#fbf8f3] p-5">
                <p className="text-base leading-relaxed text-[#3f3832]">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-[#e2d8cc] pt-16">
          <h2 className="font-serif text-3xl text-[#201b18] sm:text-4xl">esimerkkiviestit</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4f4740]">
            viestin ei tarvitse olla pitkä tai päällekäyvä. sen pitää vain tulla oikeaan aikaan.
          </p>
          <div className="mt-8 space-y-4">
            {smsSamples.map((message, index) => (
              <article key={message} className="rounded-[10px] border border-[#ddd3c6] bg-[#fcf9f4] p-5">
                <p className="text-xs tracking-[0.1em] text-[#7b7066]">viesti {index + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#3f3933]">{message}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="kysymykset" className="mt-20 border-t border-[#e2d8cc] pt-16">
          <h2 className="font-serif text-3xl text-[#201b18] sm:text-4xl">ei lisää hälyä vastaanotolle.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {objections.map((item) => (
              <article key={item.q} className="rounded-[10px] border border-[#ddd3c6] bg-[#f8f3eb] p-5">
                <h3 className="text-base text-[#2b2622]">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b524a]">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="kayttoonotto" className="mt-20 border-t border-[#e2d8cc] pt-16">
          <h2 className="font-serif text-3xl text-[#201b18] sm:text-4xl">käyttöönotto ilman isoa projektia.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["1", "valitset kenelle viestejä lähetetään"],
              ["2", "määrität viestien rytmin"],
              ["3", "afters hoitaa muistutukset"],
            ].map(([n, text]) => (
              <article key={n} className="rounded-[10px] border border-[#ddd3c6] bg-[#fbf8f3] p-5">
                <p className="text-xs tracking-[0.1em] text-[#7b7066]">askel {n}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#453e38]">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#575048]">
            palvelu on suunniteltu nykyisten työnkulkujen ympärille. tarkoitus on tukea arkea, ei korvata
            olemassa olevia järjestelmiä.
          </p>
        </section>

        <section className="mt-20 border-t border-[#e2d8cc] pt-16">
          <h2 className="font-serif text-3xl text-[#201b18] sm:text-4xl">kenelle afters on tehty</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[10px] border border-[#ddd3c6] bg-[#f8f3eb] p-6">
              <h3 className="text-lg text-[#26211d]">sopii teille, jos</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#4f4740]">
                {fitFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[10px] border border-[#ddd3c6] bg-[#f4ece0] p-6">
              <h3 className="text-lg text-[#26211d]">ei ehkä teille, jos</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#4f4740]">
                {notFitFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="loppu-cta" className="mt-20 rounded-[12px] border border-[#d8cebf] bg-[#efe5d8] p-8 sm:p-10">
          <h2 className="max-w-3xl font-serif text-3xl text-[#1f1b17] sm:text-4xl">
            rauhallinen tapa varmistaa, että asiakas palaa.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4d453e]">
            afters auttaa pitämään yhteyden oikealla tavalla käynnin jälkeen — ilman että vastaanoton tarvitsee
            muistaa kaikkea itse.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:hello@afters.fi?subject=Esittelypyynt%C3%B6"
              className="rounded-md border border-[#aa9987] bg-[#dfcfb8] px-5 py-2.5 text-sm text-[#2d2824] transition hover:bg-[#d6c3aa]"
            >
              varaa esittely
            </a>
            <a
              href="mailto:hello@afters.fi?subject=Kysymys%20afters-palvelusta"
              className="rounded-md border border-[#c5b8a8] bg-[#f7efe2] px-5 py-2.5 text-sm text-[#403933] transition hover:bg-[#f1e6d6]"
            >
              kysy lisää
            </a>
          </div>
        </section>
      </div>

      <footer className="border-t border-[#ddd3c6] py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-[#61574f] sm:px-8 lg:px-12">
          <p className="font-serif text-xl text-[#231f1b]">afters.</p>
          <p>kevyt jatkohoidon viestikerros fysioterapeuteille ja pienille klinikoille.</p>
          <p>hello@afters.fi</p>
          <p>© {new Date().getFullYear()} afters. kaikki oikeudet pidätetään.</p>
        </div>
      </footer>
    </main>
  );
}
