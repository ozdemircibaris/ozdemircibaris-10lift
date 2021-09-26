import './App.css';
import { PokesContextProvider } from './context/appState';
import Pokes from './components/pokes';

function App() {
  return (
    <PokesContextProvider>
      <Pokes />
    </PokesContextProvider>
  );
}

export default App;