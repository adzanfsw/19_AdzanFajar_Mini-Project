import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import styles from '../assets/style-news.module.css';

const ARTIKEL = gql`
    query MyQuery {
        news {
            foto
            judul
            subjudul
            url
        }
    }
`;

function News() {
    const { loading, error, data } = useQuery(ARTIKEL);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (

        data.news.map(({foto, judul, subjudul, url}) => (                           
            <div className={styles.card}>
                <div className={styles.artikel}>
                    <img className={styles.gambar} src={foto} alt="gambar" />

                    <div className={styles.teks}>
                        <div className={styles.judul}>{judul}</div>
                        <div className={styles.sub}>{subjudul}</div>
                        <div className={styles.url}><Link to={{ pathname: url}} target="_blank">Lihat selengkapnya ..</Link></div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default News;