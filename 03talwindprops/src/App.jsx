import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '../src/Components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myObj={
    userName:"sarkar ji",
    age:21
  }

  
  const newArray = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 '>talwind css </h1>
   <Card />
      {/* <Card name="Bablu sarkar" somOnj={myObj}/> */}
      <Card someObj = {newArray[0]} btnText="Add card"/>
      <Card someObj = {newArray[1]} btnText="Add card"/>
            <Card someObj = {newArray[2]} btnText="Add card"/>
            <Card someObj = {newArray[3]} btnText="Add card"/>
      
      
   

    </>
  )
}

export default App
