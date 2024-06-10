import React from 'react';

const Host = ({ hostPic, hostName }) => {
    return (
        <div className="host">
            <div className='host-name'>
                <p>{hostName}</p>
            </div>
            <div >
                <img src={hostPic} alt={hostName} />
            </div>
        </div>
    );
};

export default Host;