import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home.js";
import ChannelSpace from "./ChannelSpace.js";
import Login from "./Login";
import Register from "./Register.js";
import NewSpace from "./NewSpace";
import UserProfile from "./UserProfile.js";
import NoMatch from "./NoMatch";
export default class Routes extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <Switch>
                <Route path="/" exact render = {
                    () => <Home/>
                }/>

                <Route path="/ChannelSpace/:channel" exact render = {
                    () => <ChannelSpace/>
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

                <Route path="/UserProfile" exact render = {
                    () => <UserProfile/>
                }/>

                <Route path="*" exact render = {
                    () => <NoMatch/>
                }/>
                
            </Switch>
        )
    }
}