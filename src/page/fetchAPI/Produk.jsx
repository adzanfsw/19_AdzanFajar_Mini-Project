import { useQuery, gql } from "@apollo/client";
import styles from './style-produk.module.css';

const SEPATU = gql`
    query MyQuery {
        sepatu {
            img
            tipe
            produk
        }
    }
`;

function Produk() {
    const { loading, error, data } = useQuery(SEPATU);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (

        data.sepatu.map(({img, tipe, produk}) => (                           
            <div className={styles.card}>
                <img className={styles.avatar} src={img} alt="avatar" />

                <div className={styles.cardContent}>
                    <div className={styles.tipe}>{tipe}</div>
                    <div className={styles.produk}>{produk}</div>
                </div>
            </div>
        ))
    )
}

export default Produk;