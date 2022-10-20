import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" style={{"marginLeft":15}}>TasteBuds Online Food Delivery Network</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">                    
                            <Link to={`/home`} style={{"marginRight":55, "width":280, "color":"yellow", "textDecoration":"none"}}>
                            Home
                            </Link>                    
                        </li>
                        <li className="nav-item">                    
                            <Link to={`/about`} style={{"marginRight":55, "width":250, "color":"yellow", "textDecoration":"none"}}>
                            About TasteBuds 

                            </Link>                                    
                        </li>
                        <li className="nav-item" style={{"marginRight":15}}>                
                            <Link to={`/contact`} style={{"color":"yellow", "textDecoration":"none"}}>
                                Contact Us
                            </Link>                                       
                        </li>
                    </ul>
                    <a className="btn btn-outline-primary" href="add-restaurant" style={{"width":220, "marginRight":10, "marginLeft":235}}>Add Restaurant <FaPlusCircle/></a>
                    <input className="form-control mr-sm-2" type="Find-Restaurants" style={{"width":200,"marginRight":10}} placeholder="Find Restaurants" aria-label="Find Restaurants"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;