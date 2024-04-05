"use client"

import { useEffect } from "react";
import { Globe, Hourglass, Map } from 'lucide-react';
import getCountries from "@/utilities/countries.utility";

const LandingPage = () => {
  useEffect(() => {
    const coso = getCountries()
    console.log("🚀 ~ useEffect ~ coso:", coso)
  }, [])

  return (
  <div className="text-black-100">
    <p className="text-2xl text-center pb-20">
      <span>News from the world</span> search results for current news articles 
      published by over 80,000 worldwide sources.
      We track headlines in 7 categories across over 50 countries, 
      and at over a hundred top publications and blogs, in near real time.
    </p>
    <div className="flex w-11/12 m-auto">
      <div className="mb-8 w-2/6 px-8 text-center flex flex-col items-center">
        <Map size={200} />
        <h1 className="text-2xl m-8 font-medium">Worldwide Scale</h1>
        <p className="text-base leading-8">Search through hundreds of millions of articles from 55 countries.</p>
      </div>
      <div className="mb-8 w-2/6 px-8 text-center flex flex-col items-center">
        <Hourglass size={200} />
        <h1 className="text-2xl m-8 font-medium">Real time news</h1>
        <p className="text-base leading-8">Locate articles and breaking news headlines from news sources and blogs across the web in near real time.</p>
      </div>
      <div className="mb-8 w-2/6 px-8 text-center flex flex-col items-center">
        <Globe size={200} />
        <h1 className="text-2xl m-8 font-medium">Top news networks</h1>
        <p className="text-base leading-8">Discover news from the most important news networks in the world..</p>
      </div>
    </div>
    <div></div>
  </div>
  );
}

export default LandingPage;