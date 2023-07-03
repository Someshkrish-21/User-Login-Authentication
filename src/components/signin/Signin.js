import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './signin.css'
import axios from "axios";
export default function Signin(){

    const handlesubmit = async(event) => {
        event.preventDefault();

        var datastring = new FormData(event.target);
        var config = {headers:{'enctype':'multipart/form-data'}};
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if(username === '' || username === null){
            alert('enter username');
        }
        else if(password === '' || password === null){
            alert('enter password');
        }
        else{
            
            await axios.post('http://localhost:3004/Signin',datastring,config)
                  .then(function(res){
                    if(res.data.status === 'username_error'){
                        alert('Invalid username');
                        window.location.reload();
                    }
                    else if(res.data.status === 'Invalid_Login'){
                        alert('Invalid Login');
                        window.location.reload();
                    }
                    else if(res.data.status === 'Login_Successfully'){
                        alert('success');
                        window.location.href='/dashboard1';
                        }
                       
                       
                    
                  })
                  .catch(function(res){
                    alert(res);
                    window.location.reload();
                  })

        }

    }
    return(
        <div className="">
            <div className="container-fluid backgroundimg">
                <div className="row ">
                    <div className="col-lg-4 ">&nbsp;</div>
                    <div className="col-lg-5 col-md-7 col-sm-9 table-top">
                        <div className="table-responsive">
                            <form onSubmit={handlesubmit}>
                                <table className=" table-hover  table1">
                                   <thead className="table1">
                                    <tr className="table-active">
                                        <td colSpan="" className="headers">Sign-In</td>
                                    </tr>
                                   </thead>
                                   <tbody>
                                    <tr>
                                    
                                        <td><input className="form-control"  type="text" name="Username" placeholder="Username" id="username"/></td>
                                    </tr>
                                    <tr>
                                      
                                        <td><input className="form-control" type="password" name="Password"  placeholder="Password" id="password"/></td>
                                    </tr>
                                    <button className="bttn-1" type="submit" id="" >SIGN-IN</button>
                                    <Link to='/Signup'><p className="para1 text-center mt-3 ">Are you a new user Sign-in?</p></Link>
                                  
                                   </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>











    )
}