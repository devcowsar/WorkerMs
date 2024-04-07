import { Box, Stack, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
useEffect

const Start = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/verify')
      .then(result => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate('/dashboard')
          } else {
            navigate('/worker_detail/' + result.data.id)
          }
        }
      }).catch(err => console.log(err))
  }, [])

  return (
    <Stack direction="row" justifyContent='center' alignItems="center" height="100vh" sx={{
      backgroundImage: 'url(https://cdn.iveybusinessjournal.com/wp-content/uploads/2006/03/iStock_000012204568_Large.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Box p={3} borderRadius={3} border={1} >
        <Typography variant="h2" textAlign="center" color="magenta ">Login As</Typography>
        <Stack direction="row" justifyContent="space-between" mt={5} mb={2}>
          <Button variant="contained" color="primary" onClick={() => { navigate('/worker_login') }}>
            Worker
          </Button>
          <Button variant="contained" color="success" onClick={() => { navigate('/adminlogin') }}>
            Admin
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Start;