import axios from "axios"
import { NextResponse } from "next/server"

const $URL = "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=15"

export async function GET() {
  const { data } = await axios.get(`${$URL}`)

  const orderedData = data.sort((a: any, b: any) => b.id - a.id)
  return NextResponse.json({ data: orderedData })
}