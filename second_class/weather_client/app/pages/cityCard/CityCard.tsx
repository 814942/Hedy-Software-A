import Image from "next/image";
import Link from "next/link";

import { ICity } from "@/interfaces/city.interfaces";
import { CircleX } from "lucide-react";

const CityCard = ({ id, name, min, max, img, description, onClose }: ICity) => {
  return (
    <Link href={`/city/${name.toLocaleLowerCase()}`}>
      <div className="border border-white-100 rounded-3xl flex flex-col items-center justify-center w-[300px] h-[500px] bg-gradient-card text-white-100">
        <button 
          onClick={() => onClose!(id)}
          className="p-4 flex items-center justify-center cursor-pointer rounded-xl transition"
        >
          <CircleX size={30} />
        </button>
        <h2 className="text-xl hover:text-blue-primary">{name}</h2>
        <p>{description}</p>
        <div className="flex items-center justify-center">
          <p className="m-2">Min: {`${min}°`}</p>
          <p className="m-2">Max: {`${max}°`}</p>
        </div>
        <Image
          className="w-full"
          src={img}
          width={150}
          height={150}
          alt={"Weather"}
        />
      </div>
    </Link>
  );
}

export default CityCard