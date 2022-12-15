import './App.css';
import './index.css';
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from './routes/Home';
import Project from './routes/Project';
import {Routes,Route} from "react-router-dom"
import Information from './routes/Information';
function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
   <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/information' element={<Information/>}/>
    </Routes>
  </>
  );
}

export default App;
