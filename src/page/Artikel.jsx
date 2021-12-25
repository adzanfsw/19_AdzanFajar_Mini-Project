import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../assets/style-artikel.module.css";
import News from "../component/News";

function Artikel() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <div className={styles.up}></div>

      <div className={styles.header}>
        <Link to="/">
          <img
            alt="JUSTRUN!"
            className={styles.just}
            src={require("../assets/images/justrun.png").default}
          />
        </Link>

        <div className={styles.navbar}>
          {(toggleMenu || screenWidth > 500) && (
            <ul>
              <Link to="/">
                <li>Beranda</li>
              </Link>
              <Link to="/artikel">
                <li>Artikel</li>
              </Link>
              <Link to="/sepatu">
                <li>Sepatu</li>
              </Link>
              <Link to="/tentang-kami">
                <li>Tentang Kami</li>
              </Link>
            </ul>
          )}
        </div>

        <img
          onClick={toggleNav}
          className={styles.burger}
          alt="JUSTRUN!"
          src={require("../assets/images/burger.png").default}
        />
      </div>

      <nav>
        <div className={styles.rekomen}>Artikel olahraga hari ini ..</div>
      </nav>

      <News />

      <footer>
        <figcaption>© 2021 JUSTRUN! All Rights Reserved.</figcaption>

        <div className={styles.sosmed}>
          <ul>
            <Link to={{ pathname: "https://youtube.com" }} target="_blank">
              <li>
                <img
                  alt="Youtube"
                  src={require("../assets/images/tube-icon.png").default}
                />
              </li>{" "}
            </Link>
            <Link to={{ pathname: "https://twitter.com" }} target="_blank">
              <li>
                <img
                  alt="Twitter"
                  src={require("../assets/images/twit-icon.png").default}
                />
              </li>{" "}
            </Link>
            <Link to={{ pathname: "https://facebook.com" }} target="_blank">
              <li>
                <img
                  alt="Facebook"
                  src={require("../assets/images/fb-icon.png").default}
                />
              </li>{" "}
            </Link>
            <Link to={{ pathname: "https://instagram.com" }} target="_blank">
              <li>
                <img
                  alt="Instagram"
                  src={require("../assets/images/insta-icon.png").default}
                />
              </li>{" "}
            </Link>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Artikel;
