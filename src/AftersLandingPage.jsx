import React from "react";

const principles = [
  "automaattinen, ei päällekäyvä.",
  "muistuttaa oikealla hetkellä.",
  "ei lisää turhaa hallintaa.",
  "rehellinen, ihmisen oloinen.",
  "jatkamaan ilman vaivaa.",
  "lämmin, muttei liian pehmeä.",
  "hiljainen mutta luotettava.",
];

const notThisCards = [
  "kliininen muistutusrobotti",
  "geneerinen markkinointityökalu",
  "automaattinen massaviestien dashboard",
  "liian pehmeä wellness-höttö",
];

const palette = [
  { name: "paper", hex: "#f8f5ef", swatch: "bg-[#f8f5ef]" },
  { name: "sand", hex: "#ede5d8", swatch: "bg-[#ede5d8]" },
  { name: "stone", hex: "#d8cec0", swatch: "bg-[#d8cec0]" },
  { name: "taupe", hex: "#b4a697", swatch: "bg-[#b4a697]" },
  { name: "ink", hex: "#25201c", swatch: "bg-[#25201c]" },
];

const toneRules = [
  {
    title: "focused",
    detail: "ei pitkää valitusta",
  },
  {
    title: "tihkuva tila",
    detail: "ilmavuus, hiljaisuus on osa designia",
  },
  {
    title: "rajat & viivat",
    detail: "tuskin näkyvä",
  },
  {
    title: "korttien kieli",
    detail: "8–10 px rounded, ei pyöreä",
  },
  {
    title: "napit",
    detail: "hillityt",
  },
  {
    title: "animaatiot",
    detail: "erittäin kevyet",
  },
];

const infoBlocks = [
  {
    title: "miten se toimii",
    body: "käynnin jälkeen afters lähettää oikeaan ajankohtaan lyhyen, ihmisen oloisen viestin asiakkaallesi.",
  },
  {
    title: "kenelle",
    body: "fysioterapeuteille, pienille klinikoille ja vastaanotoille, jotka haluavat jatkuvuutta ilman lisätyötä.",
  },
  {
    title: "lopputulos",
    body: "asiakas palaa herkemmin, hoitosuhde pysyy aktiivisena ja arki tuntuu kevyemmältä.",
  },
];

const smsExamples = [
  {
    label: "heti",
    message:
      "hei mirva, toivottavasti vointisi on ollut hyvä. miten hartia tuntuu nyt? jos haluaisit jatkaa hoitoa, voisitko kysyä ensi viikolle. — kaisa / fysioterapia laakeri",
  },
  {
    label: "muutama viikko",
    message:
      "hei tomi, viime kerrasta on kulunut viisi käyntiä. halusin varmistaa, että selkä kestää arjen. onko tarvetta jatkoajalle? — juuso / liikuntaklinikka virta",
  },
  {
    label: "kotiutumisvaihe",
    message:
      "hei sari, miten harjoitukset ovat onnistuneet? jos jokin tuntuu epävarmalta tai vaiva on palannut, otetaan asia uudelleen käsittelyyn. — anna / fyysio rantala",
  },
];

