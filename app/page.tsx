// app/page.tsx
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWraper";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero - Full viewport height without wrapper */}
      <Hero />
      
      {/* About - Standard padding */}
      <SectionWrapper id="education">
        <Education />
      </SectionWrapper>
      
      {/* Skills - Reduced padding */}
      <SectionWrapper id="skills" reducedPadding>
        <Skills />
      </SectionWrapper>
      
      {/* Projects - Standard padding */}
      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>
      
      {/* Contact - Reduced padding */}
      <SectionWrapper id="contact" reducedPadding>
        <Contact />
      </SectionWrapper>
      
      <Footer />
    </main>
  );
}