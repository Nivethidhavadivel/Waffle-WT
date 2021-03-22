import React, { Component } from "react";
import UserService from "../Services/UserService.js";
import history from "./history.js";
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            bio:'',
            mail:'',
            password:''
        }
        this.changeunameHandler=this.changeunameHandler.bind(this);
        this.changebioHandler=this.changebioHandler.bind(this);
        this.changemailHandler=this.changemailHandler.bind(this);
        this.changepasswordHandler=this.changepasswordHandler.bind(this);
        this.regUser=this.regUser.bind(this);
    }

    changeunameHandler=(event)=>{
        this.setState({username:event.target.value});
    }
    changebioHandler=(event)=>{
        this.setState({bio:event.target.value});
    }
    changemailHandler=(event)=>{
        this.setState({mail:event.target.value});
    }
    changepasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }
    regUser=(e)=>{
        e.preventDefault();
        let user={username:this.state.username,bio:this.state.bio,password:this.state.password,mail:this.state.mail};
        UserService.addUser(user).then(() => history.push('/'));

        console.log(JSON.stringify(user));
        /*this.setState({username:''});
        this.setState({bio:''});
        this.setState({mail:''});
        this.setState({password:''});*/
    }

    render(){
        return(
            <div className="Register">
                
                <center>
                <div style={{margin:'7%'}}></div>
                <h1>Create a new Account</h1>
                <div style={{width:'40%', align:'center'}}>
                    <form>
                        <div className="form-group">
                            <label style={{align:'left'}}>Username</label>
                            <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this.changeunameHandler} />
                        </div>

                        <div className="form-group">
                            <label>Bio</label>
                            <input type="text" className="form-control" placeholder="Bio" value={this.state.bio} onChange={this.changebioHandler}/>
                        </div>

                        <div className="form-group">
                            <label>Mail</label>
                            <input type="email" className="form-control" placeholder="Mail" value={this.state.mail} onChange={this.changemailHandler}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.changepasswordHandler}/>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.regUser}>Register</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/Login">log in?</a>
                        </p>
                    </form>
                </div>
                </center>
            </div>
        );
    }
}

export default Register;