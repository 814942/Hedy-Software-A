"use client"

import BackToHome from "@/components/atoms/BackHome";
import SpinnerContainer from "@/components/molecules/SpinnerContainer";
import useApi from "@/hooks/useApi";
import { ICityDetails } from "@/interfaces/city.interfaces";
import transformData from "@/utils/transform_data.util";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IDetailsProps {
  params: { name: string };
}

const CityDetail = ({ params }: IDetailsProps) => {
  const { data } = useApi<any>(`${params.name}`)

  const [city, setCity] = useState<ICityDetails | undefined>()
  console.log("🚀 ~ CityDetail ~ city:", city)

  useEffect(() => {
    if (data) {
      const cityTransformed = transformData(data)
      setCity(cityTransformed);
    }
  }, [data])

  return !city ? <SpinnerContainer /> : (
    <div id="city-detail" className="h-screen flex items-center justify-center flex-col h-full mt-8">
      <div className="border border-white-100 rounded-3xl flex flex-col items-center justify-center w-[500px] bg-gradient-card text-white-100">
        <h2 className="text-xl p-4 text-blue-light">{city.name}</h2>
        <div className="flex items-center justify-center gap-4 m-2">
          <p>Latitude: {city.latitude}º</p>
          <p>length: {city.length}º</p>
        </div>
        <p>Climate: {city.weather}</p>
        <p>Description: {city.description}</p>
        <p>Temperature: {city.temp} ºC</p>
        <div>
          <p>Temperature minimum: {city.min} ºC</p>
          <p>Temperature maximum: {city.max} ºC</p>
        </div>
        <p>Wind: {city.wind} km/h</p>
        <p>Clouds: {city.clouds}</p>
        <Image
          className="m-4"
          src={city.img}
          width={150}
          height={150}
          alt={"Weather"}
        />
      </div>
      <BackToHome />
    </div>
  );
}

export default CityDetail