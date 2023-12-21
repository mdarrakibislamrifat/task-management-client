import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user.photoURL);
  return (
    <div>
        <div>
      <h1 className="text-lg text-center lg:text-3xl font-bold">
        Welcome {user?.displayName} to Dashboard
      </h1>
      <div className="avatar mt-2 flex justify-center">
        <div className="w-48 rounded">
          <img src={user?.photoURL} />
        </div>
      </div>
    </div>
    <div className="mt-2">

    </div>
    </div>
  );
};

export default UserHome;
