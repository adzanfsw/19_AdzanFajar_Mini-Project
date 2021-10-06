import { useState } from 'react';
import { useQuery, useMutation, gql } from "@apollo/client";

import style from '../assets/style-edit.module.css';

function FormEdit ({ teksbaru, EditTeks, teks, Edit, bukaEdit, hilangTeks }) {

    return (
        <>
            <label>
                <textarea
                        name="bio"
                        rows="4"
                        value={teks}
                        // placeholder={teks}
                        onChange={EditTeks}

                        required
                    />  <br />
                    <button onClick={() => {bukaEdit(); hilangTeks(); Edit();}} className={style.kirim}>Kirim</button>
            </label>
        </>
    )
}

export default FormEdit;