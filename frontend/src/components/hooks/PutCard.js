import React from 'react'

function PutCard(props) {
    
    const handleEditClick = () => {

        const element = document.getElementById('form1');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        props.formSwitch(true);
        props.setFormData({
          Id:props.id,
          companyId:props.companyId
        });
        props.setCount();
      };

    
  return (
    <>
         <button to="asd" className='btn btn-warning' onClick={handleEditClick} style={{width:"100%"}} >Edit</button>
    </>
  )
}

export default PutCard