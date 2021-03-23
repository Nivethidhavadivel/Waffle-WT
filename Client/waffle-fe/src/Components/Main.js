import React, { Component } from "react";
import {Navbar, NavLink, NavItem, Button, Link, Nav} from 'react-bootstrap'
import history from "./history.js";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render(){
        return(
            <div className="Main">
                <Navbar bg="light" expand="lg">
                    <Nav className="mr-auto" navbar>
                        
                        <a href = "/">
                            <NavItem style={{color: "red"}}> WAFFLE </NavItem>{' '}
                        </a>
                        <NavItem> . </NavItem>

                        <NavItem>
                            <a href = "/AddPost">  ADD_POST </a>
                        </NavItem>

                        <NavItem> . </NavItem>
                        
                        <NavItem>
                            <a href = "/AllPosts">  ALL_POSTS </a>
                        </NavItem>

                    </Nav>
                    
                    <NavItem>
                        <NavLink href = "/Login">LOG IN</NavLink>
                    </NavItem>

                    {/* <Button variant="btn btn-success" onClick={() => history.push('/Login')}> Login </Button> */}
                </Navbar>
            </div>
        );
    }
}

export default Main;