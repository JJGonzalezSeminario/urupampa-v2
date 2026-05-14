import Link from "next/link";

export default async function Impressum({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <main className="container" style={{ padding: '8rem 2rem', maxWidth: '800px', position: 'relative', zIndex: 10 }}>
      <Link href={`/${lang}`} className="back-link" style={{ marginBottom: '2rem', display: 'inline-block', color: 'var(--grey)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em', textDecoration: 'none' }}>
        ← Volver / Back / Zurück
      </Link>
      <h1 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)', borderBottom: '1px solid var(--purple)', paddingBottom: '1rem', fontSize: '2.5rem' }}>Impressum</h1>
      
      <div style={{ marginTop: '2rem', lineHeight: '1.8' }}>
        <h2 style={{ color: 'var(--purple-light)', fontSize: '1.2rem', marginTop: '2rem', textTransform: 'uppercase' }}>Angaben gemäß § 5 TMG</h2>
        <p>Marco Antonio Cerezo Caques<br />Rothenbücherweg 23A<br />14089 Berlin, Deutschland</p>

        <h2 style={{ color: 'var(--purple-light)', fontSize: '1.2rem', marginTop: '2rem', textTransform: 'uppercase' }}>Kontakt</h2>
        <p>Telefon: +49 160 7649232<br />E-Mail: urupampa_berlin@gmail.com</p>

        <h2 style={{ color: 'var(--purple-light)', fontSize: '1.2rem', marginTop: '2rem', textTransform: 'uppercase' }}>Redaktionell verantwortlich</h2>
        <p>Marco Antonio Cerezo Caques</p>

        <h2 style={{ color: 'var(--purple-light)', fontSize: '1.2rem', marginTop: '2rem', textTransform: 'uppercase' }}>EU-Streitschlichtung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" style={{ color: 'var(--gold)' }}>https://ec.europa.eu/consumers/odr/</a>.</p>
      </div>
    </main>
  );
}