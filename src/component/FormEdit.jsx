import { useState } from 'react';
import { useQuery, useMutation, gql } from "@apollo/client";

import style from '../assets/style-edit.module.css';

const TAMPIL_ULASAN = gql`
    query MyQuery {
        ulasan {
            nilai
            nama
            teks
        }
    }
`;

function FormEdit() {

    const { loading, error, data } = useQuery(TAMPIL_ULASAN);

    const [tambahUlasan] = useMutation(TAMBAH_ULASAN, {
        refetchQueries: [TAMPIL_ULASAN]
    })

    const onChangeTeks = (e) => {
        if (e.target) {
            setTeks(e.target.value);
        }
    };

    return (
        <>
            <label>
                <textarea
                    name="bio"
                    rows="4"
                    value={teks}

                    // onChange={onChangeTeks}

                    required
                /> <br />
            </label>
        </>
    )
}

export default FormEdit;