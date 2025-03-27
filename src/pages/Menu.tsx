import Button from "../components/Button";

const Menu = () => {
  return (
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
  )
};

export default Menu;