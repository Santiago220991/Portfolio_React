import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import Introduction from "./components/Introduction.tsx";
import Projects from "./components/Projects.tsx";
import { ProjectsProvider } from "./contexts/projects_context.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import { SkillsProvider } from "./contexts/skills_context.tsx";
import Footer from "./components/Footer.tsx";
import Contact from "./components/Contact.tsx";
import MainSection from "./components/MainSection.tsx";
import MainContainer from "./components/MainContainer.tsx";
import FooterSection from "./components/FooterSection.tsx";
import Header from "./components/header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainContainer>
      <MainSection>
        <Header />
        <Introduction />
      </MainSection>
      <ProjectsProvider>
        <Projects />
      </ProjectsProvider>
      <About />
      <SkillsProvider>
        <Skills />
      </SkillsProvider>
      <FooterSection>
        <Contact />
        <Footer />
      </FooterSection>
    </MainContainer>
  </StrictMode>
);
