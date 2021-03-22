import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

export default class Routes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Switch>
                <Route path="/" exact render = {
                    () => <Home/>
                }/>

                <Route path="/ChannelSpace/:channel" exact render = {
                    () => <Home/>
                }/>

                <Route path="/Login" exact render = {
                    () => <Login/>
                }/>

                <Route path="/Register" exact render = {
                    () => <Register/>
                }/>

                <Route path="/NewSpace" exact render = {
                    () => <NewSpace/>
                }/>

                
            </Switch>
        )
    }
}