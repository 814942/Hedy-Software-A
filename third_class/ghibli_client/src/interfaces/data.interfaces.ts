import { UUID } from "crypto";

export interface IDataResponse {
  id: UUID;
  title: string;
  image: string;
  rt_score: string;
}

export interface IDataDetails extends IDataResponse {
  original_title: string;
  original_title_romanised: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;

  // people: string[];
  // species: string[];
  // locations: string[];
  // vehicles: string[];
  // url: string;
}