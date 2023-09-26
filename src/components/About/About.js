/* eslint-disable jsx-a11y/anchor-has-content */

import React, { useEffect, useState } from 'react'

import './About.css'


function About() {
  
    return (
        <div className="about-us">
          <div className="about-us-header">
            <h1 className='about-h1'>About Us</h1>
            <p>Welcome to the Movie List App!</p>
          </div>
          <div className="about-us-content">
            <div className="about-us-text">
              {/* <h2>Our Mission</h2> */}
              <p className='about-p'>
              We're passionate about movies and built this app to help you discover, track, and share your favorite films
              Discover, track, and enjoy your favorite movies with our user-friendly app. Your go-to destination for all things cinema.
              Join us in exploring the world of cinema!
              </p>
            </div>
            <div className="about-us-image">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.QvXq4TCacvs7Z5KNl9V_tQHaFP&pid=Api&P=0&h=180"
                alt="About Us"
              />
            </div>
          </div>
        </div>
      );
    
  
}

export default About
