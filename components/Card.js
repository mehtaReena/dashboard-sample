import React from 'react';

function Card(props) {
    return (
        <div className="card">
        <div className="inner-card" style={{backgroundImage:'url(' + props.url + ')'}}>

            <div className="header"><p className="text"> {props.heading} </p></div>
            </div >
               <p className="card-text">Lorem ipsum dolor sit amet. Aut sint deserunt  </p>
            <div className="btndiv">
            <button className="btn">Learn more</button>

        </div>
        </div>
    );
}

export default Card;