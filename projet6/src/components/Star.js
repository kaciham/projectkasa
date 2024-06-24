import React from 'react';

import greyStar from '../assets/img/greyStar.png';
import redStar from '../assets/img/redStar.png';


const Star = ({ rating }) => {

    const filledStars = rating;
    const emptyStars = 5 - rating;

    const diplayStars = () => {
        const stars = [];

        for (let i = 0; i < filledStars; i++) {
            stars.push(<img key={`filled-${i}`} src={redStar} alt='red star' />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<img key={`empty-${i}`} src={greyStar} alt='grey star' />);
        }

        return stars;
    }

    return (
        <div className='star'>
            <div>{diplayStars()}</div>
        </div>
    );
};

export default Star;