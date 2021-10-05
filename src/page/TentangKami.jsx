import styles from '../assets/style-tentang.module.css'

function TentangKami() {
  return (
    <>
        <div className={styles.navbar}>
            <img className={styles.justrun} alt="JUSTRUN!" src={require('../assets/images/just.png').default} />

            <img className={styles.burger} alt="JUSTRUN!" src={require('../assets/images/burger.png').default} />
        </div>

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