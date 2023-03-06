import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const onHandleClick = ()=>{
    console.log("click")
}

const Register = () => {
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
      <TextField id="name" label="name" variant="outlined" />
      <TextField id="surname" label="surname" variant="outlined" />
      <TextField id="username" label="username" variant="outlined" />
      <TextField id="password" label="password" variant="outlined" type={'password'}  />
      
    </Box>
    <Stack spacing={2} direction="row">
      <Button variant="register" onClick={onHandleClick}>register</Button>
    </Stack>
        </div>
      
    </div>
  )
}

export default Register;
