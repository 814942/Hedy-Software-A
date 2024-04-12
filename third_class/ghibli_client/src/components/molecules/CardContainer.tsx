import Image from "next/image"
import Link from "next/link";

interface ICardProps {
  id: string;
  score: string;
  img_src: string;
  title: string;
}

const CardContainer = ({ id, score, img_src, title}: ICardProps) => {
  return (
    <div 
      key={id}
      id="card_conteiner"
      className="border-8 border-white-100 rounded-t-xl mb-6 shadow-2xl transition-transform duration-300 transform hover:translate-y-2 hover:translate-x-2"
    >
      <Link className="flex flex-col items-center bg-white-100" href={`details/${id}`}>
        <span className="absolute left-0 bg-white-100 text-secondary rounded-br-full p-2 z-10 leading-5">R
          <p>{score}</p>
        </span>
        <Image
          className="rounded-t-xl"
          src={img_src}
          width={400}
          height={1000}
          alt={title}
          title={title}
        />
        <h2 className="text-2xl text-center bg-white-100 text-secondary p-2">{title}</h2>
      </Link>
    </div>
  )
}

export default CardContainer