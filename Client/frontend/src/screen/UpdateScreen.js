import React,{useEffect} from 'react';
import { useForm } from "react-hook-form";
import {Box,Paper,Stack,Typography,TextField,Button,Grid} from '@mui/material'
import axios from 'axios';
import {useParams,useNavigate, useLocation} from 'react-router-dom';
// import LoginContext from '../context/LoginContext';

const UpdateScreen = () => {

    const {postId} = useParams()
    const navigate = useNavigate()
    const location = useLocation();
    const { register,setValue, handleSubmit,  formState: { errors } } = useForm({
        defaultValues:{
            title:location.state.title,
            newsDescription:location.state.newsDescription,
            category:location.state.category,
        }
    })

    const deletePost=()=>{
        axios.get(`http://localhost:5000/deleteNews/${postId}`).then((res)=>{
            console.log(res);
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }

  const onSubmit = ((data)=>{
      console.log(data)
      
    axios.post(`http://localhost:5000/updateNews/${postId}`,{
        title:data.title,
        newsDescription:data.newsDescription,
        category:data.category
    }).then((res)=>{
            navigate('/')

    }).catch((err)=>{
            console.log(err)

        });
  })  
      
  useEffect(()=>{
      for(const [key,value] of Object.entries(location.state)){
            setValue(key,value)
      }

  },[setValue,location])
  

  return <Box  sx={{margin:'auto',marginTop:4,display:'flex',justifyContent:'center'}}>
  
  <Paper elevation={2}sx={{width:'500px', height:'420px',padding:3}} >
      <Typography align='center' variant='h5' gutterBottom>Login</Typography>
    

     <form onSubmit={handleSubmit(onSubmit)}>
     <Grid container spacing={3} mb={2}>
     
         <Grid item xs={12}>
     <TextField label='title' name='title' {...register("title", { required: true }) } fullWidth/>
     {errors.title?.type === 'required' && "title is required"}
         </Grid>
         <Grid item xs={12}>
         <TextField type='newsDescription' name='newsDescription' label='newsDescription' {...register("newsDescription", { required: true, }) } fullWidth/>

         </Grid>
         <Grid item xs={12}>
         <TextField type='category' name='category' label='category' {...register("category", { required: true, }) } fullWidth/>

         </Grid>
         <Grid item sx={{margin:'auto'}}>
        <Button variant='contained' sx={{width:'300px'}} type='submit' > Update Post </Button>

         </Grid>
            <Stack mt={1} sx={{ml:'6.1rem'}} >
        <Button variant='contained'  sx={{width:'300px',backgroundColor:'red'}} onClick={deletePost} > Delete Post </Button>

            </Stack>
     </Grid>
     </form>

  </Paper>

  </Box>;
};

export default UpdateScreen;
