import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Carrousel from '../components/Carrousel';
import Tag from '../components/Tag';
import Host from './../components/Host';
import Star from './../components/Star';

import Accordeon from '../components/Accordeon';

const RentDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [chosenRentDetails, setChosenRentDetails] = useState();

    const getData = async () => {
        const res = await axios.get("/logements.json");
        const picked = res.data.find(({ id }) => id === params.id);
        setChosenRentDetails(picked);
        if (!picked) {
            navigate("*"); // Redirect to 404 page if the rent ID is invalid
        }
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    const slidesPics = chosenRentDetails && chosenRentDetails.pictures;
    const tags = chosenRentDetails && chosenRentDetails.tags;
    const star = chosenRentDetails && chosenRentDetails.rating;
    const equipments = chosenRentDetails && chosenRentDetails.equipments;
    const equip = chosenRentDetails && equipments.map((item, index) => (
        <li key={index}>
            {item}
        </li>
    ));
    const description = chosenRentDetails && chosenRentDetails.description;

    return (
        <div>
            <Navbar />
            <div key={params.id} className='rentDetails-container page'>
                {chosenRentDetails && (
                    <div key={params.id}>
                        <Carrousel slides={slidesPics} />
                        <div className='detailed'>
                            <div className='renderRow title-location-host'>
                                <div className='title-location'>
                                    <div>
                                        <h2>{chosenRentDetails.title}</h2>
                                    </div>
                                    <div>
                                        <h3>{chosenRentDetails.location}</h3>
                                    </div>
                                </div>
                                <div className='renderTag'>
                                    {tags.map((tag, index) => (
                                        <Tag key={index} tag={tag} />
                                    ))}
                                </div>
                            </div>
                            <div className='star-host'>
                                <div className='title-location'>
                                    <Host
                                        hostPic={chosenRentDetails.host.picture}
                                        hostName={chosenRentDetails.host.name}
                                    />
                                </div>
                                <div className='renderRow'>
                                    <div>
                                        <Star rating={star} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lastRow'>
                            <div className='lastRowItemLeft accordeonLeft'>
                                <Accordeon title="Description" content={description} />
                            </div>
                            <div className='lastRowItemRight accordeonRight'>
                                <Accordeon title="Equipements" content={equip} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default RentDetails;
