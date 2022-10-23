import axios from "axios";
import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import restaurant from '../images/restaurant.jpg'


class Restaurant extends Component {
    state = {
        img:""
    }

    render() {
        return (
            <React.Fragment>
                <div className="card" style={{width: "25rem"}}>
                    <img src={restaurant} style={{"width":"25rem", "height":350}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{"textAlign":"center"}}> <b>Restaurant Name:</b> {this.props.restaurantName}</h5>
                        <div className="card-text">
                            <ul>
                                <div className="detail">
                                    <b>RestaurantAddress:</b> {this.props.restaurantAddress}
                                </div>
                                <div className="detail">
                                    <b>Floor:</b> {this.props.floor}
                                </div>
                                <div className="detail">
                                    <b>OwnerName:</b> {this.props.ownerName}
                                </div>
                                <div className="detail">
                                    <b>BusinessType:</b> {this.props.businessType}
                                </div>
                                <div className="detail">
                                    <b>LocationUrl:</b> {this.props.locationUrl}
                                </div>
                                <div className="detail">
                                    <b>Contact: </b> {this.props.contact}
                                </div>
                                <div className="detail">
                                    <b>Ratings: </b> {this.props.ratings}
                                </div>
                                 
                            </ul> 
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <button className="btn btn-outline-primary">
                                <Link to={`/show-restaurant/${this.props.id}`} style={{"textDecoration":"none"}}>
                                    View{" "}
                                </Link>
                                
                                <FaEye/>
                            </button>{" "}
                            <button className="btn btn-outline-danger" onClick={this.props.onDelete}>Delete <FaTrash/></button> 
                        </div>       
                    </div>
                </div>
            </React.Fragment>
        )  
    }

    async componentDidMount() {
        console.log('app mounted'); 
        
    }

}

export default Restaurant;