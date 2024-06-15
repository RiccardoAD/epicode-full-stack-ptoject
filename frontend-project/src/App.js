
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
  <BrowserRouter>
  <Routes>
     <Route path="/" element= {<Home />}/> 
    {/* <Route path="/Login" element= {<Home />}/>
    <Route path="/Register" element= {<Home />}/>
    <Route path="/appointments" element= {<Home />}/>
     */}



  </Routes>







   <Footer /> 
  </BrowserRouter>
  );
}

export default App;
