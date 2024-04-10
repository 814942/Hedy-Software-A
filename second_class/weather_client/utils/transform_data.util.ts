import { ICityDetails } from "@/interfaces/city.interfaces";

const transformData = (data: any): ICityDetails => {
  return {
    min: Math.round(data.main.temp_min),
    max: Math.round(data.main.temp_max),
    img: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    id: data.id,
    wind: data.wind.speed,
    temp: data.main.temp,
    name: data.name,
    weather: data.weather[0].main,
    description: data.weather[0].description,
    clouds: data.clouds.all,
    latitude: data.coord.lat,
    length: data.coord.lon,
  };
}
const transformTemp = (temp: number) => {
  return (temp -32) * 5/9
}

export default transformData