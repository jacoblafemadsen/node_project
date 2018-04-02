import React, { Component } from 'react';
import axios from 'axios'
import './EditCard.css'

export default class EditCard extends Component {
    constructor() {
        super()
        this.state = {
            imgUrl: '',
            artistName: '',
            imgName: '',
            testUrl: '',
            curId: 0,
            edit: false
        }
    }
    updateImgUrl(e){
        this.setState({imgUrl: e})
    }
    updateArtistName(e){
        this.setState({artistName: e})
    }
    updateImgUName(e){
        this.setState({imgName: e})
    }
    editImg(obj) {
        this.setState({
            imgUrl: obj.url,
            artistName: obj.name,
            imgName: obj.imgTitle,
            testUrl: obj.url,
            curId: obj.id,
            edit: true
        })
        console.log(obj)
    }
    submit(){
        if(this.state.imgUrl && this.state.imgName && this.state.artistName) {
            let card = {
                url: this.state.imgUrl,
                name: this.state.artistName,
                imgTitle: this.state.imgName
            }
            if(this.state.edit) {
                axios.put(`${this.props.baseUrl}/${this.state.curId}`, {card}).then(ree => {
                    console.log('Success! Image change.')
                })
                this.setState({edit: false})
            } else {
                axios.post(`${this.props.baseUrl}`, {card}).then(res => {
                    console.log('Success! Posted.')
                })
            }
            this.setState({
                imgUrl: '',
                artistName: '',
                imgName : '',
                testUrl: '',
                curId: 0
            })
            this.props.updtImg()
        } else {
            alert('Please fill out all the input fields.')
        }
    }
    testUrl() {
        if(this.state.imgUrl) {
            this.setState({testUrl: this.state.imgUrl})
        }
    }
    render() {
        return (
            <section className="eCardMain" id="bottom">
                <div className="divH1">
                    <h1>share your passion</h1>
                </div>
                <div className="eCardBody">
                    <div className="inputAndButton">
                        <div className="imgUrlGroup">
                            <label>Image URL</label>
                            <input className="imgUrlInpt" 
                                value={this.state.imgUrl}
                                placeholder="www.image.com"
                                onChange={e => this.updateImgUrl(e.target.value)}
                            />
                            <button className="checkButton" onClick={() => this.testUrl()}>test</button>
                        </div>

                        <div className="nameGroup">
                            <label>Your Name</label>
                            <input className="artistNameInpt" 
                                value={this.state.artistName}
                                placeholder="John Doe"
                                onChange={e => this.updateArtistName(e.target.value)}
                            />
                        </div>
                        
                        <div className="titleGroup">
                            <label>Image Name</label>
                            <input className="imgNameInpt"
                                value={this.state.imgName}
                                placeholder="Void"
                                onChange={e => this.updateImgUName(e.target.value)}
                            />
                            <button className="submitBtn"
                                onClick={() => this.submit()}>submit</button>
                        </div>
                    </div>
                    <div className="uploadImgDiv">
                        {this.state.testUrl?<img src={this.state.testUrl}  alt=""/>:<h1>test your image here</h1>}
                    </div>
                </div>
            </section>
        );
    }
}