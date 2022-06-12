import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history=useHistory()
  const [pass,setPass]=useState("")
  const [email,setEmail]=useState("")

  const postData=()=>{
    if(email){
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            // M.toast({html:"Invalid Email",classes:"#e53935 red"})
            console.log("email patter missgin");
            return
        }

    }
    fetch('/signin',{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:email,
            password:pass
        })

    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.error){
            // M.toast({html: data.error,classes:"#e53935 red darken-1"});
            console.log(data.error);
            return
        }
        localStorage.setItem("jwt",JSON.stringify(data.token));
        localStorage.setItem("user",JSON.stringify(data.user));
        // dispatch({type:"USER",payload:data.user})
        // M.toast({html: data.message,classes:"#1e88e5 blue darken-1"})
        console.log(data.message)
        history.push('/');

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
                <p className="text-center fs-3 mx-3 mb-0">SignIn</p>
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

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0"></div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-dark"
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                  }}
                  onClick={()=>{postData()}}
                >
                  SignIn
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#reg"  className="link-danger">
                  <Link to='/signup'>Register</Link>
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

export default Login;
