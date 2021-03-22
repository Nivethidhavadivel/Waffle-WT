import React, { Component } from "react";
import history from "./history.js";
import UserService from "../Services/UserService.js";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.changemailHandler=this.changemailHandler.bind(this);
        this.changepasswordHandler=this.changepasswordHandler.bind(this);
        this.logUser=this.logUser.bind(this);
    }

    changemailHandler=(event)=>{
        this.setState({mail:event.target.value});
    }
    changepasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }

    // logUser=(e)=>{
    //     e.preventDefault();
    //     UserService.addUser(this.state.username).then((res) => {
    //         if(res == this.state.password) alert `Logged In`;
    //         else alert `Check UserName / Password`
    //         history.push('/');
    //     });
    // }

    logUser=(e)=>{
        e.preventDefault();
        let user={mail:this.state.mail,password:this.state.password};
        UserService.checkPassword(this.state.mail).then(res=>{
            if(res.data===this.state.password)
              history.push('/');
        },
            err=>{
                console.log("cannot login");
                alert `Check email/password`;
            }
        );
    }

    render(){
        return(
            <div className="Login">
                <center>
                <div style={{margin:'7%'}}></div>
                <h1>Login</h1>
                <div style={{width:'40%', align:'center'}}>
                    <form>
                        <div className="form-group">
                            <label>Mail</label>
                            <input type="email" className="form-control" placeholder="Mail" value={this.state.mail} onChange={this.changemailHandler}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.changepasswordHandler}/>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.logUser}>Log In</button>

                        <br/>
                        <p className="forgot-password text-right">
                            Don't have an account? <a href="/Register">Register</a>
                        </p>
                    </form>
                </div>
                </center>
            </div>
        );
    }
}

export default Login;