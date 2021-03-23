import React, { Component } from "react";
import PostService from "../Services/PostService";
import history from "./history.js";
class AddPost extends Component{
    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.state = {
            uname:'',
            channel:'',
          title:'',
          subject:''
        };
        this.addPosts=this.addPosts.bind(this);
        this.handleUnameChange=this.handleUnameChange.bind(this);
        this.handleChannelChange=this.handleChannelChange.bind(this);
      }

    handleTitleChange=(event)=>{
        this.setState({title:event.target.value})
    }
    handleSubjectChange=(event)=>{
        this.setState({subject:event.target.value})
    }
    handleUnameChange=(event)=>{
        this.setState({uname:event.target.value})
    }
    handleChannelChange=(event)=>{
        this.setState({channel:event.target.value})
    }
    addPosts=(e)=>{
        e.preventDefault();
        let post={title:this.state.title,data:this.state.subject,username:this.state.uname,channel:this.state.channel};
        PostService.addPost(post).then(res=>{
            alert `Posted!`
            history.push('/');
            console.log(post);
        });
    }

    render() {
        return (
            <div className="AddPost">
                <center>
                <div style={{margin:'7%'}}></div>
                <h1>Send a Post Update</h1>
                <div style={{width:'40%', align:'center'}}>
                    <form>
                    <div className="form-group">
                            <input type="text" value={this.state.username} onChange={this.handleUnameChange} className="form-control" id="uname" name="uname" placeholder="Username" required />
                        </div>
                  
                        <div className="form-group">
                            <input type="text" value={this.state.channel} onChange={this.handleChannelChange} className="form-control" id="channel" name="channel" placeholder="Channel" required />
                        </div>
                       
                        <div className="form-group">
                            <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="form-control" id="title" name="title" placeholder="Title" required />
                        </div>
        
                        <div className="form-group">
                            <textarea className="form-control" value={this.state.subject} onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.addPosts}>SEND IT</button>
                    </form>
                </div>
                </center>
            </div>
        )
      }
}

export default AddPost;

