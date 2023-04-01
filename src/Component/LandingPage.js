import React,{useState} from 'react' 
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"


const LandingPage = () => {

  
  return (
    <div>
      <div className='landing_container'>
        <div className="heading">
        <h4 className='landing_title1'>Are you Hungry?</h4>
        <h1 className='landing_title2'>Don't Wait!!</h1>
       <Link to="/menu"> <Button className='order_btn'>Order Now</Button></Link>
        </div>
      </div>
     </div>
    
  )}
export default LandingPage
