import React from 'react'
import NavMenu from './Components/NavMenu'
import './App.css'

const App = () => {
 
  
const MenuItems = [
  {
    title: 'Home', link: '#' ,isActive: true
    
  },
  {
    title:'services',dropdown:[
                               {title:'for entrepreneur' ,link:'#'},
                               {title:'for students' ,link:'#'},
                               {title:'for hobbyists' ,link:'#'}] , 
                               isActive: true
  },
  {
    title:'contact' ,link: '#' ,isActive: true
  }

]

  return <div className="app">
    <NavMenu listOfItems={MenuItems} />
  </div>
}
export default App