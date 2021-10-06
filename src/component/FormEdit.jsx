import { useState } from 'react';
import { useQuery, useMutation, gql } from "@apollo/client";

import style from '../assets/style-edit.module.css';

function FormEdit ({ teksbaru, onEdit, isiteks }) {

    return (
        <>
            <label>
                <textarea
                        name="bio"
                        rows="4"
                        value={teksbaru}

                        onChange={onEdit}

                        required
                    />  <br />
                    <button className={style.kirim}>Kirim</button>
            </label>
        </>
    )
}

export default FormEdit;