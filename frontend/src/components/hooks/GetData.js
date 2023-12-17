import React, {useState,useEffect} from 'react'
import JobCard from '../JobCard';

function GetData() {


    const [count,setCount]=useState(0)
    const handleCountState=()=>
    {
        setCount(count+1);
    }

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
          
      }, [count]);
      
    const cards=adat.map(item=>
    {

      
        return(
        <>
         <JobCard key={item.id} {...item} updateState={handleCountState} count={count}/>
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