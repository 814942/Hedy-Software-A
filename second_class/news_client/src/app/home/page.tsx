/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Image from "next/image";
import Link from "next/link";

import useApi from "@/hooks/useApi";

import { IArticle, INewsResponse } from "@/interfaces/global.interfaces";
import Spinner from "@/components/molecules/Spinner";
import { useNewsContext } from "@/context/data.context";
import { useEffect } from "react";

const Homepage = () => {
  const { country } = useNewsContext()

  const { data, isLoading, fetchData } = useApi<INewsResponse>()

  useEffect(() => {
    if (country) {
      fetchData(`top-headlines?country=${country?.code}`)
    }
  }, [country])

  return (
    <>
      <div className="h-[100px] text-xl flex items-center bg-red-primary text-white-100 p-4 mt-24">
        Showcasing news from: 
        {
          country ?
          <span className="text-base flex m-4 p-2 border-black-100 bg-white-100 text-black-100 rounded-xl">
            <Image
            className="mr-2" 
            src={country!.icon} alt={country!.code} width={30} height={30}
          /> 
            {country?.name}
          </span>
          : <Spinner />
        }
      </div>
      <div id="new-home" className="p-24">
      {
        isLoading ? <div className="h-full gap-8 flex items-center justify-center">
          <Spinner />
          <Spinner />
          <Spinner />
          </div>
        : data?.articles.map((art: IArticle, indx: number) => {
            const alt = art.title.slice(0, 3);
            const item = art.title.split(" ", 5).join("-").toLowerCase()
            return (
              <div 
                key={indx}
                className="w-4/5 m-20"
              >
                <Link href={`/details/${item}`} >
                  <div className="mb-4 text-2xl font-semibold">{art.title}</div>
                </Link>
                <div className="mb-4 text-base">{art.description || "No description available"}</div>
                {
                  art.urlToImage ?
                  <Image
                    className="mr-2" 
                    src={art.urlToImage} alt={alt} width={1300} height={1300}
                  />
                  : 
                  <Image
                    className="mr-2" 
                    src={"/not_found.jpg"} alt="not_found" width={1300} height={1300}
                  />
                }
              </div>
            )
          }
        )
      }
      </div>
    </>
  );
}

export default Homepage;