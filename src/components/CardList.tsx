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
    <section>
      { title && <h2>{ title }</h2> }
      <ul className={`${isHorizontal ? 'flex overflow-x-auto scrollbar-hide' : 'grid grid-cols-auto-fit'}`}>
        {data.map((pokemon: IPokemonCard) => (
          <li key={`pokemon-${pokemon.id}`} className="shrink-0">
            {
              isLoading ? (
                <div></div>
              ) : (
                <a href={`/pokemon-detail/${pokemon.id}`}>
                <Card title={pokemon.name} image={pokemon.sprite} text={pokemon.id.toString()} />
                </a>
              )
            }
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CardList;