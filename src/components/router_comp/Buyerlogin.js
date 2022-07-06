import React from 'react'
import '../../App.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import Notifications, {notify} from 'react-notify-toast';
export default function Buyerlogin() {


  const database = [
    {
      username: "anmol.bamola@gmail.com",
      password: "anmolbamola"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const [errorMessages, setErrorMessages] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();

   var uname=document.getElementById('email').value;
   var pass=document.getElementById('pass').value; 
    
   const userData = database.find((user) => user.username === uname);
   if (userData) {
     if (userData.password !== pass) {
      notify.show('wrong password');
     } else {
      notify.show('login sucessfull');
     }
   } else {
     
     setErrorMessages({ name: "uname", message: errors.uname });
   }
  };
  
 
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return  (
    
    <div className='blmain'>
      <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img    src={require('../images/mbg1.jpeg')}
          className="img-fluid" alt="Sample "/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <Notifications />
        <form>
        
                   <h1>Buyer Login</h1>
                  
         <div className="form-outline mb-4">
            <input type="email"  id="email" name="uname" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" id="email" htmlFor="form3Example3">Email address</label>
            {renderErrorMessage("uname")}
          </div>

          
          <div className="form-outline mb-3">
            <input type="password"  id="pass" name="pass" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label"  htmlFor="form3Example4">Password</label>
            {renderErrorMessage("pass")}
          </div>

          <div className="d-flex justify-content-between align-items-center">
         
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2" id="blfl">
            <button  onClick={handleSubmit} type="submit"  id="blf" className="btn btn-primary btn-lg"
              >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/BuyerRegistration"
                className="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
