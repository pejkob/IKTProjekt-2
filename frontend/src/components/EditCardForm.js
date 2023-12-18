import React from 'react'

function EditCardForm(props) {

    const handleEdit = () => {
        const puturl = "http://localhost:5273/Job";
        fetch(puturl, {
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
        props.setCount();
      };
         

  return (
    <>
        <form onSubmit={(event) => {event.preventDefault();}}>

         <h1>Edit data</h1>
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
              <button onClick={()=>props.formSwitch(false)} className="btn btn-danger">X</button>
              <button  className="btn btn-success" onClick={handleEdit}>Done</button>
              </fieldset>
            </form>

    </>
  )
}

export default EditCardForm