export default function AftersLandingPage() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#2a2521] antialiased selection:bg-[#d8cec0] selection:text-[#201b17]">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <section className="rounded-[10px] border border-[#d8cec0] bg-[#f8f5ef] p-7 shadow-[0_1px_0_rgba(37,32,28,0.02)] sm:p-10 lg:p-12">
          <p className="text-xs tracking-[0.14em] text-[#7a7066]">brändi-identiteetti 2026</p>
          <h1 className="mt-5 font-serif text-5xl leading-none text-[#1f1b17] sm:text-6xl lg:text-7xl">afters.</h1>
          <p className="mt-5 max-w-2xl text-xl text-[#3a342f] sm:text-2xl">hoito ei lopu vastaanottokäyntiin.</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#574f47]">
            afters huolehtii siitä, että sopiva kysymys lähtee oikein aikaan — hiljaa, luotettavasti,
            ilman että sinun tarvitsee muistaa.
          </p>
          <button className="mt-8 inline-flex items-center rounded-md border border-[#b4a697] bg-[#efe6d9] px-5 py-2.5 text-sm text-[#2e2925] transition-colors duration-200 hover:bg-[#e8dccb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b4a697] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f5ef]">
            varaa esittely
          </button>
        </section>

        <section className="mt-24">
          <h2 className="max-w-4xl font-serif text-3xl leading-tight text-[#221e1a] sm:text-4xl lg:text-[2.6rem]">
            asiakassuhde ei pääty vastaanottokäyntiin. se vasta alkaa.
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#4f4740]">
            afters pitää hoidon jatkumon hengissä silloin, kun arki palaa päälle. asiakkaalle tulee tunne,
            että hänet muistetaan, ja vastaanotolle on helpompi palata oikealla hetkellä.
          </p>
        </section>

        <section className="mt-24 rounded-[10px] border border-[#d8cec0] bg-[#f3eee5] p-6 sm:p-8">
          <h3 className="text-sm tracking-[0.1em] text-[#70665d]">lupaus</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item}
                className="rounded-[10px] border border-[#e2d8ca] bg-[#f9f6f0] px-4 py-3 text-sm text-[#3d3732]"
              >
                {item}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h3 className="text-2xl font-serif text-[#221e1a]">älä ole tätä</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {notThisCards.map((item) => (
              <article key={item} className="rounded-[10px] border border-[#ddd2c4] bg-[#f7f3ec] p-4">
                <p className="text-xs tracking-[0.08em] text-[#7a7066]">ei tämä</p>
                <p className="mt-2 text-sm leading-relaxed text-[#3e3833]">{item}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-[#4b443d]">
            afters on ajateltu avustajaksi hoitajan ja asiakkaan väliin — ei uudeksi järjestelmäksi, joka
            huutaa huomiota.
          </p>
        </section>

        <section className="mt-24 rounded-[10px] border border-[#d9cebf] bg-[#f8f5ef] p-6 sm:p-8">
          <h3 className="text-sm tracking-[0.1em] text-[#70665d]">värijärjestelmä</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {palette.map((color) => (
              <article key={color.name} className="rounded-[10px] border border-[#dfd4c6] bg-[#f4eee4] p-3">
                <div className={`h-20 rounded-md border border-[#c8bcaf] ${color.swatch}`} />
                <div className="mt-3 flex items-center justify-between text-sm text-[#3f3934]">
                  <span>{color.name}</span>
                  <span className="font-mono text-xs uppercase tracking-wide text-[#6f665d]">{color.hex}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <article className="rounded-[10px] border border-[#dbd0c2] bg-[#f8f4ee] p-6 sm:p-8">
            <h3 className="text-sm tracking-[0.1em] text-[#70665d]">typografia</h3>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-[#887d72]">display style</p>
                <p className="mt-2 font-serif text-4xl leading-tight text-[#1f1b17]">afters. jatkaa hoidon sävyä.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-[#887d72]">body style</p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#4e4740]">
                  selkeä, pehmeästi rytmitetty leipäteksti tukee rauhallista lukukokemusta ja auttaa viestin
                  menemään perille nopeasti.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-[#887d72]">ui label style</p>
                <p className="mt-2 text-sm tracking-[0.06em] text-[#3a342f]">hillitty, täsmällinen, helposti skannattava</p>
              </div>
            </div>
          </article>
          <article className="rounded-[10px] border border-[#dbd0c2] bg-[#f3ece0] p-6 sm:p-8">
            <h4 className="font-serif text-2xl text-[#241f1b]">typografian tunne</h4>
            <p className="mt-4 text-base leading-relaxed text-[#4c443d]">
              editorial, calm, readable, premium, grounded. kokonaisuus tuntuu harkitulta, mutta ei etäiseltä.
            </p>
          </article>
        </section>

        <section className="mt-24 rounded-[10px] border border-[#ddd2c4] bg-[#f7f2e9] p-6 sm:p-8">
          <h3 className="text-sm tracking-[0.1em] text-[#70665d]">sävy & käyttöliittymän säännöt</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toneRules.map((rule) => (
              <article key={rule.title} className="rounded-[10px] border border-[#e3d8ca] bg-[#fbf8f3] p-4">
                <p className="text-sm text-[#312c27]">{rule.title}</p>
                <p className="mt-1 text-sm text-[#655c54]">→ {rule.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[10px] border border-[#d9cebf] bg-[#f8f5ef] p-6 sm:p-8">
          <h3 className="font-serif text-3xl leading-tight text-[#221e1a]">asiakkaasi palaa, kun joku muistaa kysyä.</h3>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4d453e]">
            afters lähettää oikean viestin oikeaan aikaan automaattisesti. sinä saat keskittyä hoitoon, kun
            järjestelmä huolehtii hoitosuhteen jatkuvuudesta taustalla.
          </p>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {infoBlocks.map((block) => (
              <article key={block.title} className="rounded-[10px] border border-[#e2d7c9] bg-[#f4eee4] p-4">
                <h4 className="text-sm text-[#2d2824]">{block.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#5b524a]">{block.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h3 className="text-2xl font-serif text-[#211d19]">esimerkkiviestit</h3>
          <div className="mt-7 space-y-4">
            {smsExamples.map((sms) => (
              <article
                key={sms.label}
                className="rounded-[10px] border border-[#ddd2c4] bg-[#fbf8f3] p-5 transition-colors duration-200 hover:bg-[#f6f1e8]"
              >
                <p className="text-xs tracking-[0.08em] text-[#7a7066]">{sms.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#3f3934]">{sms.message}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[10px] border border-[#d8cec0] bg-[#f1e9dc] p-7 sm:p-10">
          <h3 className="font-serif text-3xl text-[#211d19]">aloita rauhassa.</h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#504941]">
            afters ei muuta vastaanottoasi. se vain varmistaa, että oikea viesti lähtee oikeaan aikaan.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-md border border-[#a89a8b] bg-[#e8dccb] px-5 py-2.5 text-sm text-[#2e2925] transition-colors duration-200 hover:bg-[#e2d4c0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a89a8b]">
              varaa esittely
            </button>
            <button className="rounded-md border border-[#c7baaa] bg-[#f5eee3] px-5 py-2.5 text-sm text-[#403933] transition-colors duration-200 hover:bg-[#efe5d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7aa9a]">
              kysy lisää
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
