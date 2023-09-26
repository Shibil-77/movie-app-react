import React from 'react';
import './Contact.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookSquare, faInstagram, faTwitter, faHeadset, faEnvelopeOpenText, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    return (
        <section className="contact_us">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="contact_inner">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="contact_form_inner">
                        <div className="contact_field">
                          <h3>Contact Us</h3>
                          <p>Feel free to contact us anytime. We will get back to you as soon as we can!</p>
                          <input type="text" className="form-control form-group" placeholder="Name" />
                          <input type="text" className="form-control form-group" placeholder="Email" />
                          <textarea className="form-control form-group" placeholder="Message"></textarea>
                          <button className="contact_form_submit">Send</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="right_contact_social_icon d-flex align-items-end">
                        <div className="social_item_inner d-flex">
                          {/* <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                          <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                          <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_info_sec">
                    <h4>Contact Info</h4>
                    <div className="d-flex info_single align-items-center">
                      {/* <FontAwesomeIcon icon={faHeadset} /> */}
                      <span>+91 8009 054294</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      {/* <FontAwesomeIcon icon={faEnvelopeOpenText} /> */}
                      <span>info@flightmantra.com</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      {/* <FontAwesomeIcon icon={faMapMarkedAlt} /> */}
                      <span>1000+ Travel partners and 65+ Service cities across India, USA, Canada & UAE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Contact