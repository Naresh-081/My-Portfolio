import Header from "./components/Header";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWraper";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />

      <SectionWrapper id="education" bgClass="bg-slate-50">
        <Education />
      </SectionWrapper>

      <SectionWrapper id="skills" reducedPadding bgClass="bg-white">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="experience" reducedPadding bgClass="bg-slate-50">
        <Experience />
      </SectionWrapper>

      <SectionWrapper id="projects" bgClass="bg-white">
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="contact" reducedPadding bgClass="bg-slate-50">
        <Contact />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
