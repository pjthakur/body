import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram,BsFacebook,BsTwitter } from "react-icons/bs";
import navimage from '../assets/bodylab1.png'
import navimage2 from '../assets/bodylab2.png'
import { AiOutlineUser } from "react-icons/ai";
import { Component, useRef } from 'react';

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  return (
    <img 
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src= primaryImg;
      }}
      src={primaryImg} 
      alt=""
      ref={imageRef}
    />
  )
}
const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg={navimage2}
        secondaryImg={navimage}
        alt="" />
    </div>
  )
}

const Navbar =()=> {
  const imageRef = useRef(null);
  return (
    <div className='navbar' style={{paddingTop:"0", backgroundColor:'#0E0E10'}}>
        <div className='nav-logo '>
            <ImageChangeOnMouseOver className='nav-image' />
        </div>
        <div className='nav-content'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Sevices'>Services</Link></li>
                <li><Link to='/Sevices'>Gallery</Link></li>
                <li><Link to='/Sevices'>Nutrition</Link></li>
                <li><Link to='/About'>About us</Link></li>
                <li><Link to='/Contact'>Contact us</Link></li>
            </ul>
        </div>
        <div className='nav-social '>
            <ul>
                <li><a href='#facebook'><BsFacebook/></a></li>
                <li><a href='#insta'><BsInstagram/></a></li>
                <li><Link to='/Login'><AiOutlineUser/></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar