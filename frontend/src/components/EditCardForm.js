import React from 'react'
import './style.css'

function EditCardForm(props) {

    const handleEdit = () => {
        const puturl = "http://localhost:5273";
        fetch(puturl+"/Job", {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Id:props.formData.Id,
            JobName: document.getElementById('Name').value,
            skill: document.getElementById('Skills').value,
            salary: document.getElementById('Salary').value,
            companyId:props.formData.companyId
          })
        });

        
        fetch(puturl+"/Company", {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Id:props.formData.companyId,
            Name: document.getElementById('CompanyName').value,
            PhoneNumber: document.getElementById('PhoneNumber').value,
            Email: document.getElementById('Email').value,
            CEO:document.getElementById("Ceo").value
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
              <label className="form-text" htmlFor="name">
                Job Id:
              </label>
              <input required className="form-control" type="text" disabled id="JobId" value={props.formData.Id}  />
              <br/>
              <label className="form-text" htmlFor="name">
                Job name:
              </label>
              <input required className="form-control" type="text" id="Name" />
              <br/>
                <label className="form-text" htmlFor="name">
                  Job skills:
                </label>
                <input required className="form-control" type="text" id="Skills"/>  
               <br/>
                <label className="form-text" htmlFor="name">
                  Salary:
                </label>
                <input required className="form-control" type="text" id="Salary" />
             
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
              <input required className="form-control" type="text" disabled id="CompanyID" value={props.formData.companyId}  />
              <br/>
              <label className="form-text" htmlFor="CompanyName">
                Company name:
              </label>
              <input required className="form-control" type="text" id="CompanyName" />
              <br/>
                <label className="form-text" htmlFor="Ceo">
                 Ceo:
                </label>
                <input required className="form-control" type="text" id="Ceo"/>  
               <br/>
                <label className="form-text" htmlFor="Email">
                  Email:
                </label>
                <input required className="form-control" type="text" id="Email" />
                <br/>
                <label className="form-text" htmlFor="PhoneNumber">
                  PhoneNumber:
                </label>
                <input required className="form-control" type="text" id="PhoneNumber" />
             
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