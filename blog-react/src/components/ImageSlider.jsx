import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlider.css";

export default function Imageslider({ images }) {
    return (
        <div className="slide-container ImageSlider">
            <Fade>
                {images?.map((image) => (
                    <div key={image} className="each-fade">
                        <img src={image} />
                    </div>
                ))}
            </Fade>
        </div>
    );
}
