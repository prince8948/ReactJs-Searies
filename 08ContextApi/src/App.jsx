import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './contexts/UserContextProvider'
function App() {

  return (
    <>
      <UserContextProvider>
          <h1>Just undeerstant about useContext</h1>
          <Login/>
          <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
