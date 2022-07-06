
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/router_comp/Contact'
import Ebazar from './components/router_comp/Ebazar';
import Learnmore from './components/router_comp/Learnmore';
import Video from './components/router_comp/Video';
import Buyerlogin from './components/router_comp/Buyerlogin'
import BuyerRegistration from './components/router_comp/BuyerRegistration';
import SellerRegistration from './components/router_comp/SellerRegistration';
import Sellerlogin from './components/router_comp/Sellerlogin';
import NavHead from './components/NavHead';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>  
    <Router>
    <NavHead/>
    <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/Ebazar" element={<Ebazar/>}/>
          <Route exact path="/Learnmore" element={<Learnmore/>}/>
          <Route exact path="/Video" element={<Video/>}/>
          <Route exact path="/Buyerlogin" element={<Buyerlogin/>}/>
          <Route exact path="/Sellerlogin" element={<Sellerlogin/>}/>
          <Route exact path="/BuyerRegistration" element={<BuyerRegistration/>}/>
          <Route exact path="/SellerRegistration" element={<SellerRegistration/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>

  );
}

export default App;
