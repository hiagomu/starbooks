import './App.css';
import Cabecalho from './components/cabecalho';
import ListPromos from './paginas/ListPromos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/base/_base.css'
import Rodape from './components/rodape';
import Promo from './paginas/Promo';
import Contato from './paginas/Contato';
import Cadastro from './paginas/Cadastro';
import CadastroConcluido from './paginas/CadastroConcluido';
import Login from './paginas/Login';
import firebaseMethods from './data/Firebase';

function App() {

  const firebase = firebaseMethods.firebase;

  // Configurar Observador para todo o App
  const verificarLogin = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            return true;
        } else {
            return false;
        }
    })
  }

  return (
    <Router>
      <Cabecalho />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <ListPromos />
          </Route>
          <Route path='/contato'>
            <Contato />
          </Route>
          <Route path='/cadastro'>
            <Cadastro />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/sucesso'>
            <CadastroConcluido />
          </Route>
          <Route path='/promocoes/:id'>
            <Promo />
          </Route>
        </Switch>
        <Rodape />
      </div>
    </Router>
  );
}

export default App;
