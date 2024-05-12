/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import axios from "axios"

export const useApi = <T,>(url?: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any | undefined>()

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const { data } = await axios.get<T>(`${url}`)
      setData(data)
    } catch (err) {
      let error = err
      if (err instanceof Error) {
        error = {
          name: err.name, // the type of error
          message: err.message, // the description of the error
          stack: err.stack // the stack trace of the error
        }
      } 
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, isLoading, error }
}

export default useApi