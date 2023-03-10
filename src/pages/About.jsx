import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import FakeAPI from 'fake-api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
  const [data, setData] = useState([]);
  const [renderPage, setRengerPage] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      setData(res.data)
    })
  },[renderPage]);
  const deleteItem = (id)=>{
    axios.delete(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      setRengerPage(!res.renderPage)
    })
  }
  const getProductItem = (id)=>{
    navigate(`/details/${id}`)
  };
  return (
    <div className='container'>
       <Box sx={{ height: 700, width: '100%', marginTop: 10}}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        autoHeight
        onCellClick={(row)=>deleteItem(row.id)}
        onCellDoubleClick={(row)=>getProductItem(row.id)}
      />
    </Box>      
    </div>
  )
}

export default About;
