import { useState } from "react"


function App() {
  const [color, setcolor] = useState("#9b734b")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>RED</button>
          <button onClick={()=>setcolor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>BLACK</button>
          <button onClick={()=>setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>PINK</button>
          <button onClick={()=>setcolor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>VOILET</button>
          <button onClick={()=>setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>GREEN</button>
          <button onClick={()=>setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>BLUE</button>
          <button onClick={()=>setcolor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>ORANGE</button>
          <button onClick={()=>setcolor("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>BROWN</button>
          <button onClick={()=>setcolor("olive")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>OLIVE</button>
        </div>
      </div>

    </div>
  )
}

export default App
