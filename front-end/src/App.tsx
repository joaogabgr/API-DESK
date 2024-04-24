import './global.css';
import { Route, Routes } from 'react-router-dom'; 
import { Cliente } from './pages/Cliente';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route 
          path="/cliente" 
          element={
              <Cliente />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
