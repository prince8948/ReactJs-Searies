import './App.css'

function App() 
{
  // lets understand variable injection
  const userName = 'Prince Prajapti';

  return (
    <>
    {/* {UserName} this is called variable injection it will give evaluated value */}
      <h1>hello first vite app {userName}</h1> 
    </>
  )
}

export default App
