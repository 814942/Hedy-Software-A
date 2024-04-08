import axios from "axios";

import { CountryAlts, ICountries } from "@/interfaces/global.interfaces";

const getCountries = async () => {
  const countryPromises = []
  for (const code in CountryAlts) {
    countryPromises.push(axios.get(`https://restcountries.com/v3.1/alpha/${code}`))
  }

  const countries = await Promise.all(countryPromises)

  const countriesMapped: ICountries[] = countries.map(({ data }, indx) => {
    const countryCode = data[0].cca2.toLowerCase()
    const countryStatus = data[0].cca2.toLowerCase() === CountryAlts.ar ? true : false
    return {
      id: indx,
      icon: `https://newsapi.org/images/flags/${countryCode}.svg`,
      name: data[0].name.common,
      code: countryCode,
      active: countryStatus
    }
  })

  return countriesMapped
}

export default getCountries