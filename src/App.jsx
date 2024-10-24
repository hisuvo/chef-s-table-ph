import { useState } from 'react'
import './App.css'
import Recipi from './components/Recipi'
import Sidebar from './components/Sidebar'

function App() {
  const [recipiQueue, setRecipiQueue] = useState([])

  const handleRecipi = recipi => {
    const isExist = recipiQueue.find(previousRecipi => previousRecipi.id === recipi.id)
    const newRecipiQueue = [...recipiQueue, recipi]
    // setRecipiQueue(newRecipiQueue)
    isExist ? alert("it exist") : setRecipiQueue(newRecipiQueue)
  }

  // // Hnadle current cookig prepierd
  // const [prepires, setPrepires] = useState([])
  // const handlePrepire = prep => {
  //   console.log(prep)
  // }

  return (
    <>
      <h1 className='text-4xl font-semibold text-center py-8'>React</h1>
      <div className='w-11/12 mx-auto md:flex gap-4'>
        {/* Recepi section */}
        <Recipi handleRecipi={handleRecipi} />
        {/* Sidebar */}
        <Sidebar recipiQueue={recipiQueue} />
      </div>
    </>
  )
}

export default App
