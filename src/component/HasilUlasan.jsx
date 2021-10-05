import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useQuery, useMutation, gql } from "@apollo/client";
import style from '../assets/style-hasilulasan.module.css';

const TAMPIL_ULASAN = gql`
    query MyQuery {
        ulasan {
            id
            nilai
            nama
            teks
        }
    }
`;

const HAPUS_ULASAN = gql`
    mutation MyMutation($id: Int!) {
        delete_ulasan_by_pk(id: $id) {
            id
        }
    }
`;

function HasilUlasan () {

    const [rating, setRating] = useState(null);
    const { loading, error, data } = useQuery(TAMPIL_ULASAN);

    const [hapusUlasan, {data:hapusData}] = useMutation(HAPUS_ULASAN, {
        refetchQueries: [TAMPIL_ULASAN]
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const Hapus = (idx) => {
        console.log("asdiasjdasj", idx)

        hapusUlasan({variables :{
            id:idx.target.value
        }})
    };

    return (
        data.ulasan.map(({id, nilai, nama, teks}) => ( 
            <div className={style.card}>
                {[...Array(nilai)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />

                        <FaStar
                            className={style.star}
                            color={ratingValue <= (rating) ? "black" : "black"}
                            size={"20px"}
                        />
                    </label>
                );
            })} <span className={style.nama}>Oleh {nama}</span>

                <div className={style.teks}>{teks}</div>
                <button className={style.edit}>Edit</button>
                <button className={style.hapus} value={id} onClick={Hapus}>Hapus</button>
            </div>
        ))
    )
}

export default HasilUlasan;