import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container mb-5">
                <div className="col-12 text-center py-4 my-4">
                    <h1>Have some question?</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullname" placeholder="John Smith" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailaddress" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="emailaddress" placeholder="john@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <button className="btn btn-outline-primary" type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact