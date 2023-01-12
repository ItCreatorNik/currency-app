import './App.css';
import { Header } from './components/header/Header';
import ExchangeContainer from './containers/ExchangeContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ExchangeContainer/>
    </div>
  );
}

export default App;
