import React from 'react'
import videoBg from './images/first.mp4'
import '../App.css'

export default function home() {
  return (
    <>
      <div className='contain' id="main">
        <div className="overlay"></div>
        <video id="video1" src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1 className="m">Organic Farming in Uttarakhand</h1>
        </div>
      </div>

      


      <div class="container" id="pcont">
        <strong><h1 className="pconth">Why to Adopt Organic</h1></strong>
        <div class="row">
          <div class="col" id="pcontcol">
            <img className="pimg" alt="a" src={require('./images/a.png')} />
            <h3>Handly-picked and harvested</h3>
          </div>
          <div class="col">
            <img alt="b" src={require('./images/b.png')} />
            <h3>Natural in Origin</h3>
          </div>
          <div class="col">
            <img alt="c" src={require('./images/c.png')} />
            <h3>Chemical Free</h3>
          </div>
          <div class="col">
            <img alt="d" src={require('./images/d.png')} />
            <h3>Best In Quality</h3>
          </div>
        </div>
      </div>




      <div className="Container" id="Cardtwo">
        <div className='cnt'>
          <br /><h1 className="hero-textt">Scope of organic Farming</h1>
          <p className="Cardp">The trend of organic farming is on a boom in the market. There is a consistent rise in consumers' demand for organic products globally in the last 6 years. People nowadays prefer to consume organic products more often, due to their reliability of not being contaminated with chemicals and helping the environment too. Many countries all over the world are switching to organic agriculture. Uttarakhand is among the several states in India that are taking steps forward in promoting organic farming. With its clean intentions of developing organic farming, Uttarakhand has announced plans to do so in the coming years. </p>
        </div>
      </div>


      <div class="card mb-3" id="card2">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={require('./images/cm.jpg')} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title" id="pow">Shri Pushkar Singh Dhami</h3>
              <h5 class="card-title" id="des">Chief Minister Uttarakhand</h5>
              <p class="card-text">Chief Minister Uttrakhand has said that cluster-based agriculture and an effective system of certification of organic produce are essential for augmenting the income of farmers.</p>
            </div>
          </div>
        </div>
      </div>


      <div class="card mb-3" id="card2">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={require('./images/joshi.jpg')} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title" id="pow">Shri Ganesh Joshi</h3>
              <h5 class="card-title" id="des">Ministry of Agriculture</h5>
              <p className="card-text">The Uttarakhand government has taken many initiatives in agriculture and in last two years the state received six awards in the field. He said that the income of the farmers can be increased with adopting integrated agriculture and by bringing allied sector with agriculture.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
