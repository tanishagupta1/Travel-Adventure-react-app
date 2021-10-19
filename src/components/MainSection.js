import React from 'react'
import { Button } from './Button'
import './MainSection.css'
import '../App.css'
import Bgvideo from '../videos/video-2.mp4'

function MainSection() {
    return (
    
        <div className="main-container">
               <video autoPlay loop muted>
                   <source src={Bgvideo} type="video/mp4"></source></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="main-btns">
                <Button className="btns" buttonStyle="btn-outline"buttonSize="btn-large">Enroll Now!</Button>

                <Button className="btns" buttonSize="btn-large" buttonStyle="btn-primary" >Watch Trailer<i className="far fa-play-circle" /></Button>
            </div>
        </div>
  
    );
}

export default MainSection;