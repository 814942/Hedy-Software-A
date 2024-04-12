"use client"

import Image from "next/image";

import Spinner from "@/components/atoms/Spinner";
import CardContainer from "@/components/molecules/CardContainer";

import useApi from "@/hooks/useApi";

import { IDataResponse } from "@/interfaces/data.interfaces";

export default function Home() {
  const { data } = useApi<IDataResponse[]>("/films")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white-100">
      <div 
        id="banner"
        className="relative w-full flex justify-center"
      >
        <Image
          className="z-10 pb-8"
          src="/studio_ghibli.png"
          width={500}
          height={200}
          alt="Ghibli"
          title="Studio Ghibli"
        />
        <Image
          className="w-full absolute bottom-0"
          src="/pattern_2.svg"
          width={200}
          height={200}
          alt="wave"
        />
      </div>
      <div
        id="main"
        className="w-full flex flex-wrap justify-center items-center gap-16 bg-primary p-20"
      >
        {
          data?.length
            ? data.map((film: IDataResponse) => {
              return (
                <CardContainer
                  id={film.id}
                  score={film.rt_score}
                  img_src={film.image}
                  title={film.title}
                />
              )
            })
            : <Spinner />
        }
      </div>
    </main>
  );
}
