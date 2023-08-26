import Introduction from "./introduction";
import TechStack from "./techstack";
import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Footer from "./footer";

export default function Home() {
  return (
    <main>
      <Introduction />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
