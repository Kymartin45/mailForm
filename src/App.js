import React from 'react';
import emailjs from 'emailjs-com';
import { render } from 'react-dom';
import './css/style.css';

const location = require('./img/location.png');
const mailPic = require('./img/email.png');
const style = require('./css/style.css');
const animations = require('./js/app.js');

// const dotenv = require('dotenv');s
// dotenv.config();

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_g16zd8g', 'template_4svnmks', e.target, 'user_8Y6Oq0h9a7i64BZATxUlo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
      return (
        <html lang="en">
            <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Contact Form</title>
            <link rel="stylesheet" href={style}/>
            <script src="https://kit.fontawesome.com/64d58efce2.js"crossorigin="anonymous"></script>
            <script src={animations}></script>
            </head>
            <body>
            <div class="container">
                <span class="big-circle"></span>
                <div class="form">
                <div class="contact-info">
                    <h3 class="title">Get in touch with us!</h3>
                    <p class="text">
                    Want to join the club? Curious about upcoming events? 
                    Contact us at any time and we will get back to you as quickly as possible!
                    </p>
    
                    <div class="info">
                    <div class="information">
                        <img src={location} class="icon" alt=""/>
                        <p>100 Campus Center, Seaside, CA 93955</p>
                    </div>
                    <div class="information">
                        <img src={mailPic} class="icon" alt=""/>
                        <p>businesstech@csumb.edu</p>
                    </div>
                    </div>
    
                    <div class="social-media">
                    <p>Connect with us :</p>
                    <div class="social-icons">
                        <a href="#WIP">
                        <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/csumb_businesstech/">
                        <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#WIP">
                        <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="form-container">
                    <span class="circle one"></span>
                    <span class="circle two"></span>
    
                    <form className="contact-form" onSubmit={sendEmail}>
                    <h3 class="title">Contact us</h3>
                    <div class="input-container">
                        <input type="text" name="name" placeholder='Name' class="input"/>
                        {/* <label for="">Full name</label> */}
                        {/* <span>Full name</span> */}
                    </div>
                    <div class="input-container">
                        <input type="email" name="email" placeholder='Email Address' class="input"/>
                        {/* <label for="">Email</label> */}
                        {/* <span>Email</span> */}
                    </div>
                    <div class="input-container">
                        <input type="subject" name="subject" placeholder='Subject' class="input"/>
                        {/* <label for="">Subject</label> */}
                        {/* <span>Subject</span> */}
                        </div>
                    <div class="input-container textarea">
                        <textarea name="message" placeholder='Message' class="input"></textarea>
                        {/* <label for="">Message</label> */}
                        {/* <span>Message</span> */}
                    </div>
                        <input type="submit" class="submit" value="Send" className="btn"/>
                    </form>
                </div>
                </div>
            </div>
            </body>
        </html>
        );
    }