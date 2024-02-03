import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokemonStatic from './pages/PokemonStatic';
import HomePokemon from './pages/HomePokemon';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<HomePokemon />} />
          <Route path='/static' element={<PokemonStatic />}/>
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}
