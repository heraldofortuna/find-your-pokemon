import { IPokemon } from "../types/pokemon";
import formatNumber from "../utils/formatNumber";

interface IHistorialCardProps {
  data: IPokemon;
}

const HistorialCard = ({ data }: IHistorialCardProps) => {
  return (
    <div className="bg-white relative h-40 w-auto text-dark px-4 py-1 border border-gray-gray-dark rounded-lg z-10">
      <div className="relative h-full flex items-center gap-4 z-30">
        <img src={ data.sprite } alt={ data.name } />
        <div>
          <span className="w-full text-base text-gray-dark">{ formatNumber(data.id) }</span>
          <p className="text-lg font-semibold">{ data.name }</p>
        </div>
      </div>
      <div className="bg-gray-light absolute w-full h-1/2 bottom-0 left-0 rounded-lg z-20"></div>
    </div>
  )
}

export default HistorialCard;