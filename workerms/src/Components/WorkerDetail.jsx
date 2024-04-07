import { Paper, Stack, Typography, CardMedia, Card, CardContent, Box, Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const WorkerDetail = () => {
    const [worker, setWorker] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/worker/detail/' + id).then(result => setWorker(result.data[0])).catch(err => console.log(err))
    }, []);

    const navigate = useNavigate();
    const handleLogout = () => {
        axios.get('http://localhost:3000/worker/logout').then(result => {
            if (result.data.Status) {
                localStorage.removeItem("valid")
                navigate('/')
            }
        })
    }

    return (
        <Box>
            <Stack p={2} direction='row' justifyContent='center' boxShadow='1'>
                <Typography variant='h4'>
                    Worker Management System
                </Typography>
            </Stack>
            <Stack direction='column' justifyContent='center' alignItems='center' mt={3} >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"

                        image={`http://localhost:3000/Images/` + worker.image}
                        alt="green iguana"
                    />
                </Card>
                <Stack direction='column' alignItems='center' mt={5}>
                    <Typography gutterBottom variant="h4" >
                        Name: {worker.name}
                    </Typography>
                    <Typography gutterBottom variant="h4" >
                        Email: {worker.email}
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Salary:$ {worker.salary}
                    </Typography>
                    <Box><Button variant='contained' sx={{ ml: 3 }} color='primary'>Edit</Button> <Button variant='contained' color='error' onClick={handleLogout}>Logout</Button></Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default WorkerDetail