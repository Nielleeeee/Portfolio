import Introduction from "./introduction";
import TechStack from "./techstack";
import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Footer from "../components/footer";
import Contact from "./contact";
import ScrollTop from "@/components/scrollTop";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main>
      <ToastContainer />
      <Introduction />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollTop />
    </main>
  );
}
