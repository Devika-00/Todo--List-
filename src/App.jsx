import { useState } from 'react'
import './App.css'
import TodoList from './component/TodoList'

function App() {
  
  return (
    <>
     <div className='App'>
     <img
          src='https://i.pinimg.com/originals/ac/54/a1/ac54a128942c750799c2c1fe144d2467.jpg'  // Replace this URL with your image URL
          alt='Full Screen Image'
          className='background-image'
     />
     <TodoList/>
     </div>
    </>
  )
}

export default App
