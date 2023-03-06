import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { BASE_URL } from '../utilis/constans';
import swal from 'sweetalert';



const Register = () => {
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        username: "",
        password: "",
        id: Date.now()
    })

    const onHandleClick = ()=>{
        axios.post(`${BASE_URL}/create-data`, userData).then((res)=>{
            if(res.status === 201){
        swal("Good job!", "You clicked the button!", "success");
            }

        })
        {
            document.querySelector("#name").value="";
            document.querySelector("#surname").value="";
            document.querySelector("#username").value="";
            document.querySelector("#password").value="";
          }
    }
    const onHandleChange = (e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    const {name, surname, username, password} = userData
  return (
    <div className='container'>
        <div className="register-box">
            <h1>REGISTER</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="name" label="name" variant="outlined" onChange={onHandleChange} />
      <TextField id="surname" label="surname" variant="outlined" onChange={onHandleChange} />
      <TextField id="username" label="username" variant="outlined" onChange={onHandleChange}  />
      <TextField id="password" label="password" variant="outlined" type={'password'} onChange={onHandleChange}  />
      
    </Box>
    <Stack spacing={2} direction="row">
      <Button variant="register" onClick={onHandleClick} >register</Button>
    </Stack>
        </div>
      
    </div>
  )
}

export default Register;
