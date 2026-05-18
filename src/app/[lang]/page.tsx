import { getDictionary } from "../../lib/dictionary";
import Hero from "../../components/Hero";
import About from "../../components/About";
import SocialProof from "../../components/SocialProof";
import Gallery from "../../components/Gallery";
import Shows from "../../components/Shows";
import Media from "../../components/Media";
import Booking from "../../components/Booking";
import Animations from "../../components/Animations";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  // Cargamos el diccionario directamente en el servidor (Carga instantánea)
  const safeLang = (lang === 'de' || lang === 'en') ? lang : 'es';
  const dict = await getDictionary(safeLang);

  return (
    <main>
      {/* Nuestro nuevo componente invisible que maneja el scroll */}
      <Animations />
      
      {/* Las secciones de tu web */}
      <Hero dict={dict.hero} lang={lang} />
      <About dict={dict.about} />
      <Media dict={dict.media} />
      <SocialProof dict={dict.social_proof} />
      <Shows dict={dict.shows} />
      <Gallery dict={dict.gallery} />
      <Booking dict={dict.booking} />
    </main>
  );
}