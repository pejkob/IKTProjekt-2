import React from 'react'
import './style.css'
import NewJobForm from './NewJobForm'
import NewCompanyForm from './NewCompanyForm'

function NewCardForm(props) {
  return (

    <>
   
     <h1 className='header'>New data</h1>
      
           <div className='left'> <NewJobForm setCount={props.setCount}/></div>
           <div className='right'>  <NewCompanyForm setCount={props.setCount}/> </div>
           
            <br></br>
      
  

    </>
  )
}

export default NewCardForm