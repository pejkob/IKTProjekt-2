import React, { useEffect } from 'react'
import './style.css'

function EditCardForm(props) {

    const handleEdit = () => {
      const putObject=[{
        Id:props.formData.Id,
        JobName:document.getElementById('Name').value,
        skill:document.getElementById('Skills').value,
        salary:document.getElementById('Salary').value,
        companyId:document.getElementById('CompanyId').value
      }]

      const checkInput=()=>{
        useEffect( function(){
          const url="http://localhost:5273/"
        }
        )
      }
     
        const puturl = "http://localhost:5273";
        fetch(puturl+"/Job", {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Id:props.formData.Id,
            JobName: document.getElementById('Name').value,
            skill: document.getElementById('Skills').value,
            salary: document.getElementById('Salary').value,
            companyId:document.getElementById('CompanyId').value
          })
        });
        props.setCount();
        

   
        fetch(puturl+"/Company", {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Id:props.formData.companyId,
            Name: document.getElementById('CompanyName').value,
            PhoneNumber: document.getElementById('PhoneNumber').value,
            Email: document.getElementById('Email').value,
            CEO:document.getElementById("Ceo").value,
          })
        });

        props.setCount(); 
        };

   
       

    

 
         

  return (
      <>
      <h1>Edit data</h1>
        <form id='jobform' onSubmit={(event) => {event.preventDefault();}}>

              <fieldset>
              <div className="form">
              <label className="form-text" htmlFor="JobId">
                Job Id:
              </label>
              <input  className="form-control" type="text" disabled id="JobId" value={props.formData.Id}  />
              <br/>
              <label className="form-text" htmlFor="Name">
                Job name:
              </label>
              <input  className="form-control" type="text" id="Name" />
              <br/>
                <label className="form-text" htmlFor="Skills">
                  Job skills:
                </label>
                <input  className="form-control" type="text" id="Skills"/>  
               <br/>
                <label className="form-text" htmlFor="Salary">
                  Salary:
                </label>
                <input  className="form-control" type="text" id="Salary" />
                <br/>
                <label className="form-text" htmlFor="CompanyID">
                  CompanyID:
                </label>
                <input  className="form-control" type="text" id="CompanyId" />
             
                <hr></hr>
                
                
              </div>
             
              </fieldset>
        </form>

        <form id='companyform' onSubmit={(event) => {event.preventDefault();}}>

              <fieldset>
              <div className="form">
              <label className="form-text" htmlFor="CompanyID">
                Company Id:
              </label>
              <input  className="form-control" type="text" disabled id="CompanyID" value={props.formData.companyId}  />
              <br/>
              <label className="form-text" htmlFor="CompanyName">
                Company name:
              </label>
              <input  className="form-control" type="text" id="CompanyName" />
              <br/>
                <label className="form-text" htmlFor="Ceo">
                 Ceo:
                </label>
                <input  className="form-control" type="text" id="Ceo"/>  
               <br/>
                <label className="form-text" htmlFor="Email">
                  Email:
                </label>
                <input  className="form-control" type="text" id="Email" />
                <br/>
                <label className="form-text" htmlFor="PhoneNumber">
                  PhoneNumber:
                </label>
                <input  className="form-control" type="text" id="PhoneNumber" />
             
                <hr></hr>
                <button onClick={()=>props.formSwitch(false)} className="btn btn-danger">X</button>
                <button  className="btn btn-success" onClick={handleEdit}>Done</button>
                
              </div>
              
              </fieldset>
        </form>
       
    </>
  )

} 
export default EditCardForm