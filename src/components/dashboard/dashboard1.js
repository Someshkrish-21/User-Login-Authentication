import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import './dashboard1.css' 
import medicalimg from "./medical.jpg"

export default function Dashboard1(){
    return(
        
        <>
        <div className='backgroundcolor'>
        <div className='bg-success'>
            <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    
    </ul>
  </div>
</nav>
</div>
        
        <div className='col-lg-10 mr-auto ml-auto mt-5'>
            <form>
                <table className="table table-hover border border-dark">
                <thead>
                    <tr className="table-active border-5">
                        <td colSpan="2" className='text-center bg-success'><u><h4> HOSPITAL INFORMATION</h4></u></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hospital Name</td>
                        <td><input className="form-control"  type="text" name="hospitalname" placeholder="" id="hospitalname"/></td>
                    </tr>
                    <tr>
                        <td>Hospital Registration Number</td>
                        <td><input className="form-control" type="text" name="hospital_reg"  placeholder="" id="hospital-reg"/></td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td><input className="form-control" type="text" name="state"  placeholder="" id="state"/></td>
                    </tr>
                    <tr>
                        <td>District</td>
                        <td><input className="form-control" type="text" name="district"  placeholder="" id="district"/></td>
                    </tr>
                    <tr>
                        <td>Village</td>
                        <td><input className="form-control" type="text" name="village"  placeholder="" id="village"/></td>
                    </tr>
                    
                
                    <tr>
                        <td>Pin code</td>
                        <td><input className="form-control" type="text" name="pincode"  placeholder="" id="pincode"/></td>
                        
                    </tr>
                </tbody>
                </table>
                <button className="btn-outline-success mr-auto sub-bttn" type="submit" id="" >Submit</button>
                
            </form>
        </div>


                <div>
                    <div className="col-lg-10 mr-auto ml-auto mt-5">
                        <div className="table-responsive">
                            <form>
                                <table className="table table-hover border border-dark">
                                  <tbody>
                                        <tr className="table-active border-5">
                                            <td colSpan="2" className='text-center bg-success'><u><h4>PATIENT DETAILS</h4></u></td>
                                        </tr>
                                        <tr>
                                            <td>Hospital id</td>
                                            <td><input className="form-control"  type="text" name="hospital_id" placeholder="" id="hospital_id"/></td>
                                        </tr>
                                        <tr>
                                            <td>Patient name</td>
                                            <td><input className="form-control" type="text" name="patient_name"  placeholder="" id="patient_name"/></td>
                                        </tr>
                                        <tr>
                                        <td>Aadhar Number</td>
                                            <td><input className="form-control" type="text" name="aadhar_no"  placeholder="" id="aadhar_no"/></td>
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td><input className="form-control" type="text" name="gender"  placeholder="" id="gender"/></td>
                                        </tr>
                                        <tr>
                                            <td>Phonenumber</td>
                                            <td><input className="form-control" type="text" name="phone_no"  placeholder="" id="phone_no"/></td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </form>
                            <button className="btn-outline-success mr-auto sub-bttn" type="submit" id="" >Submit</button>
                        </div>
                    </div>
                </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-5'>
                    <img src={medicalimg} className="medimg"/></div>
                    
                    <div className="col-lg-5 mr-auto ml-auto mt-5">
                        <div className="table-responsive">
                            <form>
                                <table className="table table-hover border border-dark">
                                  <tbody>
                                        <tr className="table-active border-5">
                                            <td colSpan="2" className='text-center bg-success'><u><h4>MEDICAL DETAILS</h4></u></td>
                                        </tr>
                                        <tr>
                                            <td>Patient id</td>
                                            <td><input className="form-control"  type="text" name="patient_id" placeholder="" id="patient_id"/></td>
                                        </tr>
                                        <tr>
                                            <td>Disease</td>
                                            <td><input className="form-control" type="text" name="disease"  placeholder="" id="disease"/></td>
                                        </tr>
                                        <tr>
                                        <td>View date</td>
                                            <td><input className="form-control" type="text" name="view_doctor_date"  placeholder="" id="view_doctor_date"/></td>
                                        </tr>
                                        <tr>
                                            <td>Recovery date</td>
                                            <td><input className="form-control" type="text" name="recovery_date"  placeholder="" id="recovery date"/></td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </form>
                            <button className="btn-outline-success mr-auto sub-bttn" type="submit" id="" >Submit</button>
                        </div>
                    </div>
                    
                </div><br/><br/>
                </div>
                </div>

                </>    
            
    );
    
}










