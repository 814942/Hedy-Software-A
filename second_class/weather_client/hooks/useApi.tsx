import { useEffect, useState } from "react"
import axios from "axios"

export interface RequestError {
  name: string;
  message: string;
  stack?: string;
}

const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY
const $URL = "http://api.openweathermap.org/data/2.5/weather";

export const useApi = <T,>(path?: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<RequestError | undefined>()
  
  const fetchData = async (path: string) => {
    setIsLoading(true)
    
    try {
      const { data } = await axios.get<T>(`${$URL}?q=${path}&limit=${5}&units=metric&appid=${apiKey}`)
      setData(data)
    } catch (err) {
      if (err instanceof Error) {
        const error = {
          name: err.name, // the type of error
          message: err.message, // the description of the error
          stack: err.stack // the stack trace of the error
        }
        setError(error)
      } 
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (path) {
      fetchData(path)
    }
  }, [path])

  return { data, isLoading, error, fetchData }
}

export default useApi