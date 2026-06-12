import { useState ,useCallback, useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const[numberAllowed,setnumberAllowed]=useState(false)
  const[charAllowed,setcharAllowed]=useState(false)
  const[Password,setPassword]=useState("")

  const passwrodRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) string+="0123456789"
    if(charAllowed) string+="!@#$%^&*(){}[]"

    for(let i=1;i<=length;i++){
      let ind=Math.floor(Math.random()*string.length)
      pass+=string.charAt(ind)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])
  useEffect(()=>{
    passwordGenerator()
  },[numberAllowed,charAllowed,length,passwordGenerator])

  const copypasswordtoClipboard=useCallback(()=>{
    passwrodRef.current?.select();

    window.navigator.clipboard.writeText(Password)
  },[Password])

  return (
     <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input
  type="text"
  value={Password}
  className="outline-none w-full py-2 px-3 bg-white text-gray-500 border border-white rounded-md"
  placeholder="Password"
  readOnly
  ref={passwrodRef}
/>
<button 
onClick={copypasswordtoClipboard}
className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(Number(e.target.value))}}
        />
        <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setnumberAllowed((prev)=>!prev);
        }}
         />
         <label htmlFor="numberInput">Numbers</label>

      </div>
            <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=>{
          setcharAllowed((prev)=>!prev);
        }}
         />
         <label htmlFor="charInput">Character</label>

      </div>
    </div>
    </div>
     </>
  )
}

export default App
