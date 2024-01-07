import React from 'react';

function DeleteCompany(props) {
    const handleDelete = async () => {
        const url = `http://localhost:5273/Company/`;
      
        try {
          const response = await fetch(url + props.id, {
            method: "DELETE",
          });
      
          if (!response.ok) {
            console.error(`Server returned error: ${response.status} - ${response.statusText}`);
            const errorText = await response.text();
            console.error('Response text:', errorText);
            throw new Error('Network response was not ok');
          }
      
          console.log('Company deleted successfully');
      
        } catch (error) {
          console.error('Fetch error:', error);
        }
      
        props.setCount();
      };

  return (
    <div>
      <button onClick={handleDelete} className="btn btn-danger" style={{width:"100%"}}>
        Delete
      </button>
    </div>
  );
}

export default DeleteCompany;
