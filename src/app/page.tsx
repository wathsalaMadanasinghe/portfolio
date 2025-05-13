import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
