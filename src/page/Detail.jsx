import React, {useState, useEffect} from 'react'

import style from '../assets/style-detail.module.css'
import Ulasan from '../component/Ulasan';

function Detail() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
        setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }
}, [])

    return (
    <>
        <div className={style.up}></div>

        <div className={style.header}>
            <img alt="JUSTRUN!" className={style.just} src={require('../assets/images/justrun.png').default} />

            <div className={style.navbar}>
                {(toggleMenu || screenWidth > 500) && (
                    <ul id="menuList">
                        <li>Beranda</li>
                        <li>Artikel</li>
                        <li>Sepatu</li>
                        <li>Tentang Kami</li>
                    </ul>
                )}
            </div>

            <img onClick={toggleNav} className={style.burger} alt="JUSTRUN!" src={require('../assets/images/burger.png').default} />
        </div>

        <content>
            <div className={style.imgproduk}>
                <img alt="geist1" className={style.geist1} src={require('../assets/images/geist1.jpg').default} />
                <img alt="geist1" className={style.geist2} src={require('../assets/images/geist2.jpg').default} />
                <img alt="geist1" className={style.geist3} src={require('../assets/images/geist3.jpg').default} />
                <img alt="geist1" className={style.geist4} src={require('../assets/images/geist4.jpg').default} />
            </div>

            <div className={style.deskripsi}>
                <div className={style.tipe}>Sepatu Lari Pria</div> <br />
                <div className={style.produk}>910 - Geist Ekiden Biru Putih</div> <br />

                <button>Link Pembelian</button>

                <div className={style.paragraf}>
                Sebuah produk Flagship dari 910 didalam kategori running stability / lari full maraton 42 km. menggunakan teknologi upper singel mesh transparant terbaru dari 910 yang memiliki fitting sempurna, nyaman, ringan, dan breathable.
                <br /><br />GEIST EKIDEN sangat cocok digunangan untuk pelari yang ingin merasakan pengalaman baru dalam lari jarak jauh dan untuk para pelari yang ingin mengejar cacatan waktu terbaiknya. Dengan desain yang sangat sporty dan pilihan warna yang elegant, sepatu ini juga cocok digunakan untuk pelengkap busana bagi outfit sport lifestyle.
                </div>
            </div>
        </content>

        <Ulasan />
    </>
  );
}

export default Detail;