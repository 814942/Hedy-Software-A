import { IComments } from "@/interfaces/comment.interface"
import Link from "next/link";

const CardComments = ({ data }: any) => {
  return (
    <>
      {
        data?.length ? data.map((comment: IComments) => (
          <div 
            key={comment.id}
            className="bg-blue rounded-lg p-4 m-8 border-2 border-pink text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          >
            <Link href={`/details/${comment.id}`}>
              <h1 className="font-bold hover:underline">{comment.name}</h1>
            </Link>
            <p>{comment.body}</p>
          </div>
        ))
        : <p>Loading.. </p>
      }
    </>
  );
}

export default CardComments;