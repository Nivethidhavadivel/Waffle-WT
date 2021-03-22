import React, { Component } from "react";
import {Navbar, NavLink, NavItem, Button, Link, Nav} from 'react-bootstrap'
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
                        <NavItem>
                        <h3 style={{color: "red"}}> WAFFLE </h3>{' '}
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