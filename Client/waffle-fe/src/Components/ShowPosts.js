import React, { Component } from "react";
import PostService from "../Services/PostService";

class ShowPost extends Component{
    constructor(props) {
        super(props);
        this.state = {
          posts:[]
        };
      }
      componentDidMount(){
          PostService.getPosts().then(res=>{
            this.setState({posts:res.data})
          });
      }
      render() {
        return (
            <div className="list-group"> 
              {
                this.state.posts.map(function(post,index) {
                   return <a href="#" key={index} className="list-group-item active">
                            <h4 className="list-group-item-heading">{post.title}</h4>
                            <p className="list-group-item-text">{post.subject}</p>
                          </a>
                })
              }
            </div>
        )
}
}
export default ShowPost;