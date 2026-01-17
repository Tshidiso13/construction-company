import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  )
}

export default App