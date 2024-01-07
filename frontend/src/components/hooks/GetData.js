import React, {useState,useEffect} from 'react'
import JobCard from '../JobCard';
import GetCompanies from './GetCompanies'


function GetData(props) {

    const [adat,setData]=useState([]);
    const [companyAdat,setCompanyData]=useState([]);
    const Joburl="http://localhost:5273/Job";
    const Companyurl="http://localhost:5273/Company";

    useEffect(function () {
        fetch(Joburl)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => setData(data))
          .catch(error => console.error('Fetch error:', error));

          fetch(Companyurl)
          .then(response=>{
            if(!response.ok)
            {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => setCompanyData(data))
          .catch(error => console.error('Fetch error:', error));
          
      }, [props.count]);
      
    const cards=adat.map(item=>
    {

      
        return(
        <>
         <JobCard key={item.id} {...item} form={props.form} formSwitch={props.formSwitch} setCount={props.setCount} setFormData={props.setFormData}/>
         
         </>
        )
    }
    );

    const companyCards=companyAdat.map(item=>{
      return(
        <>
        <GetCompanies companyAdat={companyAdat}  key={item.id} {...item} form={props.form} formSwitch={props.formSwitch} setCount={props.setCount} setFormData={props.setFormData}/>
        </>
      )
    })


        
    return(
        <> 
        <div className='container'> 

          <div className='row'>
        
            <div className='col-md-8'>
            {cards}

            </div>

            <div className='col-md-4'>
              
            {companyCards}
            </div>

          </div>
        </div>

        </>
    )
}

export default GetData