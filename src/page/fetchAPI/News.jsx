import { useQuery, gql } from "@apollo/client";
import './style-news.module.css';

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

        data.news.map(({foto, judul, subjudul}) => (                           
            <article>
                <div className="artikel">
                    <img src={foto} />

                    <div className="teks">{judul}</div>
                </div>
            </article>
        ))
    )
}

export default News;