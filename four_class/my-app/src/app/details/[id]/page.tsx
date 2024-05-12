"use client"
import Comment from "@/app/component/Comment";
import { IComments } from "@/interfaces/comment.interface";
import { getOneById } from "@/services/get-data";
import { navigate } from "@/services/navigate";
import { useEffect, useState } from "react";

interface ParamProps {
  params: { id: number };
}

const CommentDetails = ({ params }: ParamProps) => {
  const [data, setData] = useState<IComments>()

  const initialData = async (id: number) => {
    const { data, status } = await getOneById(id)
    if(status === 200) {
      setData(data.data)
    }
    else {
      alert("Custom comment doesn´t have details")
      navigate()
    }
  }

  useEffect(() => {
    initialData(params.id)
  }, [params])

  return (
    <div className="p-24 bg-white text-black">
      {data && (
      <Comment 
        name={data.name}
        body={data.body}
        email={data.email}
      />
      )}
    </div>
  );
}

export default CommentDetails;