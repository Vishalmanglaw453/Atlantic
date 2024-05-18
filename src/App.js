import "./App.css";
import Navbaar from "./common/Navbaar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Componets/Hero";
import Blogs from "./Componets/Blogs";
import Pioneers from "./Componets/Pioneers";
import Approvals from "./Componets/Approvals";
import About from "./Componets/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2500 });
  }, []);
  return (
    <div className="App">
      <Hero />
      <Pioneers />
      <Approvals/>
      <About/>
      <Blogs />
    </div>
  );
}

export default App;
