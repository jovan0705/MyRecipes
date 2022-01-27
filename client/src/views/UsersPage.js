// Components
import UserCard from "../components/UserCard";

// React Utility
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actionCreators/usersCreator";
import { fetchUserProfile } from "../store/actionCreators/userActon";

const UsersPage = () => {
  const dispatch = useDispatch();
  const { usersReducer, userReducer } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchUserProfile())
  }, []);

  return (
    <div className="py-10">
      <div>
        <h1 className="heading text-center">Users</h1>
      </div>
      <div className="flex justify-center items-center w-1/3 h-11/12 mx-auto rounded-lg flex-col gap-10 bg-zinc-50">
        {usersReducer.users.map(({ id, name, username, profilePict }) => {
          return (userReducer.user.id !== id) ? (
            <UserCard
              key={id}
              id={id}
              name={name}
              username={username}
              profilePict={profilePict}
            />
          ) : (<span></span>)
        })}
      </div>
    </div>
  );
};

export default UsersPage;
