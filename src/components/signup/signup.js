import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import './signup.css'
export default function Signup(){

    const handlesubmit = async(event) =>{
        event.preventDefault();
        var datastring = new FormData(event.target);

        const config = {
            Headers:{'enctype':'multipart/form-data'}
        }
        

        axios.post('http://localhost:3004/signup',datastring,config)
        .then(function(res){
            if(res.data.status === 'Signup_Error'){
                alert('Signup Error');
                window.location.reload();
            }
            else if(res.data.status === 'Signin_Error'){
                alert('Signin Error');
                window.location.reload();
            }
            else if(res.data.status === 'Signup_Successfully'){
                alert('Created Successfully');
                window.location.href="/";
            }
        })
        .catch(function(err){
            console.log(err);
        })

    } 
    return(
        <div className="container-fluid backgroundimg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">&nbsp;</div>
                    <div className="col-lg-7">
                        <div className="table-responsive">
                            <form onSubmit={handlesubmit}>
                                <table className="table-hover table2">
                                   <thead className="">
                                    <tr className="table-active">
                                        <td colSpan="5">Sign-up</td>
                                    </tr>
                                   </thead>
                                   <tbody>
                                    <tr>
                                        <td>User Name</td>
                                        <td><input className="form-control"  type="text" name="name" placeholder="Username" id="username"/></td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td><input className="form-control"  type="text" name="email" placeholder="Email" id="email"/></td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td><input className="form-control" type="password" name="password"  placeholder="Password"/></td>
                                    </tr>
                                    <tr>
                                        <td>phone Number</td>
                                        <td><input className="form-control" type="text" name="phone"  placeholder="Phonenumber"/></td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td><input className="form-control" type="text" name="address"  placeholder="address"/></td>
                                    </tr>
                                    <tr>
                                        {/* <td><button className="btn-outline-info" type="Submit" id="data_send" name="data_send">Submit</button> </td> */}
                                        <td>
                                            {/* <Link to='/'> */}
                                            <button className="btn-outline-info" type="submit" id="data_submit" name="data_submit">submit</button>
                                            {/* </Link> */}
                                            </td>
                                    </tr>
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