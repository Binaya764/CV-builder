import { useState } from 'react'
import './App.css'
import UserDetails from './components/userDetails'

function App() {
  const [userDetails, setUserDetails]= useState({
    fullName:""
  });
  function handleDetailChange(event){
    setUserDetails(prev=>{
      return{
        ...prev,
        [event.target.name]: event.target.value,
      };
    })
  }
  return(
    <main className="app">
      <div className='editor'>
        <UserDetails
        userDetails={userDetails}
        handleDetailChange={handleDetailChange}
        />
      </div>

    </main>
  )

}
export default App;
