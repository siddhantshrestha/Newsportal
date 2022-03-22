import React,{useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {Box,Paper,Typography,TextField,Button,Grid} from '@mui/material'
import axios from 'axios';
// import LoginContext from '../context/LoginContext';

const Login = () => {


    const { register, handleSubmit,  formState: { errors } } = useForm(
        {
            defaultValues: {
                username: '',
                password: ''
        }
    })
    const [errorMsg,setErrorMsg] = useState('')

    let navigate = useNavigate();

  const onSubmit = ((data)=>{

      
    axios.post('http://localhost:5000/user/login',{
        username:data.username,
        password:data.password,
    }).then((res)=>{
            if(res.data.loggedIn){
                localStorage.setItem('loggedIn', true)
                localStorage.setItem('username', res.data.username);
                navigate('/')
                
            }
            else{
                setErrorMsg(res.data.message)
            }
         
         

           
            
        }).catch((err)=>{
            console.log(err)

        });
  })

  
      
  

  return <Box  sx={{margin:'auto',marginTop:4,display:'flex',justifyContent:'center'}}>
  
  <Paper elevation={2}sx={{width:'500px', height:'350px',padding:3}} >
      <Typography align='center' variant='h5' gutterBottom>Login</Typography>
     <Typography mb={3}  variant='body2' color='red' gutterBottom >* Only for admin</Typography>


     <form onSubmit={handleSubmit(onSubmit)}>
     <Grid container spacing={3} mb={2}>
     <p>{errorMsg}</p>
         <Grid item xs={12}>
     <TextField label='username' name='username' {...register("username", { required: true, maxLength: 20 }) } fullWidth/>
     {errors.username?.type === 'required' && "Username is required"}
         </Grid>
         <Grid item xs={12}>
         <TextField type='password' name='password' label='password' {...register("password", { required: true, }) } fullWidth/>

         </Grid>
         <Grid item sx={{margin:'auto'}}>
        <Button variant='contained' sx={{width:'300px'}} type='submit' > Login </Button>

         </Grid>
     </Grid>
     </form>

  </Paper>

  </Box>;
};

export default Login;
