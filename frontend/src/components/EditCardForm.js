import React from 'react';
import './style.css';
import PutJob from './hooks/PutJob';
import PutCompany from './hooks/PutCompany';

function EditCardForm(props) {


  return (
    <>
      <h1>Edit data</h1>
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
                
                <PutCompany formSwitch={props.formSwitch} formData={props.formData} setCount={props.setCount}/>
                
              </div>
              
              </fieldset>
       
      </form>
    </>
  );
}

export default EditCardForm;
