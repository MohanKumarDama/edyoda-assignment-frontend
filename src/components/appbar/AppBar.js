import React from 'react';

import "./AppBar.css"
const searchIcon = require("../../assets/Vector.png")
const logoIcon = require("../../assets/EDYODA.png")
const down = require("../../assets/down.png")
const AppBar = () => {
  return (
    <div className='main'>
      <nav class="navbar navbar-expand-lg navbar-light bg-white mr-auto">
        <img class='ml-5' src={logoIcon} style={{ height: '18px' }} />
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <div class='d-flex mt-2'>
                <div class="p-2 m-1 ml-5">
                  <p className='navitems'>Courses</p>
                </div>
                <div class="p-2 mt-1">
                  <img src={down} style={{ width: "12px", height: "7px" }} />
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <div class='d-flex mt-2'>
                <div class="p-2 m-1">
                  <p className='navitems'>Programs</p>
                </div>
                <div class="p-2 mt-1">
                  <img src={down} style={{ width: "12px", height: "7px" }} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="joinClass">
        <div class="my-2 my-lg-0">
          <img src={searchIcon} style={{ height: '18px', width: '18px' }} />
        </div>
        <div class='d-flex mt-1'>
          <p className='login'>Login</p>
        </div>
        <div className="btnlink">
          <p class='mt-3 text-white jointxt'>Join now</p>
        </div>
      </div>
    </div>


  )
}

export default AppBar;