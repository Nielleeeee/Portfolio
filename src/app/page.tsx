import Introduction from "./introduction";
import TechStack from "./techstack";
import About from "./about";
import Projects from "./projects";

export default function Home() {
  return (
    <main>
      <Introduction />
      <About />
      <TechStack />
      <Projects />
    </main>
  );
}
