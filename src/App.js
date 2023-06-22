import logo from './logo.svg';
import './App.css';
import ParentComponent from './ParentComponent';
//import { useRef } from 'react';
//import { useState } from 'react';
function App() {
  return(
  /*const refElement = useRef("")
  const [name,setName]= useState("sakshi")
  console.log(refElement)
  function Reset (){
    setName("")
    refElement.current.focus()
  }
  function handleInput(){
    refElement.current.style.color="blue"
    refElement.current.value="diksha"
  }
  return (
   <>
   <h1>Learning useRef</h1>
   <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
   <button onClick={Reset}>Reset</button>
   <button onClick={handleInput}>handle input</button>
   </>
  );*/
  <>
  <ParentComponent/>
  </>
  )
}
export default App;

