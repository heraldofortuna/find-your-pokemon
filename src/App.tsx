import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Home from './pages/Home';

function App() {
  return (
    <div className='w-screen h-screen p-6 flex flex-col gap-6'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
