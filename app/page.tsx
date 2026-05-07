import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWraper";

export default function Home() {
  return (
    <main className="bg-[#020617]">
      <ScrollProgress />
      <Header />
      <Hero />

      <SectionWrapper id="experience" reducedPadding alt>
        <Experience />
      </SectionWrapper>

      <SectionWrapper id="skills" reducedPadding>
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="projects" alt>
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="education" reducedPadding>
        <Education />
      </SectionWrapper>

      <SectionWrapper id="contact" reducedPadding alt>
        <Contact />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
