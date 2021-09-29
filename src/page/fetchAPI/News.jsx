import { useQuery, gql } from "@apollo/client";

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
  
    return data?.news.map(({ foto, judul }) => (
        <article>
            {foto}
        </article>

    ));
}

export default News;