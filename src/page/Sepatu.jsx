import React, {useState, useEffect} from 'react'

import styles from '../assets/style-sepatu.module.css'
import Produk from '../component/Produk';

function Sepatu() {

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
        <div className={styles.up}></div>

        <div className={styles.header}>
            <img alt="JUSTRUN!" className={styles.just} src={require('../assets/images/justrun.png').default} />

            <div className={styles.navbar}>
                {(toggleMenu || screenWidth > 500) && (
                    <ul>
                        <li>Beranda</li>
                        <li>Artikel</li>
                        <li>Sepatu</li>
                        <li>Tentang Kami</li>
                    </ul>
                )}
            </div>

            <img onClick={toggleNav} className={styles.burger} alt="JUSTRUN!" src={require('../assets/images/burger.png').default} />
        </div>

        <nav>
            <div className={styles.rekomen}>Rekomendasi Sepatu Lari (11)</div>
        </nav>

        <div className={styles.konten}>
            <Produk />
        </div>

        <footer>
            <figcaption>© 2021 JUSTRUN! All Rights Reserved.</figcaption>

            <div className={styles.sosmed}>
                <ul>
                    <li><img alt="Youtube" src={require('../assets/images/tube-icon.png').default} /></li>
                    <li><img alt="Twitter" src={require('../assets/images/twit-icon.png').default} /></li>
                    <li><img alt="Facebook" src={require('../assets/images/fb-icon.png').default} /></li>
                    <li><img alt="Instagram" src={require('../assets/images/insta-icon.png').default} /></li>
                </ul>
            </div>
        </footer>
    </>
  );
}

export default Sepatu;