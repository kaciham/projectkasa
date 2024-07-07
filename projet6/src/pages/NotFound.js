import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div >
            <Navbar />
            <div className='notfound'>
                <div className='center-div notfound-item'>
                    <svg width="598" height="263" viewBox="0 0 598 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M198.543 192.664H165.711V235H120.207V192.664H11.6311V161.272L106.671 33.4H155.631L67.5031 154.648H121.647V116.92H165.711V154.648H198.543V192.664ZM298.898 238.456C282.194 238.456 267.314 234.328 254.258 226.072C241.202 217.816 230.93 205.912 223.442 190.36C216.146 174.616 212.498 155.896 212.498 134.2C212.498 112.504 216.146 93.88 223.442 78.328C230.93 62.584 241.202 50.584 254.258 42.328C267.314 34.072 282.194 29.944 298.898 29.944C315.602 29.944 330.482 34.072 343.538 42.328C356.594 50.584 366.77 62.584 374.066 78.328C381.554 93.88 385.298 112.504 385.298 134.2C385.298 155.896 381.554 174.616 374.066 190.36C366.77 205.912 356.594 217.816 343.538 226.072C330.482 234.328 315.602 238.456 298.898 238.456ZM298.898 199C311.186 199 320.786 193.72 327.698 183.16C334.802 172.6 338.354 156.28 338.354 134.2C338.354 112.12 334.802 95.8 327.698 85.24C320.786 74.68 311.186 69.4 298.898 69.4C286.802 69.4 277.202 74.68 270.098 85.24C263.186 95.8 259.73 112.12 259.73 134.2C259.73 156.28 263.186 172.6 270.098 183.16C277.202 193.72 286.802 199 298.898 199ZM592.574 192.664H559.742V235H514.238V192.664H405.662V161.272L500.702 33.4H549.662L461.534 154.648H515.678V116.92H559.742V154.648H592.574V192.664Z" fill="#FF6060" />
                    </svg>
                </div>
                <div className='center-div notfound-item'>
                    <h2 >Oups! La page que vous demandez n'existe pas.</h2>
                </div>
                <div className='center-div notfound-item'>
                    <NavLink to="/">
                        <p className='backpage'>Retouner sur la page d'Accueil</p>
                    </NavLink>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;