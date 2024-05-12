import axios from "axios"
import { NextResponse } from "next/server"

const $URL = "https://jsonplaceholder.typicode.com/comments"

export async function POST(req: any) {
  const { body, name } = await req.json()
  const { data } = await axios.post(`${$URL}`, { body, name })

  return NextResponse.json({ data })
}