
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
    companyId: '', // Add companyId to match the received data
  });

  const [count,setCount]=useState(0)
    const handleCountState=()=>
    {
        setCount(count+1);
    }
  return (
    <div >
      <CardContainer count={count} setCount={handleCountState} setFormData={setFormData} formSwitch={formSwitch}/>
      <div id='form1'>
        <EditForm setCount={handleCountState} formData={formData} setFormData={setFormData} form={form} formSwitch={formSwitch}/>
      </div>
    </div>
  );
}

export default App;