import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

const ResumePreviewFrs = () => {
    const params=useParams()
    const [resumeinfo,setResumeInfo]=useState(null)
    const {id}=params



    useEffect(()=>{
        // console.log(id)
        fetch(`/resume/${id}`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                return alert("Resume not found")
            }
            setResumeInfo(data)
        })

    },[])

    return(
        <>
        {
            resumeinfo 
            ?
            <div className="container bg-dark text-white r-font">

            <div className="mresume">

           <h1 className="text-center fw-bold">
           {resumeinfo.createdby.name}
           </h1>
           <hr style={{
            height:"2px"
           }}/><h4 className="text-center">Personal Details:</h4>
           <hr style={{
            height:"2px"
           }}/>
           <h6> {resumeinfo.address} </h6>
           <h6> {resumeinfo.createdby.contact} </h6>
           <h6 > {resumeinfo.createdby.email} </h6>
           
           <hr style={{
            height:"2px"
           }}/>
           <h4 className="text-center">Objective:</h4>
           <hr style={{
            height:"2px"
           }}/>
         <p>    {resumeinfo.objective}</p>
           <hr style={{
            height:"2px"
           }}/>
           <h4 className="text-center">Education:</h4>
         

           <hr style={{
            height:"2px"
           }}/>
            <p> {resumeinfo.education} </p>
           <hr style={{
            height:"2px"
           }}/>
           <h4 className="text-center">Skills:</h4>
         

           <hr style={{
            height:"2px"
           }}/>
            <p> {resumeinfo.skills} </p>
           <hr style={{
            height:"2px"
           }}/>
           <h4 className="text-center">Internship:</h4>
         

           <hr style={{
            height:"2px"
           }}/>
            <p> {resumeinfo.experience} </p>
           <hr style={{
            height:"2px"
           }}/>

            </div>
       
        </div>
        :
        <h4 className="text-center">Loading</h4>
        }
        </>

        
    )
};

export default ResumePreviewFrs;
