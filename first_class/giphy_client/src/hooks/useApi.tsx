import { useEffect, useState } from "react"
import axios from "axios"

import { RequestError } from "../interfaces"

const apiKey = import.meta.env.VITE_API_KEY

export const useApi = <T,>(url?: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<RequestError | undefined>()

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const { data } = await axios.get<T>(`${url}?api_key=${apiKey}&limit=15`)
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
    if (url) fetchData()
  }, [url])

  return { data, isLoading, error, fetchData }
}

export default useApi