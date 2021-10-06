import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from '../assets/style-tentang.module.css'

function TentangKami() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
    <>
        <div className={styles.navbar}>
            <Link to="/"><img alt="JUSTRUN!" className={styles.justrun} src={require('../assets/images/just.png').default} /></Link>

            <img className={styles.burger} alt="JUSTRUN!" onClick={toggleModal} src={require('../assets/images/burger.png').default} />
        </div>

        {modal && (
            <div className={styles.modal}>
                <div onClick={toggleModal} className={styles.overlay}></div>
                <div className={styles.content}>
                    <ul>
                        <Link to="/"><li>BERANDA</li></Link>
                        <Link to="/artikel"><li>ARTIKEL</li></Link>
                        <Link to="/sepatu"><li>SEPATU</li></Link>
                        <Link to="/tentang-kami"><li>TENTANG KAMI</li></Link>

                        <div className={styles.small}>© 2021 JUSTRUN! All Rights Reserved.</div> <br />
                        <div onClick={toggleModal} className={styles.close}>X</div>
                    </ul>                
                </div>
            </div>
        )}

        <div className={styles.article}>
            <h1>TENTANG JUSTRUN<small>!</small></h1>

            <div className={styles.p}>Kami adalah sebuah platform informasi terpercaya dalam hal sepatu lari. Platform ini dibuat berdasar alasan karena olahraga yang paling murah dan mudah dilakukan adalah berlari. Oleh karena itu, kami hadir untuk membantu masyarakat maupun komunitas dalam menentukan senjata terbaik untuk menapaki medan dalam berolahraga lari ataupun yang lain.</div> <br />
            <div className={styles.p}>Di website ini, pengguna bisa saling satu sama lain untuk memberikan pendapat dan pengalam terhadap produk tertentu, yang nantinya diharapkan bisa untuk membantu teman-teman yang lain dalam menilai sebelum memutuskan untuk membeli sebuah produk. Terima kasih, dan semangat!!</div> <br /> <br /> <br />

            <strong>Kontak kami <small>&gt;</small></strong>
        </div>

        <div className={styles.footer}></div>
    </>
  );
}

export default TentangKami;