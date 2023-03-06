import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import FakeAPI from 'fake-api';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'title',
    headerName: 'Product title',
    width: 350,
  },
  {
    field: 'description',
    headerName: 'Product Description',
    width: 470,
  },
  {
    field: 'price',
    headerName: 'Product price',
    type: 'number',
    width: 100,
  },
  {
    field: 'category',
    headerName: 'Product category',
    width: 150,
  },
];


const About = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      setData(res.data)
    })
  })
  return (
    <div className='container'>
       <Box sx={{ height: 400, width: '100%', marginTop: 10}}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>      
    </div>
  )
}

export default About;
