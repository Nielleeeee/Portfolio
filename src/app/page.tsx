import Introduction from "./(landingPage)/introduction";
import TechStack from "./(landingPage)/techstack";
import About from "./(landingPage)/about";
import Projects from "./(landingPage)/projects";
import Experience from "./(landingPage)/experience";
import Footer from "../components/layout/footer";
import Contact from "./(landingPage)/contact";
import ScrollTop from "@/components/scroll/scrollTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Certificate from "./(landingPage)/certificate";

export default function Home() {
  return (
    <main>
      <ToastContainer />
      <Introduction />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Certificate />
      <Contact />
      <Footer />
      <ScrollTop />
    </main>
  );
}
