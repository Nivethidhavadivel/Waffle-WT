import React, { Component } from "react";
import ChannelService from "../Services/ChannelService";
import history from "./history.js";

class AddChannel extends Component{
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
        let channel={name:this.state.title,desc:this.state.subject};
        ChannelService.addChannel(channel).then(res=>{
            alert `Channel Created!`
            history.push('/');
        });
    }

    render() {
        return (
            <div className="AddPost">
                <center>
                <div style={{margin:'7%'}}></div>
                <h1>START A NEW CHANNEL!</h1>
                <div style={{width:'40%', align:'center'}}>
                    <form>
                        <div className="form-group">
                            <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="form-control" id="title" name="title" placeholder="Channel Name" required />
                        </div>
        
                        <div className="form-group">
                            <textarea className="form-control" value={this.state.subject} onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Description" maxlength="140" rows="7"></textarea>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.addPosts}>START</button>
                    </form>
                </div>
                </center>
            </div>
        )
      }
}

export default AddChannel;
