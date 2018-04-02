import React, { Component } from 'react';
import EditCard from './components/EditCard'
import Gallery from './components/Gallery'
import './reset.css'
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      baseUrl: '/api/images',
      img: []
    }
    this.updateImg = this.updateImg.bind(this)
    this.imgDelete = this.imgDelete.bind(this)
  }
  componentDidMount() {
    axios.get(`${this.state.baseUrl}`).then(res => {
      this.setState({img: res.data})
    })
  }
  updateImg() {
    axios.get(`${this.state.baseUrl}`).then(res => {
      this.setState({img: res.data})
    })
  }
  imgDelete(id) {
    if(this.state.img.length !== 1) {
      axios.delete(`/api/images/${id}`).then(res => {
        console.log('Success!')
      })
      this.updateImg()
    }
  }
  render() {
    return (
      <div className="App">
        <div className="frontBanner">
          <section className="frontBannerImg">
            <ul className="navBar">
              <li><a href="#d2">gallery</a></li>
              <li><a href="#bottom">share image</a></li>
            </ul>
            <div className="logoBackground">
              <h1 className="logo">abstract</h1>
            </div>
          </section>
        </div>
        <div className="transitionBanner">
          <div id="d1"></div>
          <div id="d2"></div>
          <div id="d3"></div>
          <h1>{`gallery`}</h1>
          <div id="d4"></div>
          <div id="d5"></div>
          <div id="d6"></div>
        </div>
        
        <Gallery 
          images={this.state.img}
          delImg={this.imgDelete}
        />
        <div className="galleryBottom"></div>
        <EditCard
          baseUrl={this.state.baseUrl}
          updtImg={this.updateImg}
        />
      </div>
    );
  }
}
