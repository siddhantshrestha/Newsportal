import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Login from "./component/Login"
import CreatePost from "./component/CreatePost"
// import DetailScreen from "./screen/DetailScreen"
import HomeScreen from "./screen/HomeScreen"
import DetailPost from "./screen/DetailPost"
import UpdateScreen from "./screen/UpdateScreen"
import BusinessScreen from "./screen/BusinessScreen"
import Politics from "./screen/Politics"
// import LoginContext from './context/LoginContext'


function App() {

  // useEffect(()=>{
  //   if(!localStorage.getItem('loggedIn')){
  //     localStorage.setItem('loggedIn',false)
  //   }
  // },[])

  return (
    
  <div >
   
      

  <Router>
  <Header />

      <Routes>
          <Route path='/' element={<HomeScreen />}/>
          <Route path='/detail/:postId' element={<DetailPost />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/category/Business' element={<BusinessScreen/>} />
          <Route path='/category/Politics' element={<Politics/>} />
          <Route path='/createPost' element={<CreatePost/>}/>
          <Route path='/updatePost/:postId' element={<UpdateScreen/>}/>

        </Routes>
  </Router>
  </div>

  )
}

export default App
