import React from 'react'
import DeleteCompany from './DeleteCompany'

function GetCompanies(props) {
  return (
    <>
    <div className='card'>
      
          <div className='card-body cd'>
            
            <h3> {props.name}</h3>
            <p>Id: {props.id}</p>
            <p>CEO: {props.ceo}</p>
            <p>Email: {props.email}</p>
            <p>PhoneNumber: {props.phoneNumber}</p>
          </div>
          <DeleteCompany setCount={props.setCount} id={props.id}/>
    </div>
    </>
  )
}

export default GetCompanies