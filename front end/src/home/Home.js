import React from 'react';
import "./home.css"
import { useNavigate } from "react-router-dom"
const Home =()=>{
  const navigate=useNavigate()

    return(
        <div>
        <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand text-white" href="#"><img src="images/favicon-32x32.png"className="img-fluid"/> Listen music</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  mb-md-0 ">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#artists">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about us">about us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <section id="home">
      <div className="content text-center">
        <h1 className="link-light">Welcome to Listen music</h1>
        <p className="link-light" > for more information to click register or sign in  here</p>
        <button type="button" className="btn2"><span></span> <a href=""  onClick={()=> navigate("/signin")}>Sign-up</a></button>
          <button type="button" className="btn2"><span></span><a href="" onClick={()=> navigate("/login")}>Login</a></button>
      </div>
  </section>

  <section id="why">
    <div className="container container-lg-3 container-md-4 container-sm-6 container-s-6 ">
      <h1 className="title text p-2">Why Listen Music?</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-5 ">

        <div className="col-lg-3 col-md-4 col-sm-6 ">
          <div className="c">
            <a href=""><img src="images/play.png" className="rounded-circle" width="140" height="140" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em"></text></a>
            <div className="card-body">
              <h2 >Play your favorites.</h2>
              <p>Listen to the songs you love, and discover new music and podcasts.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="c">
            <a href=""><img src="images/play1.png" className="rounded-circle" width="140" height="140" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em"></text></a>
            <div className="card-body">
              <h2>Playlists made easy.</h2>
              <p>We'll help you make playlists. Or enjoy playlists made by music experts.r</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="c">
            <a href=""><img src="images/play2.png" className="rounded-circle" width="140" height="140" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em"></text></a>
            <div className="card-body">
              <h2 >Make it yours.</h2>
              <p>Tell us what you like, and we'll recommend music for you.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="c">
            <a href=""><img src="images/play3.png" className="rounded-circle" width="140" height="140" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em"></text></a>
            <div className="card-body">
              <h2>Save mobile data.</h2>
              <p>To use less data when you play music, turn on Data Saver in Settings.</p> 
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>

  <section id="free">
    <div className="free1">
      <h1 className="free2 link-light " >it's free.</h1>
      <h1 className="free2 link-light " >No Credit Card Required.</h1>
    </div>
  </section>

 <section id="faq">
  <div class="container col-sm-8 ">
  <h1 className="title2">Got questions?</h1>
  </div>
  <div className="container">
    <div className="row3">
      <div className="col-lg-8 offset-lg-2">
    <div className="accordion accordion-flush mt-5" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header clearfix mb-3 mt-3" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            How do I create a playlist?
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><p> Playlists are a great way to save collections of music, either for your own listening or to share.</p>
            <p>To create one:</p>
            <p> 1. Tap Your Library.</p> 
            <p>2. Tap CREATE.</p>
            <p>3. Give your playlist a name.</p>
            <p> 4. Start adding songs (and we'll help you along).</p>
            </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header clearfix mb-3 mt-3" id="flush-headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            How do I activate Data Saver mode?
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><p>1. Tap Home.</p>
            <p>2. Tap Settings.</p>
            <p>3. Tap Data Saver.</p> 
            <p>4. Switch on Data Saver.</p>
            </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header clearfix mb-3 mt-3" id="flush-headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Is it only possible to shuffle play music?
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <p>Any playlist with the shuffle icon will play on shuffle.</p>
            <p>Some playlists won't have the shuffle icon, so you can tap any song to play it.</p>
          </div>
        </div>
      </div>
     
    
      <div className="accordion-item">
        <h2 className="accordion-header clearfix mb-3 mt-3"  id ="flush-headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
            Where can I find Podcasts?
          </button>
        </h2>
        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">  Tap Search. Under Browse All, tap Podcasts.</div>
        </div>
      </div>

    </div>
  </div>
    </div>
  </div>
 </section>

  <section id="sub">
    <div className="ready">
      <h1 className="title link-light">Ready? Let's Play</h1>
      <button type="button" className="btn2"><a href=""  onClick={()=> navigate("/signin")}>GET FREE</a></button>
    </div>
  </section>

  <footer className="footer">
    <div className="container">
      <div className="row2">
        <div className="footer-col">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">For the Record</a></li>
            <li><a href="#">Jobs</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>COMMUNITIES</h4>
          <ul>
            <li><a href="#">For Artists</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Vendors</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">Web player</a></li>
            <li><a href="#">Free website</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-snapchat"></i></a>
            <a href="#"><i className="fab fa-telegram"></i></a>
          </div>
        </div>
        </div>
        <div className="d-flex justify-content-between py-4 my-4 border-top border-dark">
          <p>&copy; 2022 Listen music, Inc. All rights reserved. </p>
        </div>
      </div>
  </footer>
  </div>

    )
}
export default Home