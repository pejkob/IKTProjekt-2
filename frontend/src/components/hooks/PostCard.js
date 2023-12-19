import React from 'react'

function PostCard(props) {

  const checkInput=()=>
  {
      const name=document.getElementById("NewJobName").value;
      const description=document.getElementById("NewSkill").value;
      const color=document.getElementById("NewSalary").value;
      const companyId=document.getElementById("NewCompanyId").value;
      if(name!==""&&description!==""&&color!==""&&companyId!==""){
          handleNew();
      }
      else{
          console.log("error");
      }
  }
   

const handleNew = async () => {
    const url = "http://localhost:5273/Job";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                JobName: document.getElementById("NewJobName").value,
                salary: document.getElementById("NewSalary").value,
                skill: document.getElementById("NewSkill").value,
                companyId: document.getElementById("NewCompanyId").value
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log("Response from server:", responseData);

        props.setCount();
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

    
  return (
    <>
        <button onClick={checkInput} className="btn btn-success">Send</button>
    </>
  )
}

export default PostCard