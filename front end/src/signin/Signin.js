import { useState } from 'react';
import "./signin.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const Signin=()=>{

const navigate=useNavigate()
    const [user,SetUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterpassword:"",
        contact:""

    })

    const handleChange = e =>{
      const {name,value} =e.target
        SetUser({
            ...user,
            [name]:value
        })
    }

    const signin =() =>{
      const {name,email,password,reEnterpassword,contact}=user
      if(name && email && contact && password  && (password === reEnterpassword)){
        axios.post("http://localhost:5000/signin",user)
        .then(res => { alert(res.data.message)
         navigate("/login")
        })
      } 
      else {
        alert(" invalid input ")
      }
    }



    return(
        <div>
            <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand text-white"><img src="images/favicon-32x32.png"className="img-fluid"/> Listen music</a>
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
                <a className="nav-link text-white" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <section className="form my-4 mx-5">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-5 p-0 m-0 d-inline-block">
            <img src="images/listen2.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold py-3">Sign-up</h1>
            <h4 >Signup into your account</h4>
            <form  className='login'/>
            <div className="form-row">
                <div className="col-lg-7">
                    <input type="text" className="form-control" name="name" value={user.name} id="floatingInputValue1" placeholder="Enter your Name" required onChange={handleChange}/>
                    <label htmlFor="floatingInputValue1"></label>
                </div>
              </div>


              <div className="form-row">
                <div className="col-lg-7">
                    <input type="email" className="form-control" name="email" value={user.email} id="floatingInputValue2" placeholder="Enter your Email-address" required onChange={handleChange}/>
                    <label htmlFor="floatingInputValue2"></label>
                </div>
              </div>

            
              <div className="form-row">
                <div className="col-lg-7">
                    <input type="password" className="form-control" name="password" value={user.password} id="floatingInputvalue3" placeholder="Enter password" required onChange={handleChange}/>
                    <label htmlFor="floatingInputValue3"></label>
                </div>
              </div>


             
              <div className="form-row">
                <div className="col-lg-7">
                    <input type="password" className="form-control" name="reEnterpassword" value={user.reEnterpassword} id="floatingInputvalue5" placeholder="Re-Enter password" required onChange={handleChange}/>
                    <label htmlFor="floatingInputValue5"></label>
                </div>
              </div>


              <div className="form-row">
                <div className="col-lg-7">
                    <input type="number" className="form-control"  name="contact" value={user.contact} id="floatingInputValue5" placeholder="Enter your Contact" required onChange={handleChange}/>
                    <label htmlFor="floatingInputValue5"></label>
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                  <div className="btn1" onClick={signin} required>Signin</div>
                    <label htmlFor="floatingInputValue"></label>
                </div>
              </div>
              <div>to login here</div>
              <div className="form-row">
                <div className="col-lg-7">
                   <div className="btn1" onClick={()=> navigate("/login")}>Login</div>
                   <label htmlFor="floatingInputValue"></label>
                   </div>
                   </div>
            <form/>
          </div>
        </div>
      </div>
    </section>
            
   </div>

    )
}
export default Signin