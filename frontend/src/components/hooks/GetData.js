import React, {useState,useEffect} from 'react'
import JobCard from '../JobCard';

function GetData(props) {


  

    const [adat,setData]=useState([]);
    const url="http://localhost:5273/Job";

    useEffect(function () {
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => setData(data))
          .catch(error => console.error('Fetch error:', error));
          
      }, [props.count]);
      
    const cards=adat.map(item=>
    {

      
        return(
        <>
         <JobCard key={item.id} {...item} form={props.form} formSwitch={props.formSwitch} setFormData={props.setFormData}/>
         </>
        )
    }
    );
        
    return(
        <>
            {cards}
        </>
    )
}

export default GetData