import { Box, Button, FormControl, FormLabel, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddWorker = () => {
  const [worker, setWorker] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category_id: "",
    image: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    
    formData.append('name', worker.name);
    formData.append('email', worker.email);
    formData.append('password', worker.password);
    formData.append('address', worker.address);
    formData.append('salary', worker.salary);
    formData.append('image', worker.image);
    formData.append('category_id', worker.category_id); 

    axios.post('http://localhost:3000/auth/add_worker', formData).then(result => {
      if (result.data.Status) {
        navigate('/dashboard/worker')
      } else {
        alert(result.data.Error);
      }
    }).catch(err => console.log(err))
  }
  return (
    <Stack direction="row" justifyContent="center" alignItems="center"  >
      <Box p={2} width={350} border="1px solid" borderRadius={4} >
        <Typography variant='h4'>Add worker</Typography>
        <Stack component="form" onSubmit={handleSubmit}>
          
           <Typography>Name:</Typography>
            <TextField fullWidth type='text' name='name' placeholder='Enter Name' onChange={(e)=>setWorker({...worker, name:e.target.value})} autoComplete='off'/>
           <Typography>Email:</Typography>
            <TextField fullWidth type='email' name='email' placeholder='Enter Email' autoComplete='off' onChange={(e)=>setWorker({...worker, email:e.target.value})} />
            <Typography>Password:</Typography>
            <TextField fullWidth type='password' name='password' placeholder='Enter Password' autoComplete='off' onChange={(e)=>setWorker({...worker, password:e.target.value})} />
           <Typography>Salary:</Typography>
            <TextField fullWidth type='text' name='salary' placeholder='Enter Salary' autoComplete='off' onChange={(e)=>setWorker({...worker, salary:e.target.value})}/>
            <Typography>Address:</Typography>
            <TextField fullWidth type='text' name='address' placeholder="1234 Main St"
              autoComplete="off" onChange={(e)=>setWorker({...worker, address:e.target.value})}/>
            
              <Typography>Category:</Typography>
              <Select 
              fullWidth
              name='category'
              defaultValue=""
                onChange={(e) => setWorker({ ...worker, category_id: e.target.value })}
              >
                {category.map((c) => {
                  return <MenuItem key={c.Id} value={c.Id}>{c.Name}</MenuItem>;
                })}
              </Select>
            
            <Typography>Image:</Typography>
            <TextField fullWidth type='file' name='image' autoComplete='off' onChange={(e)=>setWorker({...worker, image:e.target.files[0]})}/>
         

          <Button onClick={handleSubmit} variant='contained' mb={2}>add Worker</Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default AddWorker