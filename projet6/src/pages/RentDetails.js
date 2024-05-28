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

    return (
        <div>
            < Navbar />
            <div key={params.id} className='rentDetails-container'>
                {
                    chosenRentDetails && (
                        <div key={params.id}>
                            <Carrousel key={params.id} slides={slidesPics} />
                            <div className='renderRow' key={params.id}>
                                <div key={params.id} >
                                    <div>
                                        <h2>{chosenRentDetails.title}</h2>
                                    </div>
                                    <div>
                                        <h3>{chosenRentDetails.location}</h3>
                                    </div>
                                </div>
                                <div >
                                    <Host
                                        key={params.id}
                                        hostPic={chosenRentDetails.host.picture}
                                        hostName={chosenRentDetails.host.name}
                                    />
                                </div>
                            </div>
                            <div className='renderRow'>
                                <div className='renderTag'>
                                    {tags.map((tag) => (
                                        <Tag tag={tag} />
                                    ))}
                                </div>
                                <div>
                                    <Star rating={star}
                                    />
                                </div>
                            </div>
                            {/* //equip */}
                            {/* //rate */}
                        </div>
                    )
                }
            </div>
            < Footer />
        </div >
    )
};

export default RentDetails;