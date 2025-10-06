import FAQ from "./components/faq";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
