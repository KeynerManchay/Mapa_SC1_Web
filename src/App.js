import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { Map } from './components/Map';
import { MenuBloques2 } from './components/MenuBloques2';


function App() {
  
  return (
    
    <Router>
      <div>
        <Routes>
          <Route path="/" element={< PaginaPrincipal />} />
          <Route path="/bloques" element={ <MenuBloques2 />} />
          <Route path="/mapa" element={ <Map />} />
          <Route path="/otro-link" element={<h2>Otro Link</h2>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
