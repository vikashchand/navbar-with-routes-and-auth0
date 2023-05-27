
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes ,Route } from 'react-router-dom';
import Home from './Screen/Home/Home';

import Registration from './Screen/Registration/Registration';
import Services from './Screen/Services/Services';
import About from './Screen/About/About';
import News from './Screen/News/News';
import Blogs from './Screen/Blogs/Blogs';
import ChatBot from './Components/ChatBot/ChatBot';


function App() {
  return (
<>
    <Navbar/>
    <Routes>

    <Route exact path="/" element={<Home/>}/>
    
    <Route exact path="/Registration" element={<Registration/>}/>
    <Route exact path="/Services" element={<Services/>}/>
    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/News" element={<News/>}/>
    <Route exact path="/Blogs" element={<Blogs/>}/>
   
  </Routes>
  <ChatBot/>
  </>
  );
}

export default App;
