import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavScrollExample from './components/NavScrollExample';
import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate'
import Contact from './components/Contact';
import Education from './components/Education';
import Volunteer from './components/Volunteer';
import School from './components/School';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Health from './components/Health';
import Hospital from './components/Hospital';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/health' element={<Health />} />
          <Route path='/volunteer' element={<Volunteer/>}/>
          <Route path='/school' element={<School/>}/>
          <Route path='/hospital' element={<Hospital/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
