import React, { useState, useEffect } from 'react';
import DeleteCard from './hooks/DeleteCard';
import PutCard from './hooks/PutCard'
import "../components/style.css"


function JobCard(props) {
  const [companydata, setCompanyData] = useState([]);

 

  useEffect(() => {

    const fetchData = async () => {
      try {
        const url = `http://localhost:5273/Company/${props.companyId}`;
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
  }, [props.companyId]);

  if (companydata.length === 0) {
    return null;
  }

  return (
    <div key={props.id} className='card bg-success'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card-body text-white cd rounded'>
            <h4>Job</h4>
            <h5>{props.jobName}</h5>
            <p>Skill needed: {props.skill}</p>
            <p>Salary: {props.salary}$</p>
        </div>
        <PutCard id={props.id} setCount={props.setCount}  jobName={props.jobName} skill={props.skill} salary={props.salary} companyId={props.companyId} companydata={companydata} formSwitch={props.formSwitch} setFormData={props.setFormData}/>
        <DeleteCard setCount={props.setCount} id={props.id}/>
    </div>

        <div className='col-md-8'>
          <div className='card-body text-white cd rounded'>
            <h4>Company</h4>
            <p>Name: {companydata.name}</p>
            <p>CEO: {companydata.ceo}</p>
            <p>Email: {companydata.email}</p>
            <p>PhoneNumber:<br/> {companydata.phoneNumber}</p>
          </div>
          <PutCard id={props.id} setCount={props.setCount}  jobName={props.jobName} skill={props.skill} salary={props.salary} companyId={props.companyId} companydata={companydata} formSwitch={props.formSwitch} setFormData={props.setFormData}/>
        </div>

       

      </div>

     
    </div>
  );
}

export default JobCard;
