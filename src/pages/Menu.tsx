import Button from "../components/Button";

const Menu = () => {
  return (
    <div className="h-full flex flex-col gap-12 mx-auto my-auto">
      <img src="/images/pokemon-logo.png" alt="Bienvenidos al menú de la aplicación 'Find your Pokemon'." />

      <ul className="flex flex-col gap-6">
        <li>
          <Button text="Dark / Light" />
        </li>
        <li>
          <Button text="Usuario" />
        </li>
        <li>
          <a href="home">
            <Button text="Ingresar" />
          </a>
        </li>
      </ul>
    </div>
  )
};

export default Menu;