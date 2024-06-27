import React, { useState } from 'react';
import leftArrow from "../assets/vector/PreviousArrow.svg";
import rightArrow from "../assets/vector/NextArrow.svg";

const Carrousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    return (
        <div className="img-slider">

            {length > 1 && (
                <img
                    src={leftArrow} //Affichage des flèches seulement si length > 1
                    alt="gauche"
                    onClick={previousSlide}
                    className="leftArrow"
                />
            )}

            {slides.map((slide, index) => (
                <div
                    key={index} // mise en place du slider avec affichage conditionnel et opacity=1 quand le slide en cours vaut l'index
                    className={
                        current === index
                            ? "slider bl-msk wh-msk active-anim "
                            : "slider bl-msk wh-msk"
                    }
                >
                    {index === current && <img src={slide} className='img-slider' alt="appartement à louer" />}
                    {index === current && length > 1 && (
                        <span className="slider__number index">
                            {current + 1}/{length}
                        </span>
                    )}
                </div>
            ))}
            {length > 1 && (
                <img
                    src={rightArrow}
                    alt="droite"
                    onClick={nextSlide}
                    className="rightArrow"
                />
            )}
        </div>
    );
};

export default Carrousel;