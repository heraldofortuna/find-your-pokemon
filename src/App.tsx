import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Home from './pages/Home';
import PokemonDetail from 'microfrontend1/PokemonDetail';

function App() {
  return (
    <div className='bg-primary w-screen min-h-screen p-6 flex flex-col gap-6 font-mono'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemon-detail/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
