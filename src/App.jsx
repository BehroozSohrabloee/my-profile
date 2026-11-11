import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

import { LocalizationProvider } from "./localization/LocalizationContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./styles/variables.css";
import "./styles/global.css";

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <Header />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;