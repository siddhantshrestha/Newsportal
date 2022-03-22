
import React, { useState, useEffect } from "react"

import axios from "axios"
import { Box } from "@mui/material"
import NewsCard from "../component/NewsCard"
import {  Link } from "react-router-dom"

const BusinessScreen = () => {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/category/business').then(res => {
      setNewsList(res.data)
    })
  }, [])

  return (
    <Box p={4}  sx={{  margin: "auto",display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',}}>
      {newsList.map((list, index) => {
        return (
          
          
            <Link to={`/detail/${list.id}`} key={index} state={list}>
              <NewsCard
                title={list.title}
                newsDescription={list.newsDescription}
                ky={index}
              />
            </Link>
          
        )
      })}
    </Box>
  )
}

export default BusinessScreen;
