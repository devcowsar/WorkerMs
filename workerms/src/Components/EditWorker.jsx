import { Box, Button, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditWorker = () => {
    const {id}=useParams();
    const [worker, setWorker] = useState({
        name: "",
        email: "",
        salary: "",
        address: "",
        category_id: "",
      });
      const [category,setCategory]=useState([])
      const navigate = useNavigate()
      useEffect(()=>{
        axios.get('http://localhost:3000/auth/category').then(result=>{
        if(result.data.Status){
          setCategory(result.data.Result);
        }else{
          alert(result.data.Error)
        }
        }).catch(err=>console.log(err))

        axios.get('http://localhost:3000/auth/worker/'+id).then(result=>{
 
        setWorker({
            ...worker,
            name:result.data.Result[0].name,
            email:result.data.Result[0].email,
            address:result.data.Result[0].address,
            salary:result.data.Result[0].salary,
            category_id:result.data.Result[0].category_id,
        })
        }).catch(err=>console.log(err))
      },[])

      const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_worker/'+id, worker)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/worker')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }

  return (
    <Stack direction="row" justifyContent="center" alignItems="center"  >
      <Box p={2} width={350} border="1px solid" borderRadius={4} >
        <Typography variant='h4'>Edit worker</Typography>
        <Stack component="form"  onSubmit={handleSubmit} >
          
           <Typography>Name:</Typography>
            <TextField fullWidth type='text' name='name' placeholder='Enter Name' 
            value={worker.name} onChange={(e)=>setWorker({...worker, name:e.target.value})} autoComplete='off'/>
           <Typography>Email:</Typography>
            <TextField fullWidth type='email' name='email' placeholder='Enter Email' value={worker.email} autoComplete='off' onChange={(e)=>setWorker({...worker, email:e.target.value})} />
           <Typography>Salary:</Typography>
            <TextField fullWidth type='text' name='salary' placeholder='Enter Salary' autoComplete='off' value={worker.salary} onChange={(e)=>setWorker({...worker, salary:e.target.value})}/>
            <Typography>Address:</Typography>
            <TextField fullWidth type='text' name='address' placeholder="1234 Main St"
              autoComplete="off" value={worker.address} onChange={(e)=>setWorker({...worker, address:e.target.value})}/>
            
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
            

          <Button  onClick={handleSubmit}  variant='contained' mb={2}>Edit Worker</Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default EditWorker