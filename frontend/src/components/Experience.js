import react, { useState } from "react";   
import { Link, useHistory } from "react-router-dom";

const Experience=()=>{

    const history=useHistory()
    
    const [objective,setObjective]=useState("")
    const [name,setName]=useState("")
    const [education,setEducation]=useState("")
    const [projects,setProject]=useState("")
    const [skills,setSkills]=useState("")
    const [location,setLocation]=useState("")
    const [experience,setExperience]=useState("")
    const [website,setWebsite]=useState("")
    const [resumetype,setResumetype]=useState("B")
    const [contact,setContact]=useState("")
    

    const postDetails=()=>{
      fetch('/createresume',{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            'Authorization':'Bearer '+ localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          objective:objective,
          education:education,
          projects:projects,
          skills:skills,
          location:location,
          experience:experience,
          resumetype:resumetype,
          website:website
        })
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        history.push('/')
        

    }).catch(err=>{
        console.log(err)
    })
    }
    



   return(

    <div className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fs-3 mx-3 mb-0">Experience Resume</p>
            </div>
            <h6 className="text-center"> Personal Details</h6>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Full name"
                value={name} onChange={e=>{setName(e.target.value)}}

              />
              
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Address"
                value={location} onChange={e=>{setLocation(e.target.value)}}
              />
            </div>
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Phone No"
                value={contact} onChange={e=>{setContact(e.target.value)}}
              />
            </div>
            <div className="form-outline mb-3">
              <input
                type="url"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Portfolio Url / Github link"
                value={website} onChange={e=>{setWebsite(e.target.value)}}

              />
            </div>
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Career Objective"
                value={objective} onChange={e=>{setObjective(e.target.value)}}
              />
            </div>
        <h6 className="text-center"> Education</h6>
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Education 1"
                value={education} onChange={e=>setEducation(e.target.value)}
              />
            </div>
            {/* <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Education 2"
                value={education.edu2} onChange={e=>setEducation({...education,edu2:e.target.value})}
              />
            </div>
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Education 3"
                value={education.edu3} onChange={e=>setEducation({...education,edu3:e.target.value})}
              />
            </div> */}
        <h6 className="text-center"> Projects</h6>
        <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Project 1"
                value={projects} onChange={e=>setProject(e.target.value)}
              />
            </div>
        {/* <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Project 2"
                value={projects.pro2} onChange={e=>setProject({...projects,pro2:e.target.value})}
              />
            </div>
        <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Project 3"
                value={projects.pro3} onChange={e=>setProject({...projects,pro3:e.target.value})}
              />
            </div> */}
            <h6 className="text-center"> Skills</h6>
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Write skill - and rating on 1-5 scale"
                value={skills} onChange={e=>setSkills(e.target.value)}
              />
            </div>
            {/* <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Write skill - and rating on 1-5 scale"
                value={skills.ski2} onChange={e=>setSkills({...skills,ski2:e.target.value})}
              />
            </div>
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Write skill - and rating on 1-5 scale"
                value={skills.ski3} onChange={e=>setSkills({...skills,ski3:e.target.value})}
              />
            </div> */}
            {/* <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Write skill - and rating on 1-5 scale"
                value={skills.ski4} onChange={e=>setSkills({...skills,ski4:e.target.value})}
              />
            </div> */}
            <h6 className="text-center"> Internship</h6>
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Internship"
                value={experience} onChange={e=>setExperience(e.target.value)}
              />
            </div>
            {/* <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Internship"
                value={experience.exp2} onChange={e=>setExperience({...experience,exp2:e.target.value})}
              />
            </div>
            <div className="form-outline mb-3">
              <input
                type="text"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Internship"
                value={experience.exp3} onChange={e=>setExperience({...experience,exp3:e.target.value})}
              />
            </div> */}


            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="button"
                className="btn btn-dark"
                style={{
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem",
                }}
                onClick={()=>{postDetails()}}
              >
                {/* <Link to='/previewfrs'>Save and Preview</Link> */}
                Create
              </button>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

   )

    

}
export default Experience;