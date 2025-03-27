import './App.css';
import Button from './components/Button';
import RemoteButton from "microfrontend1/Button";
import Title from "microfrontend2/Title";

function App() {
  return (
    <div>
      <ul className='flex flex-col gap-4 list-none'>
        <li>
          <Button text="Dark / Light" />
        </li>
        <li>
          <Button text="Usuario" />
        </li>
        <li>
          <a href="/home">
            <Button text="Ingresar" />
          </a>
        </li>
      </ul>
      <RemoteButton />
      <Title />
    </div>
  );
}

export default App
