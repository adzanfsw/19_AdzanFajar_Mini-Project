import style from '../assets/style-navbar.module.css';

function Navbar() {
    document.body.style.backgroundColor = 'black';

    return (
        <div className={style.nav}>
            <img className={style.justrun} alt="JUSTRUN!" src={require('../assets/images/just.png').default} />

            <img className={style.burger} alt="JUSTRUN!" src={require('../assets/images/burger.png').default} />
        </div>
    )
}

export default Navbar;