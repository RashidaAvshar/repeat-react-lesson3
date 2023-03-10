import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { BASE_URL } from '../utilis/constans';

const columns = [
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'surname', headerName: 'Last name', width: 130 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'password', headerName: 'password', width: 130 },
];


const Form = () => {
  const [userData, setUserData] = useState([])
  useEffect(()=>{
    axios.get(`${BASE_URL}/get-data`).then((res)=>{
      setUserData(res.data.data)
      console.log(res.data)
    })
  },[])


  return (
    <div className='container'>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row.surname}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>     
      
    </div>
  )
}

export default Form;
