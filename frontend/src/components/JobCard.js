import React, { useState, useEffect } from 'react';

function JobCard(props) {
  const [companydata, setCompanyData] = useState([]);

  const url = `http://localhost:5273/Company/${props.id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCompanyData(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [props.id]);

  if (companydata.length === 0) {
    return null;
  }

  return (
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
            <p>Name: {companydata.name}</p>
            <p>CEO: {companydata.ceo}</p>
            <p>Email: {companydata.email}</p>
            <p>PhoneNumber: {companydata.phoneNumber}</p>
          </div>
        </div>
      </div>

      <div className='card-footer'>
        <button className='btn btn-warning'>Edit</button>
        <button className='btn btn-danger'>Delete</button>
      </div>
    </div>
  );
}

export default JobCard;
