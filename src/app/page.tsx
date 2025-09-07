import FAQ from "./components/faq";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import MoreTools from "./components/more-tools";
import Price from "./components/price";
import Techs from "./components/techs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        {/* <MoreTools /> */}
        {/* <Techs /> */}
        {/* <Price /> */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
