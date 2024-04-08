"use client"

import { IArticle, ICategories, ICountries } from "@/interfaces/global.interfaces";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface IArticlesContext {
  article?: IArticle;
  setArticle: Dispatch<SetStateAction<IArticle | undefined>>;
  country?: ICountries;
  setCountry: Dispatch<SetStateAction<ICountries | undefined>>;
  category?: ICategories;
  setCategory: Dispatch<SetStateAction<ICategories | undefined>>;
  inputSearch?: string;
  setInputSearch: Dispatch<SetStateAction<string | undefined>>;
}

interface IProvideProps {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
}

const NewsContext = createContext<IArticlesContext>({
  article: undefined,
  setArticle: () => {},
  country: undefined,
  setCountry: () => {},
  category: undefined,
  setCategory: () => {},
  inputSearch: undefined,
  setInputSearch: () => {},
});

export const NewsProvider = ({ children }: IProvideProps) => {
  const [article, setArticle] = useState<IArticle | undefined>();
  const [country, setCountry] = useState<ICountries | undefined>();
  const [category, setCategory] = useState<ICategories | undefined>();
  const [inputSearch, setInputSearch] = useState<string | undefined>();

  return (
    <NewsContext.Provider value={{ 
      article, setArticle, country, setCountry, category, setCategory, inputSearch, setInputSearch
    }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNewsContext() {
  return useContext(NewsContext)
}