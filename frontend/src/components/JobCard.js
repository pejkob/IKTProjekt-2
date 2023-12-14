import React ,{useState, useEffect} from 'react';

function JobCard(props) {

  

  return(
  
    <div key={props.id} className='card cd'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card-body cd-bd'>
            <h2>{props.jobName}</h2>
            <p>Skill needed: {props.skill}</p>
            <p>Salary: {props.salary}$</p>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='card-body cd-bd'>
            <h4>Company</h4>
            <p>Name: </p>
            <p>CEO: </p>
            <p>Email: </p>
            <p>PhoneNumber: </p>
          </div>
        </div>
      </div>

      <div className='card-footer'>
        <button className='btn btn-warning' >
          Edit
        </button>

        <button className='btn btn-danger'>
          Delete
        </button>
      </div>
    </div>

)
 
}

export default JobCard;
