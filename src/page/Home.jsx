import '../assets/style.css'

function Home() {
  return (
    <>
        <div className="up"></div>

        <header>
            <img alt="JUSTRUN!" src={require('../assets/images/justrun.png').default} />
           
            <ul>
                <li>Tentang Kami</li>
                <li>Sepatu</li>
                <li>Artikel</li>
                <li>Beranda</li>
            </ul>
        </header>

        <nav></nav>

        <main>
            <img alt="Shoes Banner" src={require('../assets/images/home-banner.jpg').default} /> <br />

            <div className="welcome">WELCOME -<br />SELAMAT DATANG</div>

            <p>JUSTRUN! adalah sebuah website yang berbasis di Indonesia. Website ini bisa<br />
            dibilang sebagai forum diskusi yang membahas perkembangan dunia olahraga berlari,<br />
            khususnya dalam hal sepatu, baik itu produk dalam negeri ataupun luar negeri.</p>

            <button>Selengkapnya</button>
        </main>

        <figure>
            <h3>Rekomendasi Sepatu</h3>

            <img alt="Geist Ekiden" src={require('../assets/images/geist.jpg').default} /> <br />

            <div className="tengah">
                <div className="geist">910 GEIST EKIDEN</div>

                <p>Salah satu sepatu running lokal terbaik saat ini. Dengan teknologi yang mendukungmu<br />
                mendapatkan pengalaman berlari menjadi lebih mantap.</p>

                <button>Detail Sepatu</button>
            </div>
        </figure>

        <article>
            <h3>Artikel</h3>

            <img alt="Lari" src={require('../assets/images/olahraga.jpg').default} /> <br />

            <div className="tengah">
                <div className="hey">HEY -<br /> JANGAN LUPA OLAHRAGA</div>

                <p>Menurut wikipedia, arti olahraga adalah aktivitas gerak manusia menurut teknik<br />
                tertentu, dalam pelaksanaannya terdapat unsur bermain, ada rasa senang,<br />
                dilakukan pada waktu luang, dan kepuasan tersendiri. Biasanya dilakukan untuk<br />
                melatih tubuh seseorang, tidak hanya secara jasmani tetapi juga rohani.</p>

                <button>Artikel Lainnya</button>
            </div>
        </article>

        <footer>
            <figcaption>© 2021 JUSTRUN! All Rights Reserved.</figcaption>

            <div className="sosmed">
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