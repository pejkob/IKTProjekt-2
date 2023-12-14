import React, {useState,useEffect} from 'react'
import JobCard from '../JobCard';

function GetData() {


   const [count,setCount]=useState(0)
    const handleCountState=()=>
    {
        setCount(count+1);
    }

    const [Jobadat,JobsetData]=useState([]);
    const [Companyadat,CompanysetData]=useState([]);
    const Joburl="http://localhost:5000/Job";

    useEffect(function (){
        fetch(Joburl).then(response => response.json())
        .then(data => JobsetData(data))
    }, [count])

    const Companyurl="http://localhost:5000/Company";

    useEffect(function (){
        fetch(Companyurl).then(response => response.json())
        .then(data => CompanysetData(data))
    }, [count])
   
    const cards=Jobadat.map(item=>
    {
        return(
        <>
            
         <JobCard id={item.id} {...item} updateState={handleCountState} companyadat={Companyadat}/>
         </>
        )});
        
    return(
        <>
            {cards}
        </>
    )
}

export default GetData