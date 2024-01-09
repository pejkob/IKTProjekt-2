import React from 'react';
import './style.css';
import PutJob from './hooks/PutJob';
import PutCompany from './hooks/PutCompany';

function EditCardForm(props) {


  return (
    <>
      <h1 className='header'>Edit data</h1>
      <form className='form left' id='jobform' onSubmit={(event) => { event.preventDefault(); }}>
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
              <input  className="form-control" type="text" id="Name" defaultValue={props.formData.name} />
              <br/>
                <label className="form-text" htmlFor="Skills">
                  Job skills:
                </label>
                <input  className="form-control" type="text" id="Skills" defaultValue={props.formData.skill}/>  
               <br/>
                <label className="form-text" htmlFor="Salary">
                  Salary:
                </label>
                <input  className="form-control" type="text" id="Salary" defaultValue={props.formData.salary} />
                <br/>
                <label className="form-text" htmlFor="CompanyID">
                  CompanyID:
                </label>
                <input  className="form-control" type="text" id="CompanyId" defaultValue={props.formData.companyId} />
             
                <hr></hr>
                <PutJob formSwitch={props.formSwitch} formData={props.formData} setCount={props.setCount}/>
                
              </div>
             
              </fieldset>
      </form>

      <form className='form right' id='companyform' onSubmit={(event) => { event.preventDefault(); }}>
      <fieldset>
              <div className="form">
              <label className="form-text" htmlFor="CompanyID">
                Company Id:
              </label>
              <input  className="form-control" type="text" disabled id="CompanyID" defaultValue={props.formData.companyId}  />
              <br/>
              <label className="form-text" htmlFor="CompanyName" >
                Company Name:
              </label>
              <input  className="form-control" type="text" id="CompanyName" defaultValue={props.formData.companyName}/>
              <br/>
                <label className="form-text" htmlFor="Ceo">
                 CEO:
                </label>
                <input  className="form-control" type="text" id="Ceo" defaultValue={props.formData.ceo}/>  
               <br/>
                <label className="form-text" htmlFor="Email">
                  Email:
                </label>
                <input  className="form-control" type="text" id="Email" defaultValue={props.formData.email}/>
                <br/>
                <label className="form-text" htmlFor="PhoneNumber">
                  Phone Number:
                </label>
                <input  className="form-control" type="text" id="PhoneNumber" defaultValue={props.formData.phoneNumber} />
             
                <hr></hr>
                
                <PutCompany formSwitch={props.formSwitch} formData={props.formData} setCount={props.setCount}/>
                
              </div>
              
              </fieldset>
       
      </form>
    </>
  );
}

export default EditCardForm;
