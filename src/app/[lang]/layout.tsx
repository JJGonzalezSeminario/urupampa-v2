import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Bebas_Neue } from "next/font/google";
import "../../app/globals.css";
import MusicPlayer from "../../components/MusicPlayer";
import Footer from "../../components/Footer";
import { getDictionary } from "../../lib/dictionary";

// Optimizamos las fuentes: Next.js las descarga y las sirve desde tu propio servidor
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400"], style: ["normal", "italic"], variable: "--font-cormorant" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const title = lang === 'de' ? "Uru Pampa · Lateinamerikanische Band in Berlin" : 
                lang === 'en' ? "Uru Pampa · Latin American Band in Berlin" : 
                "Uru Pampa · Banda de Música Latinoamericana en Berlín";
  const description = "Música latinoamericana y andina en Berlín. Conciertos, festivales y eventos privados.";

  return {
    metadataBase: new URL("https://www.urupampa-berlin.de"),
    title,
    description,
    openGraph: { title, description, type: "website", images: [{ url: "/Banda_1.jpg" }] }
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${playfair.variable} ${cormorant.variable} ${bebas.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="andean-bg"></div>
        <div className="andean-pattern"></div>

        <nav>
          <a href={`/${lang}#hero`} aria-label="Volver al inicio" style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <div className="nav-logo">Uru<span>Pampa</span> · Berlin</div>
          </a>
          <ul className="nav-links">
            <li><a href={`/${lang}#about`}>{dict.nav.about}</a></li>
            <li><a href={`/${lang}#gallery`}>{dict.nav.gallery}</a></li>
            <li><a href={`/${lang}#shows`}>{dict.nav.shows}</a></li>
            <li><a href={`/${lang}#media`}>{dict.nav.media}</a></li>
            <li><a href={`/${lang}#booking`}>{dict.nav.contact}</a></li>
          </ul>
          <div className="lang-switch">
            <a href="/es" className={lang === 'es' ? 'active' : ''} aria-label="Español">ES</a>
            <a href="/de" className={lang === 'de' ? 'active' : ''} aria-label="Deutsch">DE</a>
            <a href="/en" className={lang === 'en' ? 'active' : ''} aria-label="English">EN</a>
          </div>
        </nav>

        {children}
        <Footer dict={dict.footer} lang={lang} />
        <MusicPlayer />
      </body>
    </html>
  );
}