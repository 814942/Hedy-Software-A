import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

const $URL = "https://jsonplaceholder.typicode.com/comments"

interface Params {
  params: { id: string }
}

export async function GET(req: NextRequest, { params }: Params) {
  console.log("🚀 ~ GET ~ params:", params)
  const { data } = await axios.get(`${$URL}/${params.id}`)

  return NextResponse.json({ data })
}