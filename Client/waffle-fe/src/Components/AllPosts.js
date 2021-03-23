import React, { Component } from "react";
import PostService from "../Services/PostService";
import {Card, CardDeck} from "react-bootstrap";
import { Link } from "react-router-dom";
class AllPosts extends Component{
    constructor(props){
        super(props);
        this.forceUpdate();
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount(){
        this.forceUpdate();
        PostService.allPosts().then((res) => {
            this.setState({ posts: res.data});
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
            this.state.posts !==null ? (this.state.posts.map((k) => {
                     return(
                        <Link to={`/ChannelSpace/${k.name}`}>
                            <Card bg = "dark" border="primary" style={{ width: '18rem' }}>
                                <Card.Header>{k.title}</Card.Header>
                                <Card.Body>
                                <Card.Title>{k.username}</Card.Title>
                                
                                <Card.Text>
                                    {k.data}
                                </Card.Text>

                                </Card.Body>
                            </Card>
                            <br/><br/>
                        </Link>
                        
                     );
                 }
         )):console.log(this.state.projects.length) ) : (<div> Loading... </div>)

        return(
            <div className="Home">
                <br/>
                <h3>ALL UPDATES </h3> <br/>
                <center>
                <div style={{width:'80%', align:'center'}}><CardDeck>
                    {displayData}
                </CardDeck></div>
                </center>
            </div>
        );
    }
}

export default AllPosts;