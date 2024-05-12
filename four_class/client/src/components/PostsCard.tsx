interface PostCardProps {
  title: string
  body: string
}

const PostsCard = ({ title, body }: PostCardProps) => (
  <div className="max-w-2xl m-auto mt-8">
    <div className="flex border border-pink rounded-xl overflow-hidden items-center justify-start p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex flex-col gap-2 py-2">
        <p className="text-xl font-semibold">
          {title}
        </p>
        <p className="text-base">
          {body}
        </p>
      </div>
    </div>
  </div>
)

export default PostsCard;