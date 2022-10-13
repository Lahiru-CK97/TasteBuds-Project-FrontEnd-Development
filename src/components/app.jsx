import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./navbar";
import About from "./about";
import Restaurant from "./restaurants";
import Contact from "./contact";
import AddRestaurant from "./addRestaurant";
import Showrestaurant from "./showRestaurant";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar/>
                    <div className="content" style={{"marginTop":70}}>
                        <Switch>
                            <Route
                                exact path="/" >
                            <Restaurant/>
                            </Route> 
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/home">
                                <Restaurant/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route> 
                            <Route path="/add-restaurant">
                                <AddRestaurant/>
                            </Route> 
                            <Route path="/show-restaurant/:restaurantId">
                                <Showrestaurant/>
                            </Route> 
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;