import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  //these the hook to used change in state of fields
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charactor, setCharactor] = useState(false)
  const [password, setPassword] = useState('')
  
  //useRef is used to pass the reference of element to access it in password fields to copy btn
  const passwordRef = useRef(null)

  //useCallBack is used when any change occure in variables it will rerender the page or optimized it.
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (number) str += '0123456789'
    if (charactor) str += '!@#$%^&*(){}?/><][|~`'

    //these are the mlogic to generator ramdom password
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, number, charactor, setPassword])

  //this method is used to capy password when we click on the copy btn
  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  //this modify the changes 
  useEffect(() => {
    passwordGenerator()
  }, [length, number, charactor, passwordGenerator])

  return (
    <>
      <div className='flex flex-wrap flex-col max-w-3xl bg-gray-700 py-2 px-8 rounded-lg justify-center'>
        <div>
          {/* this is heading */}
          <h1 className='text-orange-600 my-8 text-3xl font-semibold'>Password Generator</h1>
          {/* password fields */}
          <input
            type="text"
            ref={passwordRef}
            value={password}
            onChange={() => setPassword(pass)}
            placeholder='password'
            className='outline-none max-w-md rounded-l-lg py-3 px-5 text-lg'
          />
          {/* copy Button */}
          <button
          onClick={copyPasswordToClipBoard} 
          className='bg-blue-500 text-lg font-semibold py-3 px-4 rounded-r-lg'>COPY</button>
        </div>

        <div className='flex my-8 mx-2 text-xl gap-5'>
          {/* range Length of string */}
          <div className="flex">
            <input type="range"
              min='0'
              max='100'
              className='cursor-pointer'
              onChange={(e) => (setLength(e.target.value))}
            />
            <label className='text-orange-500 font-semibold'>length {length}</label>
          </div>

          {/* Number Checkbox */}
          <div>
            <input type="checkbox"
              className='w-4 h-4'
              onChange={() => setNumber((prev) => !prev)}
            />
            <label className='text-orange-500 font-semibold'>Number </label>
          </div>

          {/* charctor check box */}
          <div>
            <input type="checkbox"
              className=" h-4 w-4 cursor-pointer "
              onChange={() => setCharactor((prev) => !prev)}
            />
            <label className='text-orange-500 font-semibold'>Charactor</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
