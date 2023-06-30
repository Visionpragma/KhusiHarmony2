import React, { useState } from 'react';
import { TextField,makeStyles,Button } from '@mui/material';
import { Container } from 'react-bootstrap';
import { json } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  




function RegistrationPage() {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  


    

  const handleSubmit = (event) => {
    event.preventDefault();
    const tenant={name,mobileNo,address}
    console.log(tenant)
        //fetch("http://localhost:8080/tenant/add",{
          fetch("http://khusiharmonyspringbootapp-env.eba-bjghepdc.us-east-1.elasticbeanstalk.com/tenant/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(tenant)
    }).then((res)=> {console.log("New Tenant {name} Got added")
        toast.success("Wow Tenant got added successfully!")
   
    })
  }
    // Perform registration logic with the form data
    // For example, send an API request to register the user


  return (
    <div>
      <h1>Add Tenant</h1>
      <Container>
      <form className='classes.root' noValidate autoComplete='off'>
        <TextField id="outlined-basic" label="FlatNo" fullWidth/>
        <TextField id="outlined-basic" label="Name"   fullWidth value={name} onChange={(Event)=>setName(Event.target.value)}/>
        <TextField id="outlined-basic" label="MobileNo"  fullWidth value={mobileNo} onChange={(Event)=>setMobileNo(Event.target.value)}/>
        <TextField id="outlined-basic" label="Address" fullWidth value={address} onChange={(Event)=>setAddress(Event.target.value)}/>
        <Button variant='contained' color='secondary'onClick={handleSubmit}>Submit</Button>

      </form>
      </Container>
    </div>
  );
}

export default RegistrationPage;
