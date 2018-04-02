import React from 'react';
import Edit from 'react-icons/lib/fa/edit'
import './Img.css'

export default function Gallery(props) {
  return (
    <div key={props.id} className="imgContainer">
      <div className="infoBar">
        <button id="edit" href="#d2" >Edit</button>
        <button id="delete" onClick={() => props.delImg(props.singleImgObj.id)}>Delete</button>
        <h1>{`${props.singleImgObj?props.singleImgObj.imgTitle:''}  By ${props.singleImgObj?props.singleImgObj.name:''}`}</h1>
      </div>
      <img src={props.singleImgObj?props.singleImgObj.url:''}/>
    </div>
  );
}
