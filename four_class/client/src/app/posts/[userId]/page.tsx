"use client"
import BackToHome from "@/components/BackHome";
import PostsCard from "@/components/PostsCard";
import Loading from "@/components/Loading";

import useApi from "@/hooks/useApi";

import { PostsDataResponse } from "@/interfaces/data.interfaces";
import { ParamProps } from "@/interfaces/param.interface";
import { PostsInterface } from "@/interfaces/posts.interface";

const Posts = ({ params }: ParamProps) => {
  const { data } = useApi<PostsInterface>(`../api/posts?userId=${params.userId}`)

  return !data ? <Loading /> : (
    <div className="p-24 bg-white text-black">
    {
      data?.data.length && data.data.map((post: PostsDataResponse) => (
        <PostsCard
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))
    }
    <BackToHome />
    </div>
  );
}

export default Posts;