import React, { useEffect, useState } from "react";
import "./header.scss";
import { PrimaryLinks } from "../../siteContent/header/Header";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Overlayout from "../overlay/Overlayout";

const Primaryhdr = () => {
  // primary header y-axis scroll when window scrollY 20
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const primaryHeader2 = document.getElementById("primaryHeader");
    const threshold = 20;

    if (scrollPosition > threshold) {
      primaryHeader2.style.padding = " 0";
      primaryHeader2.style.transition = "all .3s ease-in-out";
      primaryHeader2.style.boxShadow = "0 0 20px #ccc";
    } else {
      primaryHeader2.style.padding = "12px 0 0 0";
      primaryHeader2.style.boxShadow = "none";
    }
  };

  // navigation-linka, add active className
  const [isNavActive, IsNavActive] = useState("home");
  const NavItems = (links) => {
    IsNavActive(links);
  };

  // resize-window-screen

  const [isWindow, setIswindow] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIswindow(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = isWindow <= 767;

  const [ismenuBar, setIsmenuBar] = useState(false);
  const handleMenuIcon = () => {
    setIsmenuBar(!ismenuBar);
  };

  useEffect( () => {
      document.body.classList.toggle('overflowActive',ismenuBar )
    },[ismenuBar])

  return (
    <div className="primaryHeader" id="primaryHeader">
      <div className="main">
        <div className="inner">
          <div className="headerLeft">
            <Link to="/flexi-blocks/" className="logoLink">
              <img src={logo} alt="flexi-blocks" />
            </Link>
          </div>
          {!isMobile ? (
            <div className="headerRight">
              <ul>
                {PrimaryLinks.map((primary) => (
                  <li key={primary.id}>
                    <Link
                      className={
                        isNavActive === `${primary.id}`
                          ? "navLinks active"
                          : "navLinks"
                      }
                      onClick={() => NavItems(`${primary.id}`)}
                      to={primary.pageURL}
                    >
                      {primary.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}

          {isMobile ? (
            <div className="navBarIcon">
              <span onClick={handleMenuIcon}>
                <i class="bi bi-text-indent-right"></i>
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {isMobile ? (
        <div className={ismenuBar ? 'mobileNav active' : 'mobileNav'} onClick={handleMenuIcon}>
          <ul>
            {PrimaryLinks.map((primary) => (
              <li key={primary.id}>
                <Link
                  className={
                    isNavActive === `${primary.id}`
                      ? "navLinks active"
                      : "navLinks"
                  }
                  onClick={() => NavItems(`${primary.id}`)}
                  to={primary.pageURL}
                >
                  {primary.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      <div>
        {isMobile ? (
          <div
          className={ismenuBar ? 'verlayoutInner active' : 'verlayoutInner'} onClick={handleMenuIcon}>
            <Overlayout />
          </div>
          ) : ('')
        }
      </div>
    </div>
    
  );
};

export default Primaryhdr;
