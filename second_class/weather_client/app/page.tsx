"use client"

import { useEffect, useState } from "react";

import Navbar from "./pages/navbar/Navbar";

import useApi from "@/hooks/useApi";

import { ICity, ICityDetails } from "@/interfaces/city.interfaces";
import LandingPage from "./pages/landing/LandingPage";
import transformData from "@/utils/transform_data.util";
import CityCard from "./pages/cityCard/CityCard";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const { fetchData, data, error } = useApi<any>()

  const [cities, setCities] = useState<ICityDetails[]>([])
  const [city, setCity] = useState<string>("")

  const handleSearchCity = (city: string) => {
    setCity(city)
    fetchData(city)
  }

  const onClose = (id: number) => {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  };

  useEffect(() => {
    if (data) {
      const citiesTransformed = transformData(data)
      const oldCities = [...cities, citiesTransformed]
      setCities(oldCities);
    }
  }, [data])

  useEffect(() => {
    if (error) {
      alert(`City ${city} not found`)
    }
  }, [error])

  return (
    <main>
      <Navbar onSearch={handleSearchCity} />
      {
        cities?.length
          ? <div 
            id="card-container"
            className="p-5 grid grid-cols-3 gap-12 w-11/12 max-w-5xl m-auto mt-8"
          >
          {
            cities.map((city: ICity) => {
              return (
                <CityCard 
                  key={city.id}
                  id={city.id}
                  name={city.name}
                  min={city.min}
                  max={city.max}
                  img={city.img}
                  description={city.description}
                  onClose={onClose}
                />
              )
            })
          }
          </div>
          : <LandingPage />
      }
    </main>
  );
}
