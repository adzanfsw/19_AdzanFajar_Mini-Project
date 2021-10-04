import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useQuery, useMutation, gql } from "@apollo/client";
import style from '../assets/style-hasilulasan.module.css';

const TAMPIL_ULASAN = gql`
    query MyQuery {
        ulasan {
            nilai
            nama
            teks
        }
    }
`;

function HasilUlasan () {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const { loading, error, data } = useQuery(TAMPIL_ULASAN);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        data.ulasan.map(({nilai, nama, teks}) => ( 
            <div className={style.card}>
                <div className={style.nama}>Oleh {nama}</div>
                <div className={style.teks}>{teks}</div>

                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={4}
                            // onChange={onChangeRating}
                            // onClick={() => setRating(ratingValue)}
                        />

                        <FaStar
                            className={style.star}
                            // color={ratingValue <= (hover || rating) ? "black" : "#e4e5e9"}
                            color={"black"}
                            size={"20px"}
                            // onMouseEnter={() => setHover(ratingValue)}
                            // onMouseLeave={() => setHover(null)}
                        />
                    </label>
        

                <button className={style.edit}>Edit</button>
                <button className={style.hapus}>Hapus</button>
            </div>
        ))
    )
}

export default HasilUlasan;