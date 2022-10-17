import axios from 'axios';
import React, {useState} from "react";
import "../css/app.css"

const App = () => {
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantAddress, setRestaurantAddress] = useState("");
    const [floor, setFloor] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [locationUrl, setLocationUrl] = useState("");
    const [contact, setContact] = useState("");
    const [ratings, setRatings] = useState("");

    const data = {
        restaurantName: restaurantName,
        restaurantAddress: restaurantAddress,
        floor: floor,
        ownerName: ownerName,
        businessType: businessType,
        locationUrl: locationUrl,
        contact: contact,
        ratings: ratings,
    };
    
    const AddRestaurant  = () => {
        axios
        .post('http://localhost:5000/api/restaurants', data)
        .then(res => {
          this.setState({
            restaurantName: '',
            restaurantAddress: '',
            floor: '',
            ownerName: '',
            businessType: '',
            locationUrl: '',
            contact: '',
            ratings: '',
          })
        })
        .catch(err => {
          console.log("Error in Create restaurant !");
        })
    }

    return (
      <div style={{"width":1000, "margin":"auto", "textAlign":"center", "justifyContent":"center"}}>
        <form>
            <div className="container">
                <h2 className='center'>Grow Your Business With TasteBuds Food Delivery Network</h2>
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        {/* <label className=".float-left">First name</label>  */}
                        <input type="text" className= "form-control" value={restaurantName} placeholder="Restaurant Name" onChange={(e) => {
                                setRestaurantName(e.target.value);
                            }} required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={restaurantAddress} placeholder="Restaurant Address" onChange={(e) => {
                                setRestaurantAddress(e.target.value);
                            }} required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={floor} placeholder="Floor" onChange={(e) => {
                                setFloor(e.target.value);
                            }} required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={ownerName} placeholder="Owner Name" onChange={(e) => {
                                setOwnerName(e.target.value);
                            }} required/>
                        </div> 
                    </div>
                </div><div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={businessType} placeholder="Business Type" onChange={(e) => {
                                setBusinessType(e.target.value);
                            }} required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={locationUrl} placeholder="Location URL" onChange={(e) => {
                                setLocationUrl(e.target.value);
                            }} />
                        </div> 
                    </div>
                </div><div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={contact} placeholder="Contact" onChange={(e) => {
                                setContact(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="number" className= "form-control" value={ratings} placeholder="Ratings" onChange={(e) => {
                                setRatings(e.target.value);
                            }} required/>
                        </div> 
                    </div>
                </div>
                <div className="form-group center">
                    <button className="btn btn-success" style={{"width":120}} onClick={AddRestaurant}>Save</button>
                </div>
            </div>
        </form> 
      </div>
    );
  };
    
  export default App;