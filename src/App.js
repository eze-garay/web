
import Contact from './components/Contact/Contact';
import HOME from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog';
import PRODUCTOS from './components/Products/Products';
import Nota1 from './components/Notas/conocimiento/conocimiento1.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path="/" element={<HOME/>} />
          <Route path="/Blog/Nota1" element={<Nota1/>} />
          <Route path="/HOME" element={<HOME/>} />
          <Route path="/PRODUCTOS" element={<PRODUCTOS/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/CONTACTO" element={<Contact/>} />
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;



