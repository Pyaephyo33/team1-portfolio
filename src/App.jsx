import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Team from './components/Team'
import './index.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Team />
      <About />
    </div>
  )
}

export default App
