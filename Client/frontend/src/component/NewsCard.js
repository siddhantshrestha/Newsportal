import React from 'react'
import {
    Card,CardContent,Typography
    
  } from "@mui/material"

const NewsCard = (props) => {


 

  return (
    <div className='newsCard'  >
    <Card  key={props.ky} className='crd' >
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" component='p'>
          {props.newsDescription.substring(0,100)+'...'} </Typography>
      </CardContent>
      </Card>
   
   
    </div>
  )
}

export default NewsCard