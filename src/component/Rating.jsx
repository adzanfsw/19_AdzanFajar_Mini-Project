import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import style from '../assets/style-rating.module.css';

const Rating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
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
            })}
        </>
    )
}

export default Rating;