import { Globe, Hourglass, Map } from "lucide-react";

const LandingPage = () => {
  return ( 
    <div className="w-11/12 m-auto pt-24 p-8 w-5xl mb-8">
      <div className="w-4/5 m-auto text-center">
        <h1 className="text-2xl mb-4 font-semibold">Weather from the Earth</h1>
        <p className="text-base">
          Access current weather data for any location on Earth! 
          We collect and process weather data from different sources such as global 
          and local weather models, satellites, radars and a vast network of weather stations.
        </p>
      </div>
      <div className="flex mt-8 items-center justify-center">
      <div className="text-center p-8 flex flex-col items-center">
        <Map size={200} className='text-blue-light' />
        <h1 className="text-2xl m-8 font-medium">Worldwide Scale</h1>
        <p className="text-base leading-8">Search the climate of any place on Earth.</p>
      </div>
      <div className="text-center p-8 flex flex-col items-center">
        <Hourglass size={200} className='text-blue-light' />
        <h1 className="text-2xl m-8 font-medium">Real time</h1>
        <p className="text-base leading-8">The weather of any city in real-time.</p>
      </div>
      <div className="text-center p-8 flex flex-col items-center">
        <Globe size={200} className='text-blue-light' />
        <h1 className="text-2xl m-8 font-medium">Main cities</h1>
        <p className="text-base leading-8">Find out about the weather in the main cities of the world.</p>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;