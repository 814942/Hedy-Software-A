"use client"
import { useEffect, useState } from "react";
import CardComments from "./component/CardComments";
import NewComment from "./component/NewComment";
import Modal from "./component/Modal";
import { getData } from "@/services/get-data";
import { IComments } from "@/interfaces/comment.interface";
import Comment from "./component/Comment";

export default function Home() {
  const [user, setUser] = useState<string>("")
  const [data, setData] = useState<IComments[]>([])

  const initialData = async () => {
    const initialData = await getData()
    setData(initialData.data)
  }

  const mergeData = (body: IComments) => {
    setData(prevData => [body, ...prevData])
  }

  useEffect(() => {
    initialData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0 bg-white">
      <div>
        <div className="text-center">
          <h3 className="p-8 font-bold text-xl text-blue">
            Hello! {user}
          </h3>
        </div>
        <NewComment reload={mergeData} user={user} />
        <CardComments data={data} />
        <Modal onChange={setUser} />
      </div>
    </main>
  );
}
