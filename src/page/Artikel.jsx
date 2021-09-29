import '../assets/style-artikel.module.css'

function Artikel() {
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

          <article>

          </article>
      </>
    );
}

export default Artikel;