import React, { useEffect, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import pro from "../img/pro.png";
import simple from "../img/simple.png";
import Nav from "./Nav"
import Footer from "./Footer";



const Landing = () => {
  const history=useHistory()
  const [resumes,setResumes]=useState([])

  useEffect(()=>{
    

},[])

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"));
    if(user){
      history.push('/')
      fetch('/myresume',{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem('jwt')
        }
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        setResumes(data.resume)
    })
      
    }else{
      history.push('/login')
    }

  },[])

  return (
    <>
    <Nav/>
    <div className="">
      <div className="section row header">
        <div className="text-center text-white">
          <h1>Resume Builder</h1>
          <p>Create a Resume that stands out in the crowd</p>
          <br />
          <a className="btn btn-dark cbtn" href="#template">
            Templates
          </a>
        </div>
      </div>
      {/* tempalte section start */}
      <section id="template">
        <div className="section card-body">
          <div className="section-temp heading text-center">
            <h1>Templates</h1>
            <p>Choose any one according to your need</p>
          </div>
          <div className="mcard">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={pro} alt="Card image cap" />
              <div class="card-body">
                <a className="btn btn-dark" >
                <Link to='/experience'>Experience</Link>
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={simple} alt="Card image cap" />
              <div class="card-body">
                <a className="btn btn-dark" >
                <Link to='/fresher'>Fresher</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tempalte section end */}
      <h4 className="text-center heading my-heading"> Saved Resumes </h4>
      <div className="gallery">
      {
        resumes.map((item,index)=>{
          console.log(item)
                        return(


                         
                      
                            /* // <p key={item._id} className="item"> {item._id} </p> */
                            <h5 className="text-center saved-res"><Link to={item.resumetype=="A" ? "/resume/"+item._id : "/resumeb/"+item._id }>{"Resume "+(index+1)}</Link> </h5>
                        
                        )
                    })
      }
      </div>
      
    </div>
<Footer/>

    </>

  );
};

export default Landing;
