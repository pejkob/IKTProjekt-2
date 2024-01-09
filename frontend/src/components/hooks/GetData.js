import React, { useState, useEffect } from 'react';
import JobCard from '../JobCard';
import GetCompanies from './GetCompanies'; 
import { toast } from 'react-toastify';

function GetData(props) {
  const [jobData, setJobData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const jobUrl = "http://localhost:5273/Job";
  const companyUrl = "http://localhost:5273/Company";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url, setDataFunction) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDataFunction(data);
      } catch (error) {
        setError(error.message);
        toast.error(`Hiba az adatok lekérdezésekor! ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(jobUrl, setJobData);
    fetchData(companyUrl, setCompanyData);
  }, [props.count]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const jobCards = jobData.map(item => (
    <div className='card-deck' key={item.id}>
      <JobCard {...item} form={props.form} formSwitch={props.formSwitch} setCount={props.setCount} setFormData={props.setFormData} />
    </div>
  ));

  const companyCards = companyData.map(item => (
    <div className='companycard card-deck' key={item.id}>
      <GetCompanies companyAdat={companyData} {...item} form={props.form} formSwitch={props.formSwitch} setCount={props.setCount} setFormData={props.setFormData} />
    </div>
  ));

  return (
    <div className='container'>
      <div className='row cd'>
        <div className='col-md-6'>
          {jobCards}
        </div>
        <div className='col-md-6'>
          {companyCards}
        </div>
      </div>
    </div>
  );
}

export default GetData;
  