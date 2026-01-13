import React from 'react'
import Card from './components/card'

export const App = () => {
  return (
    <div className='parent'>
      <Card user="aman" img='https://images.unsplash.com/photo-1764105720554-695f1673fb50?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user="Abhishek" img='https://images.unsplash.com/photo-1762652345565-e38e420b6f30?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}
export default App
