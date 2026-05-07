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
    <main className="relative bg-white dark:bg-gray-900">
      <Header />

      <Hero />

      <SectionWrapper id="education">
        <Education />
      </SectionWrapper>

      <SectionWrapper id="skills" reducedPadding bgClass="bg-white">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="experience" reducedPadding>
        <Experience />
      </SectionWrapper>

      <SectionWrapper id="projects" bgClass="bg-white">
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="contact" reducedPadding>
        <Contact />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
