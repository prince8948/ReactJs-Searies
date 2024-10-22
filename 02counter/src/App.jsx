import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Increament(){
    if(count<=20){
      setCount(count+1);
      return
    }
    else{
      alert('you Get the maximum number')
    }  
  }

  function Decreament(){
    if(count > 0){
      setCount(count-1);
      console.log('decreamented value : ', count);
      return
    }
    else{
      alert('you Get the minimum number')
    }
  }
  const [user, setUser]=useState()
  if(true){
    console.log("user found")
    setUser(user)
  }


  return (
    <>
    <h2>Number : {count}</h2>
      <button onClick={Increament} >
        Increament
      </button>

      <button onClick={Decreament}> 
        Decreament
      </button>

      {/* we do like this but it increasing continuosly 1 */}
      {/* <button onClick={()=>setCount((count)=>count+1)}>add+1  {count}</button> */}
    </>
  )
}

export default App
