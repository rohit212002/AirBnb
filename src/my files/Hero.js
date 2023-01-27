import React from "react";
import hero_img from "../my files/images_2/hero_img.png"

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero-photo" src={hero_img} ></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </section>

    );
}