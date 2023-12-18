import React, { useState, useEffect } from 'react';
import DeleteCard from './hooks/DeleteCard';
import PutCard from './hooks/PutCard'

function JobCard(props) {
  const [companydata, setCompanyData] = useState([]);

  const url = `http://localhost:5273/Company/${props.companyId}`;

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
            <p>Name: {companydata.ceo}</p>
            <p>CEO: {companydata.name}</p>
            <p>Email: {companydata.email}</p>
            <p>PhoneNumber: {companydata.phoneNumber}</p>
          </div>
        </div>
      </div>

      <div className='card-footer'>
       
        <PutCard id={props.id} setCount={props.setCount}  jobName={props.jobName} skill={props.skill} salary={props.salary} companyId={props.companyId} companydata={companydata} formSwitch={props.formSwitch} setFormData={props.setFormData}/>
        <DeleteCard setCount={props.setCount} id={props.id}/>
      </div>
    </div>
  );
}

export default JobCard;