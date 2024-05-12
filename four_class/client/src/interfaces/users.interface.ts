import { UsersDataResponse } from "./data.interfaces"

export interface UsersInterface {
  mappedData: User[]
}

export interface UserInterface {
  data: UsersDataResponse
}

export interface User {
  id?: number
  companyName: string
  email: string
  name: string
  street: string
}