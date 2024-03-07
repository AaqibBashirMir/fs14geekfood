import React from 'react'
import "./Hero.css"

function Hero() {
    return (
        <div className='hero'>

            <div>
                <h1>Let us find your</h1>
                <h1 style={{color:"rgb(225,29,72)"}}>Forever Food.</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p>Nesciunt illo tenetur fuga ducimus numquam ea!</p>
            </div>

            <div id="buttons" style={{display:"flex",gap:"20px"}}>
                <button id='search'>search Now</button>
                <button id='know'>Know more</button>
            </div>

        </div>
    )
}

export default Hero
