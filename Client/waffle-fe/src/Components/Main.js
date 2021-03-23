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
                            <h2 style={{color: "red"}}> WAFFLE </h2>{' '}
                        </a>
                        
                        <NavItem>
                            <NavLink href = "/AddPost"> <h3> ADD_POST </h3></NavLink>
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