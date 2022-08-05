import "./login.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Login =({setLoginUser})=>{

  const navigate=useNavigate()
  const [user,SetUser]=useState({
    name:"",
    email:"",
    password:"",
})

const handleChange = e =>{
  const {name,value} =e.target
    SetUser({
        ...user,
        [name]:value
    })
}

const login =()=>{
  axios.post("http://localhost:5000/login",user)
  .then(res => { 
    alert(res.data.message)
    setLoginUser(res.data.user)
    navigate("/dashboard")
  })
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
            <img src="images/listen.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold py-3">log-in</h1>
            <h4 >Login into your account</h4>
            <form className="signin">
            {console.log("User",user)}
              <div className="form-row">
                <div className="col-lg-7">
                    <input type="text" className="form-control" name="name" value={user.name} id="floatingInputValue1" placeholder="user name" required onChange={handleChange}/>
                    <label htmlFor="floatingInputValue1"></label>
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                    <input type="email" className="form-control" name="email" value={user.email} id="floatingInputValue2" placeholder="Email-address" required onChange={handleChange}/>
                    <label htmlFor="floatingInputValue2"></label>
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                    <input type="password" className="form-control" name="password" value={user.password} id="floatingInputvalue3" placeholder="password" required onChange={handleChange}/>
                    <label htmlFor="floatingInputValue3"></label>
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                  <div className="btn1" onClick={login} required>Login</div>
                    <label htmlFor="floatingInputValue"></label>
                </div>
              </div>
                  <div>Don't have an account? </div>

                  <div className="form-row">
                <div className="col-lg-7">
                   <div className="btn1" onClick={()=> navigate("/signin")}>Register here</div>
                   <label htmlFor="floatingInputValue"></label>
                   </div>
                   </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>

    )
}
export default Login