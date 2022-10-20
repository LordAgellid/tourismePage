import React from 'react';

const Card = (props) => {
    return (
        <div className="card-container">
            <div className='card'>
                <img  src={props.imageUrl}  alt={props.title} />
                <div className='information-container'>
                    <div className='location'>
                        <h3>{props.location}</h3>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <h5>{props.startDate} - {props.endDate}</h5>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;