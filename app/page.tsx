import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <main className="pt-24">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
