"use client"
import UserCard from "@/components/UserCard";

import useApi from "@/hooks/useApi";

import { ParamProps } from "@/interfaces/param.interface";
import { UserInterface } from "@/interfaces/users.interface";

const UserDetails = ({ params }: ParamProps) => {
  const { data } = useApi<UserInterface>(`../api/user/${params.userId}`)

  return (
    <div className="p-24 bg-white text-black">
      {
        data && (
          <UserCard
            name={data?.data.name!}
            username={data?.data.username!}
            email={data?.data.email!}
            address={data?.data.address!}
            phone={data?.data.phone!}
            website={data?.data.website!}
            company={data?.data.company!}
          />
        )
      }
    </div>
  );
}

export default UserDetails;