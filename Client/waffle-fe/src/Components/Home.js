import React, { Component } from "react";
import history from "./history.js";
import ChannelService from "../Services/ChannelService.js";
import {Card, CardDeck} from "react-bootstrap";
import { Link } from "react-router-dom";
class Home extends Component{
    constructor(props){
        super(props);
        this.forceUpdate();
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount(){
        this.forceUpdate();
        ChannelService.getChannels().then((res) => {
            this.setState({ channels: res.data});
            console.log(this.state.channels)
            setTimeout(()=>{
                this.setState({
                    isLoading : false
                });
            }, 500);
        });
    }
    render(){
        const displayData = this.state.isLoading === false ? (
            this.state.channels !==null ? (this.state.channels.map((k) => {
                     return(
                        <Link to={`/ChannelSpace/${k.name}`}>
                            <Card bg = "dark" border="primary" style={{ width: '18rem' }}>
                                <Card.Header>{k.name}</Card.Header>
                                <Card.Body>
                                <Card.Title>{k.desc}</Card.Title>
                                
                                {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text> */}
                                </Card.Body>
                            </Card><br/>
                        </Link>
                        
                     );
                 }
         )):console.log(this.state.projects.length) ) : (<div> Loading... </div>)

        return(
            <div className="Home">
                <h1>Channels to Choose From; </h1> <br/>
                <center>
                <div style={{width:'80%', align:'center'}}><CardDeck>
                    {displayData}
                </CardDeck></div>
                </center>
            </div>
        );
    }
}

export default Home;