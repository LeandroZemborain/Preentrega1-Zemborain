import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navegacion from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Navegacion />
      <ItemListContainer greeting = {"Bienvenido"} />
    </div>
  );
}

export default App;

