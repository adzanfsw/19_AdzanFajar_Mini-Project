import styles from '../assets/style-sepatu.module.css'
import Produk from './fetchAPI/Produk';

function Sepatu() {
  return (
    <>
        <div className={styles.up}></div>

        <header>
            <img alt="JUSTRUN!" src={require('../assets/images/justrun.png').default} />
           
            <ul>
                <li>Tentang Kami</li>
                <li>Sepatu</li>
                <li>Artikel</li>
                <li>Beranda</li>
            </ul>
        </header>

        <div className={styles.konten}>
            <Produk />
        </div>
    </>
  );
}

export default Sepatu;