import React, {useState, useEffect } from "react";
import Primaryhdr from "./components/header/Primaryhdr";
import HomeMain from "./components/home/HomeMain";
import AboutMain from "./components/about/AboutMain";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Preloader from "./components/overlay/Preloader";

function App() {

  const [laoding, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
    {laoding ? <Preloader/> :

      <BrowserRouter>
      <div className="forAppDispalying">
        <Primaryhdr />
        <Routes>
          <Route path="/flexi-blocks/" element={<HomeMain />} />
          <Route path="/flexi-blocks/about" element={<AboutMain />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    }
    </>
  );
}

export default App;
