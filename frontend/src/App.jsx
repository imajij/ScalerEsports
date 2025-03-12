import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../Components/nav'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-shapes">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="hexagon"></div>
        </div>
        <Navbar />
      </div>
    </Router>
  )
}

export default App