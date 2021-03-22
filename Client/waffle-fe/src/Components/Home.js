import React, { Component } from "react";
import history from "./history.js";
class Home extends Component{
    constructor(props){
        super(props);
        this.forceUpdate();
    }

    render(){
        return(
            <div className="Home">
                <h1>HOME</h1>
            </div>
        );
    }
}

export default Home;