import React, { Component, useState, useEffect } from "react";
import PostService from "../Services/PostService";
import {match, locatoin, params} from "react-router-dom";
class ChannelSpace extends Component{
    constructor(props){
        super(props);
        this.forceUpdate();
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount(){
        this.forceUpdate();
        const { match: { params } } = this.props;
        //let { channel } = useParams();
        console.log(params.channel);
        // PostService.getPosts().then((res) => {
        //     this.setState({ posts: res.data});
        //     console.log(this.state.channels)
        //     setTimeout(()=>{
        //         this.setState({
        //             isLoading : false
        //         });
        //     }, 500);
        // });
    }


    render(){
        return (
            <div className="ChannelSpace">
                <h1>CHANNEL SPACE</h1>
            </div>
        );
    }
}

// function ChannelSpace(){
//     const[isLoading, setLoading] = useState();
//     const[posts, setPosts] = useState();

//     setUsername({ userName: e.target.value });
//     useEffect(() => {
//         PostService.getPosts().then((res) => {
//         this.setState({ posts: res.data});
//         console.log(this.state.channels)
//         setInterval(() => {
//             setLoading(fasle);
//             setUsername('janedoe');
//             setFirstname('Jane');
//             setLastname('Doe');
//         }, 500);
//     });
// }

export default ChannelSpace;