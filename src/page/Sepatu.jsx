import '../assets/style-sepatu.module.css'

function Sepatu() {
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

export default Sepatu;