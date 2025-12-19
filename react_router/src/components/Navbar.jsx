import React from 'react';
import { Link, NavLink , useNavigate} from 'react-router-dom';
// useNavigate is a hook that allows you to programmatically navigate to different routes and is used example cases like redirecting after a form submission or when a certain condition is met or when a back button is clicked.

export default function Navbar(){

    const navigate = useNavigate();

    return (
        <nav>
            <img src="src/assets/brand_logo.png" alt="logo" />
            {/* the only difference between link and navlink is that navlinks when visited renames its class to active allows dynamic styling of the components */}
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/explore'><li>Explore</li></NavLink>
                <NavLink to='/products'><li>Products</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
                <NavLink to='/jobs'><li>Jobs</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
            </ul>
            <button onClick={()=>navigate('/about')}>Get Started</button>
        </nav>
    )
}