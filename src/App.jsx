import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './styles/_base.css'

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './pages/Home/index';
import Cadastro from './pages/Cadastro/index';
import CadastroConcluido from './pages/CadastroConcluido/index';
import Contato from './pages/Contato/index';
import Login from './pages/Login/index';
import Perfil from './pages/Perfil/index';
import Promocao from './pages/Promocao/index';


function App() {

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sucesso" element={<CadastroConcluido />} />
          <Route path="/promocoes/:id" element={<Promocao />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
