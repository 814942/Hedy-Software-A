import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

import { UsersDataResponse } from "@/interfaces/data.interfaces"

const $URL = 'https://jsonplaceholder.typicode.com'

export async function GET() {
  const { data } = await axios.get<UsersDataResponse[]>(`${$URL}/users`)

  const mappedData = data.map((user: UsersDataResponse) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    street: `${user.address.street} - ${user.address.suite}`,
    companyName: user.company.name
  }))

  return NextResponse.json({ mappedData })
}