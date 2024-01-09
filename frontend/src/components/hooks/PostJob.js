import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PostCard(props) {

    const isInteger = (value) => {
        return /^[0-9]+$/.test(value);
      };
  const checkInput=()=>
  {
      const name=document.getElementById("NewJobName").value;
      const skill=document.getElementById("NewSkill").value;
      const salary=document.getElementById("NewSalary").value;
      const companyId=document.getElementById("NewCompanyId").value;
      if(name!==""&&skill!==""&&companyId!==""){
        if(isInteger(salary))
          handleNew();
        else
            console.log("A salary mezonek integernek kell lennie");
      }
      else{
          console.log("error");
      }

  }
   

const handleNew = async () => {
    const url = "http://localhost:5273/Job";
   
    try {
        const response = await toast.promise( fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                jobName: document.getElementById("NewJobName").value,
                salary: document.getElementById("NewSalary").value,
                skill: document.getElementById("NewSkill").value,
                companyId: document.getElementById("NewCompanyId").value
            })
        }),{
            pending: 'Promise is pending',
            success: 'Promise resolved 👌',
            error: 'Promise rejected 🤯'
        }
        );
        if (response.ok) {
            const responseData = await response.json();
            console.log("Response from server:", responseData);
            toast.success("Új munka létrehozva!");
            props.setCount();
           
        } else {
            const errorData = await response.json(); 
            console.error("HTTP error! Status:", response.status);
            console.error("Error details:", errorData);
        }
       
    } catch (error) {
      toast.error(`Hiba az adatok lekérdezésekor ${error}`)

        console.error("Fetch error:", error);
    }
   
};

    
  return (
    <>
        <button onClick={checkInput} className="btn btn-success">Send</button>
        <ToastContainer/>
    </>
  )
}

export default PostCard