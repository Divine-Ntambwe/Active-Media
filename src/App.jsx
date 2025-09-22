import react,{ useState } from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import About_Us from './pages/About_Us'
import Contact_Us from './pages/Contact_Us'

function App() {


  return (
    <>

 < Routes>
 <Route path ="/" element={<Home />}/>
 <Route path ="/aboutUs" element ={<About_Us />}/>
 <Route path ="/contactUs" element ={<Contact_Us />}/>

 </Routes>
 
 </>
  )
}

export default App
