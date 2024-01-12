
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog';
import Products from './components/Products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;



