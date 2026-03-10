import Header from "../components/Header";
import Experience from "../components/Experience";
import Work from "../components/Work";
import BentoGrid from "../components/BentoGrid";
import Promotion from "../components/Promotion";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Experience />
      <BentoGrid />
      <Work />
      <Promotion />
      <Footer />
    </>
  );
}
