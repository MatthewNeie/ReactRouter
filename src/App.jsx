// import './index.css'
import { Routes , Route , Link } from 'react-router-dom'
import Blue from './Components/Blue'
import Red from './Components/Red'
import Home from './Components/Home'
import Green from './Components/Green'
import Yellow from './Components/Yellow'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link class="hyperlink" to="/blue">Blue</Link>
          <Link class="hyperlink" to="/red">Red</Link>
          <Link class="hyperlink" to="/home">Home</Link>
          <Link class="hyperlink" to="/green">Green</Link>
          <Link class="hyperlink" to="/yellow">Yellow</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue/>}/>
            <Route path="/red" element={<Red/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/green" element={<Green/>}/>
            <Route path="/yellow" element={<Yellow/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
