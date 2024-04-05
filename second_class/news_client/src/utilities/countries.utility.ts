import axios from "axios";

interface ICountries {
  id: number;
  icon: string;
  name: string;
  code: CountryAlts;
}

enum CountryAlts {
  ae = "ae",
  ar = "ar",
  at = "at",
  au = "au",
  be = "be",
  bg = "bg",
  br = "br",
  ca = "ca",
  ch = "ch",
  cn = "cn",
  co = "co",
  cu = "cu",
  cz = "cz",
  de = "de",
  eg = "eg",
  fr = "fr",
  gb = "gb",
  gr = "gr",
  hk = "hk",
  hu = "hu",
  id = "id",
  ie = "ie",
  il = "il",
  in = "in",
  it = "it",
  jp = "jp",
  kr = "kr",
  lt = "lt",
  lv = "lv",
  ma = "ma",
  mx = "mx",
  my = "my",
  ng = "ng",
  nl = "nl",
  no = "no",
  nz = "nz",
  ph = "ph",
  pl = "pl",
  pt = "pt",
  ro = "ro",
  rs = "rs",
  ru = "ru",
  sa = "sa",
  se = "se",
  sg = "sg",
  si = "si",
  sk = "sk",
  th = "th",
  tr = "tr",
  tw = "tw",
  ua = "ua",
  us = "us",
  ve = "ve",
  za = "za",
}

const getCountries = async () => {
  const countryPromises = []
  for (const code in CountryAlts) {
    countryPromises.push(axios.get(`https://restcountries.com/v3.1/alpha/${code}`))
  }

  const countries = await Promise.all(countryPromises)

  const countriesMapped: ICountries[] = countries.map(({ data }, indx) => {
    const countryCode = data[0].cca2.toLowerCase()
    return {
      id: indx,
      icon: `https://newsapi.org/images/flags/${countryCode}.svg`,
      name: data[0].name.common,
      code: countryCode
    }
  })

  return countriesMapped
}

export default getCountries