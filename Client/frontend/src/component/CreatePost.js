import React from 'react';
import { useForm } from "react-hook-form";
import {Box,Paper,Typography,TextField,Button,Grid} from '@mui/material'
import axios from 'axios';
// import LoginContext from '../context/LoginContext';
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate();


    const { register, handleSubmit,  formState: { errors } } = useForm({})

  const onSubmit = ((data)=>{

      
    axios.post('http://localhost:5000/news/createPost',{
        title:data.title,
        newsDescription:data.newsDescription,
        category:data.category
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
            console.log(err)

        });
        navigate('/')

  })  
      
  

  return <Box  sx={{margin:'auto',marginTop:4,display:'flex',justifyContent:'center'}}>
  
  <Paper elevation={2}sx={{width:'500px', height:'450px',padding:3}} >
      <Typography align='center' variant='h5' gutterBottom>Create Post</Typography>
    

     <form onSubmit={handleSubmit(onSubmit)}>
     <Grid container spacing={3} mb={2}>
     
         <Grid item xs={12}>
     <TextField label='title' name='title' {...register("title", { required: true,  }) } fullWidth/>
     {errors.title?.type === 'required' && "title is required"}
         </Grid>
         <Grid item xs={12}>
         <TextField multiline rows={4} type='newsDescription' name='newsDescription' label='newsDescription' {...register("newsDescription", { required: true, }) } fullWidth/>

         </Grid>
         <Grid item xs={12}>
         <TextField type='category' name='category' label='category' {...register("category", { required: true, }) } fullWidth/>

         </Grid>
         <Grid item sx={{margin:'auto'}}>
        <Button variant='contained' sx={{width:'300px'}} type='submit' > Post </Button>

         </Grid>
     </Grid>
     </form>

  </Paper>

  </Box>;
};

export default CreatePost;
