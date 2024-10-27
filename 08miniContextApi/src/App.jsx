import './App.css'
import UserContextProvider from './contexts/UserContextProvider';

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>Welcom to context api</h1>
      </UserContextProvider>
    </>
  )
}

export default App
