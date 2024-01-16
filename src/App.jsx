import FAQ from './components/FAQ'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './index.css'

function App() {

  return (
    <div className='w-full bg-white '>
      <Navbar/>
      <Hero/>
      <FAQ/>
    </div>
  )
}

export default App
