import React from "react";
import "./App.css";

import Navbar from "./common/Navbar/Navbar";
import {
    BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/About/About";
import Gallery from "./components/gallery/Gallery";
import Destinations from "./components/Destinations/Home";
import SinglePages from "./components/SinglePage.jsx/SinglePages";
import Footer from "./common/Footer/Footer";

function App(){
    return(
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} ></Route>
                <Route path='/about' exact component={About} ></Route>
                <Route path='/gallery' exact component={Gallery} ></Route>
                <Route path='/destination' exact component={Destinations} ></Route>
                <Route path='/singlepage/:id' exact component={SinglePages} ></Route>
                <Route path='/footer' exact component={Footer} ></Route>
            </Switch>
        </Router>
        </>

    )
}

export default App