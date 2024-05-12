import Link from "next/link";

import { User } from "@/interfaces/users.interface";

const UsersCard = ({ id, name, email, street, companyName }: User) => (
  <div className="w-[900px] py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 hover:scale-110 hover:border-blue transition border border-pink">
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">
          <h2 className="text-blue text-xl text-black font-semibold hover:underline">
            <Link href={`/details/${id}`}>
              {name}
            </Link>
          </h2>
          <p className="text-base">
            {email}
          </p>
          <p className="text-base">
            {street}
          </p>
          <p className="text-base">
            {companyName}
          </p>
      </div>
      <button
        className="px-4 py-1 text-sm text-pink font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        <Link href={`/posts/${id}`}>
          Ver POST
        </Link>
      </button>
    </div>
  </div>
  )

export default UsersCard;