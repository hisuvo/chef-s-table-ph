import './App.css'
import Recipi from './components/Recipi'

function App() {

  return (
    <>
      <h1 className='text-4xl font-semibold text-center py-8'>React</h1>
      <div className='w-10/12 mx-auto'>
        {/* Recepi section */}
        <Recipi />
        {/* Sidebar */}
      </div>
    </>
  )
}

export default App
