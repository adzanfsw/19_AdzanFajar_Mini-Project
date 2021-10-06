import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from '../assets/style-navbar.module.css';

function Navbar() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div className={style.modal}>
            <div onClick={toggleModal} className={style.overlay}></div>
            <div className={style.content}>
                <ul>
                    <Link to="/"><li>BERANDA</li></Link>
                    <Link to="/artikel"><li>ARTIKEL</li></Link>
                    <Link to="/sepatu"><li>SEPATU</li></Link>
                    <Link to="/tentang-kami"><li>TENTANG KAMI</li></Link>

                    <div className={style.small}>© 2021 JUSTRUN! All Rights Reserved.</div>
                </ul>                
            </div>
        </div>
    )
}

export default Navbar;