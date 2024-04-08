"use client"

import { useNewsContext } from "@/context/data.context";
import useApi from "@/hooks/useApi";
import { IArticle, INewsResponse } from "@/interfaces/global.interfaces";
import dateFormatted from "@/utilities/dateFormated.utility";
import Image from "next/image";
import Link from "next/link";

interface IDetailsProps {
  params: { item: string };
}
const NewsItem = ({ params }: IDetailsProps) => {
  const { data, isLoading } = useApi<INewsResponse>(`top-headlines?country=us&q=${params.item.split("-")[0]}`)

  console.log("🚀 ~ NewsItem ~ data:", data)
  return ( 
    <div id="news-details">
      {
        isLoading ? <p>is loading....</p>
        : data?.articles.map((art: IArticle, indx: number) => {
          console.log("🚀 ~ :data?.articles.map ~ art:", art)
          const alt = art.title.slice(0, 3);
          const date = dateFormatted(art.publishedAt)
          return (
            <div 
              key={indx}
              className="m-20"
            >
              <div className="mb-4 text-2xl font-semibold">{art.title}</div>
              
              <div className="mb-4 text-base">{art.description || "No description available"}</div>
              <div className="flex mb-4 text-sm italic border-t-2 justify-between">
                <p>{art.author}</p>
                <p>{date}</p>
              </div>
              {
                art.urlToImage ?
                <Image
                  className="mr-2" 
                  src={art.urlToImage} alt={alt} width={1300} height={1300}
                />
                : 
                <Image
                  className="mr-2" 
                  src={"/not_found.jpg"} alt="not_found" width={1300} height={1300}
                />
              }
              <div className="my-4 text-base">
                {art.content || "No content available"}
              </div>
              <div className="text-end text-sm italic">
                <Link href={art.url}>
                  Source: {art.source.name}
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default NewsItem;