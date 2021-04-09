import './App.css';
import Cabecalho from './components/cabecalho';
import ListPromos from './components/ListPromos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/base/_base.css'
import Rodape from './components/rodape';

function App() {
  return (
    <Router>
      <div className='container'>
        <Cabecalho />
        <Switch>
          <Route exact path='/'>
            <ListPromos />
          </Route>
        </Switch>
        <Rodape />
      </div>
    </Router>
  );
}

export default App;
