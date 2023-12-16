
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [input, setinput]=useState("<Input text goes here>")

  const [count, setcount]=useState(0)

  const inputRef=useRef()
  const inputRef2=useRef();

  const countRef=useRef(0);
  useEffect(()=>{
    countRef.current=countRef.current+1;
    inputRef.current.style.backgroundColor="red"
  })

  const handleChange=(e)=>{
    if(e.target.value.length==0){
      setinput("<Input text goes here>")
    }else{
      setinput(e.target.value)
    }
  }

  const handleClick=()=>{
    if(inputRef2.current.value==""){
      inputRef2.current.focus()
    }
    else if(inputRef2.current.value>50){
      alert("Success")
    }else{
      alert("Error")
    }
  }

  return (
    <>
      <input onChange={handleChange} type="text" />
      <p>You have input {input}</p>
      {/* <p>Rendered {count}</p> */}
      <p>Rendered {countRef.current}</p>

      <input type="text" ref={inputRef}/>

      <br /><br /><br /><br /><br />
      <input ref={inputRef2} type="text" />
      <button onClick={handleClick}>Validate</button>
    </>
  )
}

export default App
