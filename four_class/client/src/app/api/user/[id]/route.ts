import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

import { UsersDataResponse } from "@/interfaces/data.interfaces"

const $URL = 'https://jsonplaceholder.typicode.com'

interface Params {
  params: { id: string }
}

export async function GET(req: NextRequest, { params }: Params) {
  const { data } = await axios.get<UsersDataResponse>(`${$URL}/users/${params.id}`)

  return NextResponse.json({ data })
}