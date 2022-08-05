import "./dashboard.css"
const Dashboard =({setLoginUser})=>{
return(
 <div className="dashboard">

    <div className="welcome"> 
    <h1>welcome</h1>
        <div className="btn5"  onClick={ () => setLoginUser({})}>logout</div>
        </div>
 </div>
    )
}
export default Dashboard