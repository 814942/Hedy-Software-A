import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { data } = await axios.get('https://digimon-api.vercel.app/api/digimon')
  const dataPaginated = data.slice(0, 20)

  // URL to redirect to after sign up process completes
  return NextResponse.json(dataPaginated);
}