import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PokemonDetail from './PokemonDetail.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonDetail />
  </StrictMode>,
)
