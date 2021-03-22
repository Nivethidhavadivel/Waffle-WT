import React, { Component } from "react";

class NoMatch extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div className="NoMatch">
                <h1>Error 404</h1>
                <h2>Please check your URL request</h2>
            </div>
        );
    }
}

export default NoMatch;