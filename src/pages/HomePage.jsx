import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Articles from "../components/Articles";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Articles />
      <Footer />
    </>
  );
}
