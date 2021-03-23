import React, { Component } from "react";
import PostService from "../Services/PostService";
import history from "./history.js";
class AddPost extends Component{
    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubjecChange = this.handleSubjectChange.bind(this);
        this.state = {
          title:'',
          subject:''
        };
        this.addPosts=this.addPosts.bind(this);
      }

    handleTitleChange=(event)=>{
        this.setState({title:event.target.value})
    }
    handleSubjectChange=(event)=>{
        this.setState({subject:event.target.value})
    }
    addPosts=(e)=>{
        e.preventDefault();
        let post={title:this.state.title,subject:this.state.subject};
        PostService.addPost(post).then(res=>{
            alert `Posted!`
            history.push('/');
        });
    }

    render() {
        return (
          <div className="col-md-5">
              
            <div className="form-area">  
                <form role="form">
                    <br styles="clear:both" />
                    <div className="form-group">
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="form-control" id="title" name="title" placeholder="Title" required />
                    </div>
    
                    <div className="form-group">
                        <textarea className="form-control" value={this.state.subject} onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
                    </div>
                        
                    <button type="button" id="submit" name="submit" className="btn btn-primary pull-right" onClick={this.addPosts}>Add Post</button>
                </form>
            </div>
          
          </div>
        )
      }
}

export default AddPost;