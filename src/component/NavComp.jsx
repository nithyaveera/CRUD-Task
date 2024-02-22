import React from 'react';
import { Link } from 'react-router-dom';
import './style/navcomp.css'

const NavComp = () => {
    return (
        <div class="container-fluid bg-primary head">
            <div class="nav ">
                <div class="title"><Link to='/' >Employee Directory <i class="fa-solid fa-users-line"></i></Link></div>
                <div class="create"><Link to='/create'>Create</Link></div>
                </div>
        </div>
    );
};

export default NavComp;