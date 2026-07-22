import { NetworkBackground } from "./components/Motion";
import { Nav, Hero } from "./components/Top";
import {
  Experience,
  Projects,
  Skills,
  Credentials,
  Contact,
  Footer,
} from "./components/Sections";

export default function App() {
  return (
    <>
      <NetworkBackground />
      <div className="glow glow-a" aria-hidden="true" />
      <div className="glow glow-b" aria-hidden="true" />

      <div id="page">
        <Nav />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
