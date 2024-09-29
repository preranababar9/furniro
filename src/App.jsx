import { useEffect } from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Hero from "./components/home/Hero";
import Inspire from "./components/home/Inspire";
import Range from "./components/home/Range";
import Setup from "./components/home/Setup";
import { useNavigate } from "react-router-dom";

function App() {
const router = useNavigate();

useEffect(() => {
const userid = localStorage.getItem("email");
if (!userid){
router("/login");
}
}, [])

  return (
    <>
      <Header />
      <Hero />
      
     <Range />

      <Inspire />
      <Setup />

      <Footer />
    </>
  );
}

export default App;
