import React from 'react'
import GetData from './hooks/GetData'

function CardContainer() {


  return (
    <div className='row'>
        <div className='col-md-9'>
            <GetData/>
        </div>
    </div>
  )
}

export default CardContainer