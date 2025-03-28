interface ICardProps {
  title: string;
  image: string;
  text: string;
}

const Card = ({ title, image, text }: ICardProps) => {
  return (
    <div className="border border-gray">
      <div className="flex flex-col items-center gap-4">
        <span>{ text }</span>
        <img src={ image } alt={ title } />
        <p>{ title }</p>
      </div>
    </div>
  )
}

export default Card;