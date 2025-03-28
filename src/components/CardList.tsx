import { IPokemonCard } from "../types/pokemon";
import Card from "./Card";

interface ICardListProps {
  data: IPokemonCard[];
  title?: string;
  isHorizontal?: boolean;
  isLoading?: boolean;
}

const CardList = ({ data, title, isHorizontal = false, isLoading }: ICardListProps) => {
  return (
    <section className="flex flex-col gap-2">
      { title && <h2 className="text-xl">{ title }</h2> }
      {
        isLoading ? (
          <div>Cargando</div>
        ) : (
          <ul className={`${isHorizontal ? 'flex overflow-x-auto scrollbar-hide' : 'grid grid-cols-auto-fit'} gap-2`}>
            {data.map((pokemon: IPokemonCard) => (
              <li key={`pokemon-${pokemon.id}`} className="shrink-0">
                <a href={`/pokemon-detail/${pokemon.id}`}>
                  <Card title={pokemon.name} image={pokemon.sprite} number={pokemon.id} />
                </a>
              </li>
            ))}
          </ul>
        )
      }
    </section>
  )
}

export default CardList;