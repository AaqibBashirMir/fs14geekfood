import React from 'react'
import "./Card.css"

function Card() {
  return (
    <div className='card'>
    <img id="card-img" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img>
    <div  className="container">
      <h2 style={{width:"400px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
      <p style={{width:"600px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
      <button style={{width:"150px",height:"40px",border:"none",borderRadius:'10px',backgroundColor:"blue",color:"white"}}>Get in touch</button>
    
    </div>
    </div>
  )
}

export default Card
