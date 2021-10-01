import style from '../assets/style-detail.module.css'

function Detail() {
  return (
    <>
        <div className={style.up}></div>

        <header>
            <img alt="JUSTRUN!" src={require('../assets/images/justrun.png').default} />
           
            <ul>
                <li>Tentang Kami</li>
                <li>Sepatu</li>
                <li>Artikel</li>
                <li>Beranda</li>
            </ul>
        </header>

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
    </>
  );
}

export default Detail;