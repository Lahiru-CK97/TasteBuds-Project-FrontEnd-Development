import axios from "axios";
import React, { Component } from "react"
import { Link } from 'react-router-dom';
import restaurantImage from '../images/restaurant.jpg'



class Showrestaurant extends Component {
    state = {
        img:""
    }

    render() {
        return (
            <React.Fragment>
                <div className="card" style={{width: "25rem" ,"margin":"auto"}}>
                    <img src={restaurantImage} style={{"width":"25rem", "height":350}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{"textAlign":"center"}}> <b>RestaurantName:</b>The Curry Leaf Café {this.props.restaurantName}</h5>
                        <div className="card-text">
                            <ul>
                                <div className="detail">
                                    <b>RestaurantAddress:</b> 571/17 Galle Road, 06, Colombo
                                </div>
                                <div className="detail">
                                    <b>Floor:</b> 6th Floor
                                </div>
                                <div className="detail">
                                    <b>OwnerName: </b> Lankey Bandaranyake
                                </div>
                                <div className="detail">
                                    <b>BusinessType: </b> Seascape Resort
                                </div>
                                <div className="detail">
                                    <b>LocationUrl: </b> Marine Drive Colombo
                                </div>
                                <div className="detail">
                                    <b>Contact: </b> 072-4879520
                                </div>
                                <div className="detail">
                                    <b>Ratings: </b> 4-5 Starts
                                </div>
                            </ul> 
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

export default Showrestaurant;