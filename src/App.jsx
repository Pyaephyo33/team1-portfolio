import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Team from './components/Team'
import Footer from './components/Footer'
import './index.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Team />
      <Footer />
    </div>
  )
}

export default App
