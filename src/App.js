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
    this.imgEdit = this.imgEdit.bind(this)
  }



  componentDidMount() {
    axios.get(`${this.state.baseUrl}`).then(res => {
      this.setState({img: res.data})
    })
  }



  updateImg(res) {
    axios.get(`${this.state.baseUrl}`).then(res => {
      this.setState({img: res.data})
    })
  }
  imgDelete(id) {
    if(this.state.img.length > 1) {
      console.log(id)
      axios.delete(`${this.state.baseUrl}/${id}`).then(res => {
        this.setState({img: res.data})
      })
      if(id === this.state.img[this.state.img.length - 1].id) {
        this.child1.downIdx()
      }
    }
  }
  imgEdit(obj) {
    this.child2.editImg(obj)
  }



  render() {
    return (
      <div className="App">
        <div className="frontBanner">
          <section className="navBanner">
            <ul className="navBar">
              <li><a href="#d2">gallery</a></li>
              <li><a href="#bottom">share image</a></li>
            </ul>
          </section>
          <section className="frontBannerImg">
            <div className="logoBackground">
              <h1 className="logo">abstract</h1>
            </div>
            <div className="logoUnder">
              <h2>share your art with your community, get your name out there.</h2>
            </div>
            <div className="downArrow"><a href="#d2">&#8595;</a></div>
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
          imgEdit={this.imgEdit}
          ref={instance => { this.child1 = instance; }}
        />
        
        <div className="galleryBottom"></div>

        <EditCard
          baseUrl={this.state.baseUrl}
          updtImg={this.updateImg}
          ref={instance => { this.child2 = instance; }} 
        />
      </div>
    );
  }
}