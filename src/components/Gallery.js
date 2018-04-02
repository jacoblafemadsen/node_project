import React, {Component} from 'react';
import Img from './Img'
import './Gallery.css'

export default class Gallery extends Component {
  constructor() {
  super() 
    this.state = {
      idx: 0
    }
    this.upIdx = this.upIdx.bind(this)
    this.downIdx = this.downIdx.bind(this)
  }



  upIdx() {
    if(this.state.idx === (this.props.images.length - 1)) {
      this.setState({idx: 0})
    } else {
      this.setState({idx: (this.state.idx) + 1})
    }
  }
  downIdx() {
    if(this.state.idx === 0) {
      this.setState({idx: (this.props.images.length - 1)})
    } else {
      this.setState({idx: (this.state.idx) - 1})
    }
  }


  
  render() {
    return (
      <div key={this.props.id} className="galleryContainer">
          <button className="leftBtn" onClick={() => this.downIdx()}>&#10094;</button>
          <button className="rightBtn" onClick={() => this.upIdx()}>&#10095;</button>
          <Img 
            singleImgObj={this.props.images[this.state.idx]}
            delImg={this.props.delImg}
            imgEdit={this.props.imgEdit}
          />
      </div>
    );
  }
}