import { content } from "@/lib/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Training from "@/components/Training";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  const { brand, contact, nav, hero, about, services, training, gallery, faq } =
    content;

  return (
    <>
      <JsonLd />
      <Header brand={brand} contact={contact} nav={nav} />
      <main>
        <Hero hero={hero} contact={contact} />
        <About about={about} />
        <Services services={services} />
        <Training training={training} contact={contact} />
        <Gallery items={gallery} />
        <Faq items={faq} />
        <Contact contact={contact} />
      </main>
      <Footer brand={brand} contact={contact} />
    </>
  );
}
