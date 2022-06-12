import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";

const Register = () => {
  const history=useHistory();
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const [cpass,setCPass]=useState("")
  const [contact,setContact]=useState("")

  const postData=()=>{
    if(email){
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            // M.toast({html:"Invalid Email",classes:"#e53935 red"})
            console.log("email pattern missing")
            alert("email pattern missing")
            return
        }

    }
    if(pass){
        if(! /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pass)){
            // M.toast({html:"Password should be 8 to 15 characters, at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",classes:"#e53935 red"})
           console.log("password pattern missing")
          alert("password pattern missing")
            return
        }

    }
   
    fetch('/signup',{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            email:email,
            password:pass,
            contact:contact,

        })

    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.error){
          console.log(data.error)
            // M.toast({html: data.error,classes:"#e53935 red darken-1"});
            return
        }
        // M.toast({html: data.message,classes:"#1e88e5 blue darken-1"});
        console.log(data.message);
        history.push('/login');

    }).catch(err=>{
        console.log(err)
    })
}

  return (
    <div className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fs-3 mx-3 mb-0">Register</p>
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email} onChange={e=>{setEmail(e.target.value)}}
                />
               
              </div>
              {/* <!-- name input --> */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter full name"
                  value={name} onChange={e=>{setName(e.target.value)}}
                />
           
              </div>
              {/* <!-- name input --> */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter contact number"
                  value={contact} onChange={e=>{setContact(e.target.value)}}
                />
               
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={pass} onChange={e=>{setPass(e.target.value)}}
                />
               
              </div>

              {/* <!-- Confirm Password input --> */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Confirm password"
                  value={cpass} onChange={e=>{setCPass(e.target.value)}}
                />
                
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-dark"
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                  }}
                  onClick={()=>postData()}
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already a user sign in{" "}
                  <a href="#" className="link-danger">
                  <Link to='/login'>Login</Link>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
