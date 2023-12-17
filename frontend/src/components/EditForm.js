import React,{useState} from 'react'

function EditForm(props) {

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

  const checkInput=()=>
  {
      const name=document.getElementById("NewJobName").value;
      const description=document.getElementById("NewSkill").value;
      const color=document.getElementById("NewSalary").value;
      const companyId=document.getElementById("NewCompanyId").value;
      if(name!==""&&description!==""&&color!==""&&companyId!==""){
          handleNew();
      }
      else{
          console.log("error");
      }
  }
   

const handleNew = async () => {
    const url = "http://localhost:5273/Job/";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                JobName: document.getElementById("NewJobName").value,
                skill: document.getElementById("NewSkill").value,
                salary: document.getElementById("NewSalary").value,
                companyId: document.getElementById("NewCompanyId").value
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log("Response from server:", responseData);

        props.setCount();
    } catch (error) {
        console.error("Fetch error:", error);
    }
};
  
     
      return (
        <div>
          {!props.form ? (
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              { }
              <h1>New data</h1>
              <fieldset>
              <div className="form">
                <label className="form-text" htmlFor="NewJobName">
                  Job name:
                </label>
                <input required className="form-control" type="text" id="NewJobName" />
                <br />
                <label className="form-text" htmlFor="NewSkill">
                Skill:
                </label>
                <input required className="form-control" type="text" id="NewSkill" />
                <br />
                <label className="form-text" htmlFor="NewSalary">
                Salary:
                </label>
                <input required className="form-control" type="text" id="NewSalary" />
                <label className="form-text" htmlFor="NewSalary">
                Company Id:
                </label>
                <input required className="form-control" type="text" id="NewCompanyId" />
              </div>
              <button onClick={()=>props.formSwitch(false)} className="btn btn-danger">X</button>
              <button onClick={checkInput} className="btn btn-success">Send</button>
              </fieldset>
            </form>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              { }
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
          )}
        </div>
      );
}

export default EditForm