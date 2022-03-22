import React, { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Box, Grid, Typography } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"))
  }, [setLoggedIn])
  return (
    <>
      <Box>
        <Grid container className='top-header'>
          <Grid item xs={12} sm={11}>
            <Typography variant='h3' mt={1} align='center' gutterBottom>
              News Portal
            </Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
            {!loggedIn   ? (
      
                <><Nav.Link href='/login'>
                <AccountCircleIcon sx={{ marginTop: "25px" }} />
              </Nav.Link></>
              
            ) : 
             (
              <Nav.Link href='/'>
                  <button className='button'
                    onClick={() => {
                      localStorage.clear()
                    }}>
                    logout
                  </button>
                </Nav.Link>
              )
            }
          

          </Grid>
        </Grid>
      </Box>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/category/Business'>Business</Nav.Link>
              <Nav.Link href='/category/politics'>Politics</Nav.Link>
              {loggedIn ? <Nav.Link href='/createPost'>Create Post</Nav.Link>: ''}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
