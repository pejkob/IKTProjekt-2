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
          name:props.jobName,
          skill:props.skill,
          salary:props.salary,
          companyId:props.companyId,
          companyName:props.companydata.name,
          ceo:props.companydata.ceo,
          email:props.companydata.email,
          phoneNumber:props.companydata.phoneNumber

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