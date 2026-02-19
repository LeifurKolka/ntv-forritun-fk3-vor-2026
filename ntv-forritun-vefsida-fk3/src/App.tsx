import { useState } from 'react'
import './App.css'

function App() {
  const [myName, setMyName] = useState('')
  const [myEmail, setMyEmail] = useState('')
  const name = myName

  return (
    <>
      
      <h1>Vite + React</h1>
      <h2 id='output'>{name}</h2>
      <input type="text" value={myName} onChange={(e) => setMyName(e.target.value)} />
      <input type="email" value={myEmail} onChange={(e) => setMyEmail(e.target.value)} />
      <button type="submit">Submit</button>
     
    </>
  )
}

export default App
