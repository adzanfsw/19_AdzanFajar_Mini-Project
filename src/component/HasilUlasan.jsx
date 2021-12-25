import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useQuery, useMutation, gql } from "@apollo/client";
import style from "../assets/style-hasilulasan.module.css";
import FormEdit from "./FormEdit";

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

const EDIT_ULASAN = gql`
  mutation MyMutation($id: Int!, $teks: String!) {
    update_ulasan_by_pk(pk_columns: { id: $id }, _set: { teks: $teks }) {
      id
      teks
    }
  }
`;

function HasilUlasan({ id, nilai, nama, teks }) {
  const [edit, setEdit] = useState(false);
  const [hilang, setHilang] = useState(true);

  const [teksbaru, setTeksBaru] = useState("");

  const [rating] = useState(null);
  const { loading, error, data, refetch } = useQuery(TAMPIL_ULASAN);

  const [hapusUlasan] = useMutation(HAPUS_ULASAN, {
    refetchQueries: [TAMPIL_ULASAN],
  });

  const [editUlasan] = useMutation(EDIT_ULASAN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const bukaEdit = () => {
    return setEdit(!edit);
  };

  const hilangTeks = () => {
    setHilang(!hilang);
  };

  const EditTeks = (e) => {
    if (e.target) {
      setTeksBaru(e.target.value);
    }
  };

  const Hapus = () => {
    console.log("asdiasjdasj", id);

    hapusUlasan({
      variables: {
        id: id,
      },
    });
  };

  const Edit = (idx) => {
    const item = data?.ulasan.find((v) => v.id === idx);

    editUlasan({ variables: { id: id, teks: !item.teks } });

    console.log("item = ", !item.teks);
    refetch();
  };

  return (
    <div className={style.card}>
      {[...Array(nilai)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <FaStar
              className={style.star}
              color={ratingValue <= rating ? "black" : "black"}
              size={"20px"}
            />
          </label>
        );
      })}{" "}
      <span className={style.nama}>Oleh {nama}</span>
      {hilang ? (
        <div>
          <div className={style.teks}>{teks}</div>
          <button
            className={style.edit}
            onClick={() => {
              bukaEdit();
              hilangTeks();
            }}
          >
            Edit
          </button>
          <button className={style.hapus} value={id} onClick={Hapus}>
            Hapus
          </button>
        </div>
      ) : (
        ""
      )}
      {edit ? (
        <FormEdit
          teksbaru={teksbaru}
          teks={teks}
          EditTeks={EditTeks}
          Edit={Edit}
          bukaEdit={bukaEdit}
          hilangTeks={hilangTeks}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default HasilUlasan;
