import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Product from './Product';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Addproduct from './Addproduct';
import Read from './Read';

function App() {
  return (
   
     <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/Product" element={<Product />} />
        <Route path="/Addproduct" element={<Addproduct />} />
        <Route path="/Read" element={<Read/>} />
      </Routes>
      {/* <Footer/> */}
    </>
    
    
  );
}

export default App;
