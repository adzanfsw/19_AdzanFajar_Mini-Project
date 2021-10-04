import React, {useState, useEffect} from 'react'
import styles from '../assets/style.module.css'

function Home() {
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
                    <ul id="menuList">
                        <li>Beranda</li>
                        <li>Artikel</li>
                        <li>Sepatu</li>
                        <li>Tentang Kami</li>
                    </ul>
                )}
            </div>

            <img onClick={toggleNav} className={styles.burger} alt="JUSTRUN!" src={require('../assets/images/burger.png').default} />
        </div>

        <div className={styles.tulisan}>
              <div className={styles.caption}>Artikel olahraga lari hari ini ..</div>
        </div>

        <div className={styles.main}>
            <img className={styles.banner} alt="Shoes Banner" src={require('../assets/images/home-banner.jpg').default} /> <br />

            <div className={styles.welcome}>WELCOME -<br />SELAMAT DATANG</div>

            <div className={styles.p}>JUSTRUN! adalah sebuah website yang berbasis di Indonesia. Website ini bisa dibilang sebagai forum diskusi yang membahas perkembangan dunia olahraga berlari, khususnya dalam hal sepatu, baik itu produk dalam negeri ataupun luar negeri.</div>

            <button>Selengkapnya</button>
        </div>

        <div className={styles.figure}>
            <h3>Rekomendasi Sepatu</h3>

            <img className={styles.geistekiden} alt="Geist Ekiden" src={require('../assets/images/geist.jpg').default} /> <br />

            <div className={styles.tengah}>
                <div className={styles.geist}>910 GEIST EKIDEN</div>

                <div className={styles.p}>Salah satu sepatu running lokal terbaik saat ini. Dengan teknologi yang mendukungmu mendapatkan pengalaman berlari menjadi lebih mantap.</div>

                <button>Detail Sepatu</button>
            </div>
        </div>

        <article className={styles.article}>
            <h3>Artikel</h3>

            <img className={styles.lari} alt="Lari" src={require('../assets/images/olahraga.jpg').default} /> <br />

            <div className={styles.tengah}>
                <div className={styles.hey}>HEY -<br /> JANGAN LUPA OLAHRAGA</div>

                <div className={styles.p}>Menurut wikipedia, arti olahraga adalah aktivitas gerak manusia menurut teknik tertentu, dalam pelaksanaannya terdapat unsur bermain, ada rasa senang, dilakukan pada waktu luang, dan kepuasan tersendiri. Biasanya dilakukan untuk melatih tubuh seseorang, tidak hanya secara jasmani tetapi juga rohani.</div>

                <button>Artikel Lainnya</button>
            </div>
        </article>

        <footer>
            <div className={styles.figcaption}>© 2021 JUSTRUN! All Rights Reserved.</div>

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

export default Home;