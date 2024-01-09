import React from 'react'
import GetData from './hooks/GetData'

function CardContainer(props) {


  return (

    <GetData count={props.count}  form={props.form} formSwitch={props.formSwitch} setCount={props.setCount} setFormData={props.setFormData}/>
  )
}

export default CardContainer