import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useQuery, useMutation, gql } from "@apollo/client";
import style from '../assets/style-ulasan.module.css';
import HasilUlasan from './HasilUlasan';

const TAMPIL_ULASAN = gql`
    query MyQuery {
        ulasan {
            nilai
            nama
            teks
        }
    }
`;

const TAMBAH_ULASAN = gql`
mutation MyMutation($object: ulasan_insert_input!) {
  insert_ulasan_one(object: $object) {
    id
  }
}
`;

function Ulasan() {
    const [tampil, setTampil] = useState(false);
    
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    const [isinama, setNama] = useState('');
    const [isiteks, setTeks] = useState('');

    const { loading, error, data } = useQuery(TAMPIL_ULASAN);

    const [tambahUlasan] = useMutation(TAMBAH_ULASAN, {
        refetchQueries: [TAMPIL_ULASAN]
    })

    const onChangeRating = (e) => {
        if (e.target) {
            setRating(e.target.value);
        }
    };

    const onChangeNama = (e) => {
        if (e.target) {
            setNama(e.target.value);
        }
    };
    
    const onChangeTeks = (e) => {
        if (e.target) {
            setTeks(e.target.value);
        }
    };

    const KirimUlasan = (e) => {
        e.preventDefault();
        tambahUlasan({variables :{
          object : {
            nilai: rating,
            nama: isinama,
            teks: isiteks,
          }
        }})

        setNama('');
        setTeks('');
        setRating(null);
    };

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

                    onChange={onChangeNama}
                    value={isinama}

                    required
                /> <br />

            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onChange={onChangeRating}
                            onClick={() => setRating(ratingValue)}
                        />

                        <FaStar
                            className={style.star}
                            color={ratingValue <= (hover || rating) ? "black" : "#e4e5e9"}
                            size={"20px"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })} <span>Berikan bintang untuk sepatu ini!</span>

                <textarea
                    name="bio"
                    rows="6"
                    placeholder="Ceritakan pengalamanmu .."

                    onChange={onChangeTeks}
                    value={isiteks}

                    required
                /> <br />

                <button className={style.kirim} onClick={KirimUlasan}>Kirim</button>
            </label>:null
            } <br />
                 
            <HasilUlasan />
        </div>
    )
}

export default Ulasan;