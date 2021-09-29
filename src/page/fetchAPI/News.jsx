import { useQuery, gql } from "@apollo/client";
import './styling/style-news.module.css'

const TEST = gql`
    query MyQuery {
        news {
            foto
            judul
        }
    }
`;

function News() {
    const { loading, error, data } = useQuery(TEST);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (
        data?.news.map(({ foto, judul }) => (
            <article>
                <div className="gambar">
                    <img src={foto} />
                </div>

                <div className="teks">
                    <p>{judul}</p>
                </div>
            </article>
        ))
    )
}

export default News;