import Image from "next/image";

import BackToHome from "@/components/atoms/BackToHome";

import { fetchDetails } from "@/services/fetch.services";

interface IDetailsProps {
  params: { id: string };
}

const FilmDetails = async ({ params }: IDetailsProps) => {
  const details = await fetchDetails(params.id)

  return ( 
    <div>
      {
        details && (
          <div id="details-container" className="text-primary w-full h-full px-80 py-40 bg-white-100">
            <BackToHome />
            <div className="pb-8">
              <div className="flex items-center justify-between pb-4">
                <div>
                  <p className="text-3xl font-semibold">{details.title}</p>
                  <p className="text-xl font-semibold">{`(${details.original_title}, ${details.original_title_romanised})`}</p>
                </div>
                <div className="ml-8 text-secondary">
                  <p>Rate</p>
                  <p>{details.rt_score} / 10</p>
                </div>
              </div>
              <p className="text-lg pb-4">{`${details.release_date} - ${details.running_time}m`}</p>
              <Image
                src={details.movie_banner}
                width={1000}
                height={400}
                alt={details.id}
                title={details.title}
                className="w-full border border-primary"
              />
            </div>
            <div>
              <p className="tracking-widest leading-8 text-lg">{details.description}</p>
              <div className="border-t mt-4 mb-4 w-full border-r-2 border-gray"></div>
              <div className="flex items-center gap-2">
                <p className="font-medium">Director</p>
                <p>{details.director}</p>
              </div>
              <div className="border-t mt-4 mb-4 w-full border-r-2 border-gray"></div>
              <div className="flex items-center gap-2">
                <p className="font-medium">Producer</p>
                <p>{details.producer}</p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default FilmDetails;