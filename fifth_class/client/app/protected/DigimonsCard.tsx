"use client"

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IDigimonProps {
  name: string
  img: string
  level: string
}

const DigimonCards = () => {
  const [data, setData] = useState<IDigimonProps[]>([])

  const getData = async () => {
    const { data } = await axios.get('data')
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-16 bg-primary p-20">
        {
          data.length && data.map((digimon: IDigimonProps) => {
            return (
              <div
                key={digimon.name}
                className="border-white border p-4 rounded-lg bg-zinc-800	"
              >
                <div>
                  <Image
                    className="rounded-xl"
                    src={digimon.img}
                    width={200}
                    height={200}
                    alt={digimon.name}
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="font-bold">{digimon.name}</h1>
                  <p>{digimon.level}</p>
                </div>
              </div>
            )
          })
        }
      
    </div>
  );
}

export default DigimonCards;