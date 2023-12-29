import './App.css';
import React from 'react'
import Home from './pages/Home';
import SAC from './pages/SAC';
import ACM from './pages/ACM';
import IEEE from './pages/IEEE';
import IUCEE from './pages/IUCEE';
import NSS from './pages/NSS';
import NCC from './pages/NCC';
import SIGNUP from './pages/SignUp';
import SAME from './pages/SAME';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (<div className='MAIN'>
  <Router>
  <Navbar />
  <Routes>
    <Route exact path='/' element= {<Home/>} />
    <Route  path='/sac' element= {<SAC/>} />
    <Route  path='/ncc' element= {<NCC/>} />
    <Route  path='/nss' element= {<NSS/>} />
    <Route  path='/acm' element= {<ACM/>} />
    <Route  path='/ieee' element= {<IEEE/>} />
    <Route  path='/iucee' element= {<IUCEE/>} />
    <Route  path='/same' element= {<SAME/>} />
    <Route  path='/sign-up' element= {<SIGNUP/>} />
  </Routes>
  </Router>
  
  </div>

  );
}

export default App;
