import React from 'react'
import '../../App.css'

export default function contact() {
  return (
    <>

<div className="container" id="main-contact">
<div className="container my-4" id="contact-container1">
  <div className="row">
    <div className="col">
    <h1>Contact Us For Assistance</h1>
    <img src={require('../images/tele.png')} alt="tele"/>
    <p>Need to get in touch with us? Just fill the form with qurey or you can send directly mail at <a href="mailto:agrigrowUttarakhand@gmail.com">agrigrowUttarakhand@gmail.com</a></p>
    </div>
    
    <div className="col">
        <div className="container my-3" id="contact-container2" >
       <div className="form-floating">
        <input type="text" className="form-control" id="floatingName" placeholder="enter name"/>
        <label htmlFor="floatingName">Name</label>
        </div>
      
        <div className="form-floating mb-3 my-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
        <input type="text" className="form-control" id="floatingContact" placeholder="contact number"/>
        <label htmlFor="floatingContact">Phone</label>
        </div>
        <div className="form-floating my-3" id="texta">
            <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea2" ></textarea>
            <label htmlFor="floatingTextarea2">Message</label>
        </div>
             <button type="button" className="btn btn-primary">Send</button>
       </div>
    </div>
  </div>
</div>

</div>

    </>
   
  )
}
