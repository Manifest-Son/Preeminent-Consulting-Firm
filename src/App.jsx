import "./assets/global.css";
import Header from "./components/Header/Header"
import Hero from "./pages/Home/Hero"
import About from "./pages/Home/About";
import Offerings from "./pages/Home/Offerings"
import Why from "./pages/Home/Why";
import Testimonial from "./pages/Home/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Offerings />
      <Why />
      <Testimonial />
    </>
  );
}

export default App;
