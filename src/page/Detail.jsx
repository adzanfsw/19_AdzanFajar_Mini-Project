import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import style from "../assets/style-detail.module.css";
import Ulasan from "../component/Ulasan";

function Detail() {
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
      <div className={style.up}></div>

      <div className={style.header}>
        <Link to="/">
          <img
            alt="JUSTRUN!"
            className={style.just}
            src={require("../assets/images/justrun.png").default}
          />
        </Link>

        <div className={style.navbar}>
          {(toggleMenu || screenWidth > 500) && (
            <ul id="menuList">
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
          className={style.burger}
          alt="JUSTRUN!"
          src={require("../assets/images/burger.png").default}
        />
      </div>

      <content>
        <div className={style.imgproduk}>
          <img
            alt="geist1"
            className={style.geist1}
            src={require("../assets/images/geist1.jpg").default}
          />
          <img
            alt="geist1"
            className={style.geist2}
            src={require("../assets/images/geist2.jpg").default}
          />
          <img
            alt="geist1"
            className={style.geist3}
            src={require("../assets/images/geist3.jpg").default}
          />
          <img
            alt="geist1"
            className={style.geist4}
            src={require("../assets/images/geist4.jpg").default}
          />
        </div>

        <div className={style.deskripsi}>
          <div className={style.tipe}>Sepatu Lari Pria</div> <br />
          <div className={style.produk}>910 - Geist Ekiden Biru Putih</div>{" "}
          <br />
          <Link
            to={{ pathname: "https://910.id/reseller/products/geist-ekiden/" }}
            target="_blank"
          >
            <button>Link Pembelian</button>
          </Link>
          <div className={style.paragraf}>
            Sebuah produk Flagship dari 910 didalam kategori running stability /
            lari full maraton 42 km. menggunakan teknologi upper singel mesh
            transparant terbaru dari 910 yang memiliki fitting sempurna, nyaman,
            ringan, dan breathable.
            <br />
            <br />
            GEIST EKIDEN sangat cocok digunangan untuk pelari yang ingin
            merasakan pengalaman baru dalam lari jarak jauh dan untuk para
            pelari yang ingin mengejar cacatan waktu terbaiknya. Dengan desain
            yang sangat sporty dan pilihan warna yang elegant, sepatu ini juga
            cocok digunakan untuk pelengkap busana bagi outfit sport lifestyle.
          </div>
        </div>
      </content>

      <Ulasan />

      <footer>
        <figcaption>© 2021 JUSTRUN! All Rights Reserved.</figcaption>

        <div className={style.sosmed}>
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

export default Detail;
