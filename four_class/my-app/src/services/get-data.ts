import { IComments } from "@/interfaces/comment.interface"
import axios from "axios"

export const getData = async () => {
  const { data } = await axios.get("api/comments")

  return data
}

export const getOneById = async (id: number) => {
  try {
    const { data, status } = await axios.get(`../api/comment/${id}`)
    console.log("🚀 ~ getOneById ~ status:", status)
    return { data, status }
  } catch (error: any) {
    console.log(error)
    return { data: {}, status: error.response.status }
  }

}

export const createData = async (newComment: IComments) => {
  const data = await axios.post("api/create", newComment)

  return data
}