import React, { Component } from 'react';
import EditCard from './components/EditCard'
import ImgCard from './components/ImgCard'
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
  render() {
    let imageCards = []
    if(this.state.img !== []) {
      console.log(this.state.img)
      imageCards = this.state.img.map(e => {
        let { url, name, imgTitle, id } = e
        return (
          <div className="imgCardDisplay">
            <ImgCard  key={id}
            url={url}
            name={name}
            imgTitle={imgTitle}
          />
          </div>
        );
      })
    }
    
    return (
      <div className="App">
        <div className="frontBanner">
          <section className="frontBannerImg">
            <ul className="navBar">
              <li><a href="#d3">gallery</a></li>
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
        </div>
        <div className="topCardContainer">
          
        </div>
        <div className="imgCardContainer">
          {imageCards}
        </div>
        <div className="botCardContainer">

        </div>
        <EditCard
          baseUrl={this.state.baseUrl}
          updtImg={this.updateImg}
        />
      </div>
    );
  }
}
