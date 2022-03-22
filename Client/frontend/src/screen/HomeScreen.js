import React, { useState, useEffect } from "react"

import axios from "axios"
import { Box } from "@mui/material"
import NewsCard from "../component/NewsCard"
import {  Link } from "react-router-dom"
// import { convertLength } from "@mui/material/styles/cssUtils"

const HomeScreen = () => {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/news/all").then(res => {
      setNewsList(res.data)
    })
  }, [])

  return (
    <Box p={3} sx={{  margin: "auto",display: 'flex',
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

export default HomeScreen
