import React from "react"
import Avator from '../../static/karsten-winegeart-5PVXkqt2s9k-unsplash.jpg'
import "../styles/hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my YakuLog!<br />
                Enjoy lots of posts.<br />
            </h1>
            <div className="hero-author">
                <img src={Avator} className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by Yutabee.<br />
                    Front Engineer and Pharmacist at Fukuoka city.
                </p>
            </div>
        </div>
    )
}