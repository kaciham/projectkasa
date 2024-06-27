import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Carrousel from '../components/Carrousel';
import Tag from '../components/Tag';
import Host from './../components/Host';
import Star from './../components/Star';
import AccordeonDescription from '../components/AccordeonDescription';
import AccordeonEquipment from './../components/AccordeonEquipment';


const RentDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [chosenRentDetails, setChosenRentDetails] = useState();

    const getData = async () => {
        const res = await axios.get("/logements.json");
        const picked = res.data.find(({ id }) => id === params.id);
        res.data.map(() => setChosenRentDetails(picked));
        if (picked === undefined) {
            navigate("*"); //renvoi vers la page 404 en cas d'URL de logement invalide
        }
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    const slidesPics = chosenRentDetails && chosenRentDetails.pictures;
    //Tags
    const tags = chosenRentDetails && chosenRentDetails.tags;
    //Star 
    const star = chosenRentDetails && chosenRentDetails.rating;
    //Equipements
    const equipments = chosenRentDetails && chosenRentDetails.equipments;
    const equip = chosenRentDetails && equipments.map((item, index) => (
        <li key={index}>
            {item}
        </li>
    ))
    //Description

    const description = chosenRentDetails && chosenRentDetails.description;

    return (
        <div>
            < Navbar />
            <div key={params.id} className='rentDetails-container page'>
                {
                    chosenRentDetails && (
                        <div key={params.id}>
                            <Carrousel key={params.id} slides={slidesPics} />
                            <div className='detailed'>
                                <div className='renderRow title-location-host' key={params.id} >
                                    <div key={params.id} className='title-location ' >
                                        <div>
                                            <h2>{chosenRentDetails.title}</h2>
                                        </div>
                                        <div>
                                            <h3>{chosenRentDetails.location}</h3>
                                        </div>
                                    </div>
                                    <div className='renderTag'>
                                        {tags.map((tag) => (
                                            <Tag tag={tag} />
                                        ))}
                                    </div>
                                </div>
                                <div className='star-host'>
                                    <div className='title-location'>
                                        <Host
                                            key={params.id}
                                            hostPic={chosenRentDetails.host.picture}
                                            hostName={chosenRentDetails.host.name}
                                        />
                                    </div>

                                    <div className='renderRow'>

                                        <div>
                                            <Star rating={star}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lastRow'>
                                <div className='lastRowItemLeft accordeonLeft' >
                                    <AccordeonDescription
                                        description={description}
                                    />
                                </div>
                                <div className='lastRowItemRight accordeonRight '>
                                    <AccordeonEquipment
                                        equip={equip}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            < Footer />
        </div >
    )
};

export default RentDetails;