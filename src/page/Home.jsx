import '../assets/style.css'

function Home() {
  return (
    <>
        <div className="mark"></div>

        <header>
            <img src={require('../assets/images/justrun.png').default} />
           
            <ul>
                <li>Tentang Kami</li>
                <li>Sepatu</li>
                <li>Artikel</li>
                <li>Beranda</li>
            </ul>
        </header>

        <nav></nav>

        <main>
            <img src={require('../assets/images/home-banner.jpg').default} /> <br />

            <div className="welcome">WELCOME -<br />SELAMAT DATANG</div>

            <p>JUSTRUN! adalah sebuah website yang berbasis di Indonesia. Website ini bisa<br />
            dibilang sebagai forum diskusi yang membahas perkembangan dunia olahraga berlari,<br />
            khususnya dalam hal sepatu, baik itu produk dalam negeri ataupun luar negeri.</p>

            <button>Selengkapnya</button>
        </main>

        <figure>
            <h3>Rekomendasi Sepatu</h3>

            <img src={require('../assets/images/geist.jpg').default} /> <br />

            <div className="tengah">
                <div className="geist">910 GEIST EKIDEN</div>

                <p>Salah satu sepatu running lokal terbaik saat ini. Dengan teknologi yang mendukungmu<br />
                mendapatkan pengalaman berlari menjadi lebih mantap.</p>

                <button>Detail Sepatu</button>
            </div>
        </figure>

        <article></article>

        <footer></footer>
 
    </>
  );
}

export default Home;