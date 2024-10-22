import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 rounded-3xl px-4 py-3 bg-white shadow-lg' >
          <button onClick={()=>setColor('#ff5733')} className='py-2 px-6 rounded-3xl bg-red-500'>
              RED
          </button>
          <button onClick={()=>setColor('#2563EB')} className='py-2 px-6 rounded-3xl bg-blue-600'>
              BLUE
          </button>
          <button onClick={()=>setColor('#FFC300')} className='py-2 px-6 rounded-3xl bg-yellow-400'>
              YELLOW
          </button>
          <button onClick={()=>setColor('#4ADE80')} className='py-2 px-6 rounded-3xl bg-green-400'>
              Green
          </button>
          <button onClick={()=>setColor('#000')} className='py-2 px-6 rounded-3xl bg-black text-white'>
              BLACK
          </button>
          <button onClick={()=>setColor('#F97316')} className='py-2 px-6 rounded-3xl bg-orange-500'>
              ORANGE
          </button>
          <button onClick={()=>setColor('purple')} className='py-2 px-6 rounded-3xl bg-purple-400'>
              RED
          </button>
          <button onClick={()=>setColor('#F472B6')} className='py-2 px-6 rounded-3xl bg-pink-400'>
              PINK
          </button>

          <button onClick={()=>setColor('#fff')} className='py-2 px-6 rounded-3xl bg-gray-200 '>
              RESET COLOR
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
