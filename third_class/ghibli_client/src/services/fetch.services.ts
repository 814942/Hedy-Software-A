import axios from "axios";

import { IDataDetails } from "@/interfaces/data.interfaces";

export const fetchDetails = async (id: string) => {
  const { data } = await axios.get<IDataDetails>(`https://ghibliapi.vercel.app/films/${id}`)
  return data
}