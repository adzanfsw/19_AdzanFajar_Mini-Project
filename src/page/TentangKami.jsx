import '../assets/style-tentang.css'

function TentangKami() {
  return (
    <>
        <header>
            <img className="justrun" alt="JUSTRUN!" src={require('../assets/images/just.png').default} />

            <img className="nav" alt="JUSTRUN!" src={require('../assets/images/burger.png').default} />

            <p>TETAPLAH MELANGKAH!</p>
        </header>

        <article>
            <h1>TENTANG JUSTRUN<small>!</small></h1>

            <p>Kami adalah sebuah platform informasi terpercaya dalam hal sepatu lari. Platform ini dibuat berdasar alasan karena olahraga yang paling murah dan mudah dilakukan adalah berlari. Oleh karena itu, kami hadir untuk membantu masyarakat maupun komunitas dalam menentukan senjata terbaik untuk menapaki medan dalam berolahraga lari ataupun yang lain.</p>
            <p>Di website ini, pengguna bisa saling satu sama lain untuk memberikan pendapat dan pengalam terhadap produk tertentu, yang nantinya diharapkan bisa untuk membantu teman-teman yang lain dalam menilai sebelum memutuskan untuk membeli sebuah produk. Terima kasih, dan semangat!!</p> <br />

            <strong>Kontak kami <small>&gt;</small></strong>
        </article>

        <footer>	
   			<p>© 2021 JUSTRUN! All Rights Reserved.</p>
   		</footer>
    </>
  );
}

export default TentangKami;