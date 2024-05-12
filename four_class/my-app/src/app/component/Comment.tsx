import { IComments } from "@/interfaces/comment.interface"

const Comment = ({ name, body, email }: IComments) => {
  return (
    <div 
      className="bg-blue rounded-lg p-4 m-8 border-2 border-pink text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
    >
      <h1 className="font-bold">{name}</h1>
      {email && <h3 className="font-semibold">{email}</h3>}
      <p>{body}</p>
    </div>
  );
}

export default Comment;