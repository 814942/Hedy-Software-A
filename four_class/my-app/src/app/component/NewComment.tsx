"use client"

import { createData } from "@/services/get-data"
import { useState } from "react"

const NewComment = ({ user, reload }: any) => {
  const [newComment, setNewComment] = useState<string>("")

  const handleNewComment = (e: any) => {
    setNewComment(e.target.value)
  }

  const submitNewComment = async () => {
    const { data } = await createData({
      body: newComment,
      name: user
    })
    alert("Comment successfully created")
    setNewComment("")
    reload(data.data)
  }

  return (
    <div className="flex justify-center">
      <input
        className="w-3/6 rounded-lg p-4 m-8 border-2 border-pink shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        type="text"
        value={newComment}
        placeholder="Create a new comment"
        onChange={handleNewComment}
      />
      <button
        className="w-[10%] rounded-lg p-4 m-8 border-2 border-pink shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        onClick={submitNewComment}
      >
        Create
      </button>
    </div>
  );
}

export default NewComment;