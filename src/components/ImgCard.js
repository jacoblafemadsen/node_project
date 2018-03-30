import React from 'react';
import '../reset.css'
import './ImgCard.css'

export default function ImgCard(props) {
    return (
        <div className="imgCardDiv" key={props.id}>
            <div className="imgDiv">
                <img src={props.url} alt={props.imgTitle}/>
                <div className="imgCardNames">
                    <h2 className="atristNameH2">{props.name}</h2>
                    <h2 className="imgNameH2">{props.imgTitle}</h2>
                </div>
            </div>
        </div>
    );
}