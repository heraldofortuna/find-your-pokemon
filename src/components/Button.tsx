interface IButtonProps {
  text: string;
}

const Button = ({ text }: IButtonProps) => {
  return (
    <button className="bg-transparent w-full text-lg p-4 border border-white rounded-2xl cursor-pointer">{text}</button>
  )
};

export default Button;