import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import logo from '../../img/logo2.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const location = useLocation();
    let active = false;


    if (location.pathname === `/`) {
        active = true;
    }


    const logOut = () => {
        signOut(auth);
    };








    return (
        <nav className={`${colorChange || !active ? 'headerColor navbar navbar-expand-lg fixed-top' : 'navbar navbar-expand-lg bg-transparent fixed-top'} ${!active && 'custom-bg'}`}>
            <div className="container">
                <Link className="navbar-brand" to="/"><img style={{ borderRadius: '50px', width: '75px' }} className='bg-white' src={logo} alt="" /></Link>
                <button className="navbar-toggler bg-dark border border-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={active ? 'nav-link text-white fw-bold' : 'custom-nav nav-link text-warning fw-bold'} aria-current="page" to="/">Home</Link>
                        </li>
                        {user && <li className="nav-item">
                            <Link className={active ? 'nav-link text-white fw-bold' : 'custom-nav nav-link text-warning fw-bold'} to="/manageinventory">Manage Item</Link>
                        </li>}

                        {user && <li className="nav-item">
                            <Link className={active ? 'nav-link text-white fw-bold' : 'custom-nav nav-link text-warning fw-bold'} to="/additem">Add Item</Link>
                        </li>}

                        {user && <li className="nav-item">
                            <Link className={active ? 'nav-link text-white fw-bold' : 'custom-nav nav-link text-warning fw-bold'} to="/myitems">My Items</Link>
                        </li>}

                        <li className="nav-item">
                            <Link className={active ? 'nav-link text-white fw-bold' : 'custom-nav nav-link text-warning fw-bold'} to="/blogs">Blogs</Link>
                        </li>

                        {!user && <li className="nav-item">
                            <Link className={active ? 'nav-link text-white fw-bold' : 'custom-nav nav-link text-warning fw-bold'} to="/register">Register</Link>
                        </li>}



                        {user ? <li className="nav-item">
                            <Link className={active ? 'nav-link text-white fw-bold' : 'custom-nav nav-link text-warning fw-bold'} onClick={logOut} to>Sign Out</Link>
                        </li> : <li className="nav-item">
                            <Link className={active ? 'nav-link text-white fw-bold' : 'custom-nav nav-link text-warning fw-bold'} to="/login">Login</Link>
                        </li>}




                    </ul>
                    <form className="d-flex justify-content-end">
                        <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;