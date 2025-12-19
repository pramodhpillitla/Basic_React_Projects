import { useState } from "react"
import React from "react";


function App() {

  const [color ,setColor] = useState("green");
  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>

        <div className="fixed bottom-0 left-0 rounded  bg-white flex  flex-wrap justify-center items-center gap-4 p-3 shadow-md">
          <button style={{backgroundColor:"red"}} className="rounded p-2" onClick={()=>setColor("red")}>red</button>
          <button style={{backgroundColor:"blue"}} className="rounded p-2" onClick={()=>setColor("blue")}>blue</button>
          <button style={{backgroundColor:"green"}} className="rounded p-2" onClick={()=>setColor("green")}>green</button>
        </div>

      </div>
    </>
  )
}

export default App
