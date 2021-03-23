import React, { Component } from "react";
import { Switch, Route, match, location, key, useRouteMatch } from "react-router-dom";

import Home from "./Home.js";
import ChannelSpace from "./ChannelSpace.js";
import Login from "./Login";
import Register from "./Register.js";
import NewSpace from "./NewSpace";
import UserProfile from "./UserProfile.js";
import NoMatch from "./NoMatch";
import AddPost from "./AddPost";
export default class Routes extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // mat = useRouteMatch();
        // this.setState(m, mat);
    }
    render(){
        return (
            <Switch>
                <Route exact path="/" exact render = {
                    () => <Home/>
                }/>

                <Route exact path="/ChannelSpace/:channel"
                    // location={this.props.location}
                    // key={this.props.location.key}

                    render = {
                        (location, match) => <ChannelSpace 
                            //key={this.props.location.key} match={this.state.m}
                        />
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

                <Route path="/AddPost" exact render = {
                    () => <AddPost/>
                }/>

                <Route path="*" exact render = {
                    () => <NoMatch/>
                }/>
                
            </Switch>
        )
    }
}