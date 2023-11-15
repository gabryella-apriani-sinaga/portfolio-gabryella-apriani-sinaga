import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Education from "@/components/education/Education";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/Experience/Experience";
import Project from "@/components/project/Project";
import Contact from "@/components/contacts/Contact";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
