import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="pt-24">
      <Hero />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
