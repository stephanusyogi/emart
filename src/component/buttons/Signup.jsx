import React from 'react'

const Signup = () => {
  return (
    <>
      <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#registerModal">
        <i className="fa fa-user-plus me-1"></i> Register
      </button>
      {/* Modal */}
      <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign in With Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span> Sign in With Facebook
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">Username</label>
                  <input type="text" className="form-control" id="exampleInput"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="emailsignup" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="emailsignup" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="passwdsignup" className="form-label">Password</label>
                  <input type="password" className="form-control" id="passwdsignup" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="checkmeoutsignup" />
                  <label className="form-check-label" htmlFor="checkmeoutsignup">Check me out</label>
                </div>
                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup