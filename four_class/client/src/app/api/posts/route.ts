import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

import { PostsDataResponse } from "@/interfaces/data.interfaces"

const $URL = 'https://jsonplaceholder.typicode.com'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get("userId")
  
  const { data } = await axios.get<PostsDataResponse>(`${$URL}/posts?userId=${userId}`)

  return NextResponse.json({ data })
}