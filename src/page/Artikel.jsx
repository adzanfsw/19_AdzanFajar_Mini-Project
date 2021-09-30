import '../assets/style-artikel.module.css'
import styles from '../assets/style-artikel.module.css'
import News from './fetchAPI/News';

function Artikel() {
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

          <div className={styles.nav}>
              <div className={styles.caption}>Artikel olahraga lari hari ini ..</div>
          </div>

          <News />

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

export default Artikel;