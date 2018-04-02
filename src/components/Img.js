import React from 'react';
import './Img.css'

export default function Gallery(props) {
  return (
    <div key={props.id} className="imgContainer">
      <div className="infoBar">
        <a href="#bottom"><button id="edit" onClick={() => props.imgEdit(props.singleImgObj)}>&#9986;</button></a>
        <button id="delete" onClick={() => props.delImg(props.singleImgObj)}>&#128465;</button>
        <h1>{`${props.singleImgObj?props.singleImgObj.imgTitle:''}  By ${props.singleImgObj?props.singleImgObj.name:''}`}</h1>
      </div>
      <img src={props.singleImgObj?props.singleImgObj.url:''} alt=""/>
    </div>
  );
}
