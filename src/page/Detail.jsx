import '../assets/style-detail.module.css'

function Detail() {
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
    </>
  );
}

export default Detail;