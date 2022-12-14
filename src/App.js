import Login from './components/Login'
import Header from './components/Header.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";  
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ErrorPage from './pages/ErrorPage';
import Tab from './components/Tab';
function App() {
  return <BrowserRouter>
  <Routes>
  <Route path='/login' element={<Login/>}/>
    <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>  
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Tab/>}/>
       
        <Route path='*' element={<ErrorPage/>}/>

    </Route>
  </Routes>
  
  </BrowserRouter>
}

export default App;
