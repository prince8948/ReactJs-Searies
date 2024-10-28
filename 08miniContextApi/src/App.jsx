import './App.css'
import Login from './components/Login';
import UserContextProvider from './contexts/UserContextProvider';

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>Welcom to context api</h1>
        <Login/>
      </UserContextProvider>
    </>
  )
}

export default App
