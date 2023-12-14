import React, { useState } from 'react';

function JobCard(props) {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    console.log('Edit button clicked');
    setShowModal(true);
  };

  const handleDeleteClick = () => {
    console.log('Delete button clicked');
    setShowModal(true);
  };

  const jobandcompany = props.companyadat.map(item => (
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
            <p>Name: {item.name}</p>
            <p>CEO: {item.ceo}</p>
            <p>Email: {item.email}</p>
            <p>PhoneNumber: {item.phoneNumber}</p>
          </div>
        </div>
      </div>

      <div className='card-footer'>
        <button className='btn btn-warning' data-toggle="modal" data-target="#exampleModal">
          Edit
        </button>

        <button className='btn btn-danger' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  ));

  return jobandcompany;
}

export default JobCard;
