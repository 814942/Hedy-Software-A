export interface ICategories {
  id: number;
  name: string;
}

export interface ICountries {
  id: number;
  icon: string;
  name: string;
  code: CountryAlts;
  active: boolean;
}
export enum CountryAlts {
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

export interface INewsResponse {
  status: string;
  totalResults: number,
  articles: IArticle[]
}

export interface IArticle {
  source: { id: number | null; name: string; },
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}