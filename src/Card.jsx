import React from 'react'
import './App.css'
import {NavLink} from 'react-router-dom'
export const Card = (props) => {
  return (
    
    <>
     <div class="col-md-3 col-12 gy-4 p-3 mb-5 ">
        <div class="card">
      <img src={props.img} alt=""></img>
        <div class="card-body d-grid justify-content-center text-center">
          <h5 class="card-title ">{props.name}</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p class="card-text">{props.price}</p>
          <li  className="nav-item btn-outline-primary" style={{listStyleType:"none" ,padding :"10px 10px",  }}>
          <NavLink activeClassName='menu_active read' exact className="nav-link" to="/Read">
         Read More...
          </NavLink>
        </li>
        </div>
      </div>
      </div>
    </>
  )
}
export default Card;
