import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [values, setValues] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	axios.defaults.withCredentials = true;
	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('http://localhost:3000/auth/adminlogin', values).then(result => {
			if (result.data.loginStatus) { 
				localStorage.setItem("valid", true)
				navigate('/dashboard')
			 }
			else {
				setError(result.data.Error)
			}
		}).catch(err => console.log(err))

	};

	return (
		<Grid container component="main" sx={{ height: '100vh' }}>
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: 'url(https://cdn.iveybusinessjournal.com/wp-content/uploads/2006/03/iStock_000012204568_Large.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundColor: (t) =>
						t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography color="red">{error && error}</Typography>
					<Typography component="h1" variant="h5">
						Log in
					</Typography>
					<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							onChange={(e) => setValues({ ...values, email: e.target.value })}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={(e) => setValues({ ...values, password: e.target.value })}
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Login
						</Button>
						<FormControlLabel
							control={<Checkbox value="agree" color="primary" />}
							label="Agree with terms and condition"
						/>
					</Box>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Login;