import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-primary fw-bold mb-4">About Us</h1>
                    <p className="lead mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, sed deserunt earum nam, consequuntur ipsum vero repellat consequatur voluptatum provident reiciendis accusamus asperiores mollitia necessitatibus deleniti tenetur nostrum dolore voluptatibus.
                    </p>
                    <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default About