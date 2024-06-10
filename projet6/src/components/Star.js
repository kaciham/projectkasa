import React from 'react';

const greyStart = 'assets/img/greyStar.png';
const redStar = 'assets/img/redStar.png';


const Star = ({ rating }) => {

    const filledStars = rating;
    const emptyStars = 5 - rating;

    const diplayStars = () => {
        const stars = [];

        for (let i = 0; i < filledStars; i++) {
            stars.push(<img key={`filled-${i}`} src={redStar} alt='red star' />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<img key={`empty-${i}`} src={greyStart} alt='grey star' />);
        }

        return stars;
    }

    return (
        <div>
            <div>{diplayStars()}</div>
        </div>
    );
};

export default Star;