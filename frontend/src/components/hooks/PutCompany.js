import React from 'react';

function PutCompany(props) {
  const handleEdit = async () => {
    const putObject = {
      Name: document.getElementById('CompanyName').value,
      PhoneNumber: document.getElementById('PhoneNumber').value,
      Email: document.getElementById('Email').value,
      CEO: document.getElementById('Ceo').value
    };

    const puturl = `http://localhost:5273/Company/${props.formData.companyId}`;

    try {
      const response = await fetch(puturl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(putObject),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    } catch (error) {
        console.error('Fetch error:', error);
    }
    props.setCount();

    
  };

  return (
    <>
      <button onClick={() => props.formSwitch(false)} className="btn btn-danger">
        X
      </button>
      <button onClick={handleEdit} className="btn btn-success">
        Done
      </button>
    </>
  );
}

export default PutCompany;
