import React,{useEffect,useState} from 'react'
import { useParams,Link ,useLocation} from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'; 
import {
  Card,CardContent,Typography,Container
  
} from "@mui/material"

const DetailPost = () => {
    const {postId} = useParams()
    const location = useLocation()

    const [admin,setAdmin] = useState()
    useEffect(()=>{
        if(localStorage.getItem('loggedIn'))
        setAdmin(localStorage.getItem('username'))
        // console.log(setAdmin);
    },[setAdmin ])


  return (
    <Container  p={3} sx={{  margin: "auto",display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',}}>
    <div>
        <div className='newsCard'  >
    <Card sx={{ maxWidth: 500 }}  >
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {location.state.title}
        </Typography>
        {admin ? <>
        <Link to={`/updatePost/${postId}`} state={
          location.state
        }>
        <EditIcon />

        </Link>
        </> :''}
        
        <Typography variant="body2" color="text.secondary">
          {location.state.newsDescription} </Typography>
      </CardContent>
      </Card>
   
   
    </div>
    </div>
    </Container>
  )
}

export default DetailPost