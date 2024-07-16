import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Skills from "./components/Pages/Skills";
import Contact from "./components/Pages/Contact";
import Blog from "./components/Blog/Blog";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Header />
      <Body />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
