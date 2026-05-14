import Link from "next/link";

export default async function Datenschutz({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <main className="container" style={{ padding: '8rem 2rem', maxWidth: '800px', position: 'relative', zIndex: 10 }}>
      <Link href={`/${lang}`} className="back-link" style={{ marginBottom: '2rem', display: 'inline-block', color: 'var(--grey)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em', textDecoration: 'none' }}>
        ← Volver / Back / Zurück
      </Link>
      <h1 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)', borderBottom: '1px solid var(--purple)', paddingBottom: '1rem', fontSize: '2.5rem' }}>Datenschutzerklärung</h1>
      
      <div style={{ marginTop: '2rem', lineHeight: '1.8' }}>
        <h2 style={{ color: 'var(--purple-light)', fontSize: '1.2rem', marginTop: '2rem', textTransform: 'uppercase' }}>1. Datenschutz auf einen Blick</h2>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>

        <h2 style={{ color: 'var(--purple-light)', fontSize: '1.2rem', marginTop: '2rem', textTransform: 'uppercase' }}>2. Hosting</h2>
        <p>Unsere Website wird gehostet. Bei jedem Aufruf werden automatisch Informationen erfasst, die Ihr Browser übermittelt (IP-Adresse, Datum/Uhrzeit).</p>

        <h2 style={{ color: 'var(--purple-light)', fontSize: '1.2rem', marginTop: '2rem', textTransform: 'uppercase' }}>3. Kontakt</h2>
        <p>Wenn Sie uns per E-Mail oder WhatsApp kontaktieren, werden Ihre Angaben zum Zwecke der Bearbeitung der Anfrage gespeichert (Art. 6 Abs. 1 lit. b DSGVO).</p>

        <h2 style={{ color: 'var(--purple-light)', fontSize: '1.2rem', marginTop: '2rem', textTransform: 'uppercase' }}>4. Social Media</h2>
        <p>Auf dieser Website sind Links zu Instagram, Facebook und YouTube eingebunden. Dort gelten die Datenschutzbestimmungen der jeweiligen Anbieter.</p>
      </div>
    </main>
  );
}