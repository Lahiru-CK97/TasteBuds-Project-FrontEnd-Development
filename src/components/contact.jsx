import React, { Component } from "react";

class Contact extends Component {
    render(){
        return (
            <div className="container">
                <section className="mb-4">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Talk to Us</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Need to get in touch with us? Either fill out the form with your inquiry or find the TasteBuds email you'd like to contact below.</p>
                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="row">                          
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="name" name="name" className="form-control"/>
                                            <label className="">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="email" name="email" className="form-control"/>
                                            <label className="">Your Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" id="subject" name="subject" className="form-control"/>
                                            <label className="">Subject</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                            <label>Your Message</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-md-left">
                                <a className="btn btn-primary">Submit</a>
                            </div>
                            <div className="status"></div>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>50-2/9 Hendrick Bldg N H M Abdul Cader Road, 11
                                    Colombo
                                    Sri Lanka</p>
                                </li>

                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>(+94) ( 060) 2541360</p>
                                </li>

                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>tastebudsfoodnetwork@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            
        )
    }
}

export default Contact;