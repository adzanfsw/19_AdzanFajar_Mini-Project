import style from '../assets/style-navbar.module.css';

function Navbar() {
    document.body.style.backgroundColor = 'black';

    return (
        <div className={style.nav}>
            <ul>
                <li className={style.beranda}>BERANDA</li>
                <li>ARTIKEL</li>
                <li>SEPATU</li>
                <li>TENTANG</li>
            </ul>
        </div>
    )
}

export default Navbar;