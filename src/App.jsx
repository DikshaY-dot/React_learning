import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter]=  useState(0)

  const addvalue=()=>{
    
    if(counter<20){
      setCounter(counter+1)
    }
    console.log(counter)
  }

  const subvalue=()=>{
    
    if(counter>0){
      setCounter(counter-1)
    }
    console.log(counter)
  }

  return (
    <>
    <h1>Chai & React</h1>
    <h2> Counter Value : {counter}</h2>
<span>
  <button onClick={addvalue}> Increase Value</button>
    <button onClick={subvalue}> Decrease Value</button>
</span>
   
    </>
  )
}

export default App
