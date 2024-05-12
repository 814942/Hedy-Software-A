"use client"
import UsersCard from "@/components/UsersCard";
import Loading from "@/components/Loading";

import useApi from "@/hooks/useApi";

import { User, UsersInterface } from "@/interfaces/users.interface";

export default function Home() {
  const { data } = useApi<UsersInterface>("api/users")
  return !data ?  <Loading /> : (
    <main className="flex min-h-screen flex-wrap gap-12 items-center justify-center p-24 bg-white text-black">
      {
        data?.mappedData.length && data.mappedData.map((user: User) => (
          <div key={user.id}>
            <UsersCard
              id={user.id}
              name={user.name}
              email={user.email}
              street={user.street}
              companyName={user.companyName}
            />
          </div>
        ))
      }
    </main>
  );
}
