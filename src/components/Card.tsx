import formatNumber from "../utils/formatNumber";

interface ICardProps {
  title: string;
  image: string;
  number: number;
}

const Card = ({ title, image, number }: ICardProps) => {
  return (
    <div className="bg-white relative h-40 w-40 text-dark px-4 py-1 border border-gray-gray-dark rounded-lg z-10">
      <div className="relative flex flex-col items-center z-30">
        <span className="w-full text-xs text-gray-dark text-right">{ formatNumber(number) }</span>
        <img src={ image } alt={ title } />
        <p className="text-sm font-medium">{ title }</p>
      </div>
      <div className="bg-gray-light absolute w-full h-1/2 bottom-0 left-0 rounded-lg z-20"></div>
    </div>
  )
}

export default Card;