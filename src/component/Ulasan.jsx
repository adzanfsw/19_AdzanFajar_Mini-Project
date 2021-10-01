import { useState } from 'react';

import style from '../assets/style-ulasan.module.css';
import Rating from './Rating';

function Ulasan() {
    const [tampil, setTampil] = useState(false);

    return (
        <div className={style.box}>
            <div className={style.title}>
                Bagaimana pengalaman teman-teman terhadap sepatu ini?
                <small className={style.ulas} onClick={() => setTampil(true)}> Berikan ulasanmu sekarang!</small>
            </div>

            {
            tampil?<label>
                <input
                    type="text"
                    name="fname"
                    placeholder="Masukkan Nama mu .."
                    required
                /> <br />

                <Rating /> <span>Berikan bintang untuk sepatu ini!</span>

                <textarea
                    name="bio"
                    rows="6"
                    placeholder="Ceritakan pengalamanmu .."
                    required
                /> <br />

                <button className={style.kirim}>Kirim</button>
            </label>:null
            }
        </div>
    )
}

export default Ulasan;