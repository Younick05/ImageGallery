import React from 'react'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {
  return(
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Image Gallery</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/add">Add</Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
   )

 }

export default NavBar