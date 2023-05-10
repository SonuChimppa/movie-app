import React from 'react'

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
function Electricion() {
    return (
        <div className='Nav'>


            <Navbar bg="white" variant="dark" className="navbar-form navbar-fixed-top">
                <Container className='header' style={{ backgroundColor: "sandybrown" }}>

                    <h1><i>ELECTRICION</i> </h1>
                    <Link style={{ color: "black", textDecorationLine: "none" }} to="/">Home</Link>
                    <Link style={{ color: "black", textDecorationLine: "none" }} to="/About">About</Link>
                    <Link style={{ color: "black", textDecorationLine: "none" }} to="/Prices">Prices</Link>
                    <Link style={{ color: "black", textDecorationLine: "none" }} to="/GalleryE">gallery</Link>
                    <Link style={{ color: "black", textDecorationLine: "none" }} to="BlogE">Blogs</Link>
                    <Link style={{ color: "black", textDecorationLine: "none" }} to="/Shop"> Shop</Link>
                    <Link style={{ color: "black", textDecorationLine: "none" }} to="/ContactE">Contact</Link>


                </Container>
            </Navbar>


        </div>

    )
}

export default Electricion