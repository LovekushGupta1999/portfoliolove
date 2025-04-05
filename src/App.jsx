import './App.css'
//Components
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Achievement from './Components/Achievements/Achievement'
import Contact from './Components/Contact/Contact'
function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Project/>
     <Achievement/>
     <Contact/>
    </>
  )
}

export default App
