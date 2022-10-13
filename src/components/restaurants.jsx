import React, { Component } from "react"
import axios from "axios"
import Restaurant from "./restaurant"


class Restaurants extends Component {
    state = {
        allRestaurants: []
    }
    render() {
        return(
            <>
            <div className="container" style={{"marginTop":20}}>
                <div className="row">
                    {this.state.allRestaurants.map((restaurant) => (
                    <div key={restaurant.id} className="col" style={{"marginTop":30}}>
                        <Restaurant 
                            key={restaurant.id} 
                            restaurantName={restaurant.restaurantName} 
                            id={restaurant.id}
                            restaurantAddress={restaurant.restaurantAddress}
                            floor={restaurant.floor}
                            ownerName={restaurant.ownerName}
                            businessType={restaurant.businessType}
                            locationUrl={restaurant.locationUrl}
                            contact={restaurant.contact}
                            ratings={restaurant.ratings}
                            onDelete={() => this.deleteCat(restaurant.id)}
                        />
                    </div>))}
                </div>
            </div>
            </>
        )
    }

    async componentDidMount() {
        let {data} = await axios.get("http://localhost:5000/api/restaurants");
        console.log(data);
        let restaurants = data.map(restaurant => {return {
            id: restaurant._id,
            restaurantName: restaurant. restaurantName,
            restaurantAddress: restaurant. restaurantAddress,
            floor: restaurant. floor,
            ownerName: restaurant. ownerName,
            businessType: restaurant. businessType,
            locationUrl: restaurant. locationUrl,
            contact: restaurant. contact,
            ratings: restaurant. ratings,
            }})

        this.setState({allRestaurants: restaurants})
    }

    async deleteRestaurant(restaurantId) {
        let restaurant = await axios.delete(`http://localhost:5000/api/restaurants/${restaurantId}`)
        let updatedCatArray = this.state.allRestaurants.filter(restaurant => restaurant.id !== restaurantId);
        this.setState({allRestaurant: updatedRestaurantArray});

    }
}

export default Restaurants;