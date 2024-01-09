
import './App.css';
import CardContainer from './components/CardContainer';
import EditForm from './components/Form1';
import React,{useState} from 'react';

function App() {
  const [form,formSwitch]=useState(false);
  const [formData, setFormData] = useState({
    jobName: '',
    skill: '',
    salary: '',
    companyId: '', 
  });

  const [count,setCount]=useState(0)
    const handleCountState=()=>
    {
        setCount(count+1);
    }
  return (
    <>
      <CardContainer count={count} setCount={handleCountState} setFormData={setFormData} formSwitch={formSwitch}/>
      <div id='form1'>
        <EditForm setCount={handleCountState} formData={formData} setFormData={setFormData} form={form} formSwitch={formSwitch}/>
      </div>
    </>
  );
}

export default App;
