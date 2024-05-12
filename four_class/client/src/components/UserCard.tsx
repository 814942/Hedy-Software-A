import { UsersDataResponse } from "@/interfaces/data.interfaces";
import BackToHome from "./BackHome";

const UserCard = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company
}: UsersDataResponse) => {
  return (
    <>
      <div className="py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 hover:border-blue transition border border-pink">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <h2 className="text-blue text-xl text-black font-semibold">
              {name}
            </h2>
            <div id="user_info" className="pt-4">
              <p className="text-base">
                <span className="font-semibold">Username: </span>{username}
              </p>
              <p className="text-base">
                <span className="font-semibold">Email: </span>{email}
              </p>
              <p className="text-base">
                <span className="font-semibold">Phone: </span>{phone}
              </p>
              <p className="text-base">
                <span className="font-semibold">Website: </span>{website}
              </p>
            </div>
            <div id="user_address" className="pt-4">
              <p className="text-base">
                <span className="font-semibold">Address: </span>{`${address.street} - ${address.suite}`}
              </p>
              <p className="text-base">
                <span className="font-semibold">City: </span>{address.city}
              </p>
              <p className="text-base">
                <span className="font-semibold">Zip code: </span>{address.zipcode}
              </p>
            </div>
            <div id="user_company" className="pt-4">
              <p className="text-base">
                <span className="font-semibold">Company: </span>{company.name}
              </p>
              <p className="text-base">
                {company.catchPhrase}
              </p>
              <p className="text-base italic">
                {company.bs}
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToHome />
    </>
  );
}

export default UserCard;