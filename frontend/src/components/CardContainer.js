import React from 'react'
import GetData from './hooks/GetData'

function CardContainer(props) {


  return (
    <div className='row'>
        <div className='col-md-9'>
            <GetData count={props.count}  form={props.form} formSwitch={props.formSwitch} setCount={props.setCount} setFormData={props.setFormData}/>
        </div>
    </div>
  )
}

export default CardContainer