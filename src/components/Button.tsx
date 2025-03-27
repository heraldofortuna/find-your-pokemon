interface IButtonProps {
  text: string;
}

const Button = ({ text }: IButtonProps) => {
  return (
    <button className="w-full cursor-pointer">{text}</button>
  )
};

export default Button;