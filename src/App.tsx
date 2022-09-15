import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
};

export default App;
