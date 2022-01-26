import { IoPersonAddSharp, IoPersonRemoveSharp } from "react-icons/io5";
import {
  doFollow,
  doUnfollow,
  fetchUsers,
} from "../store/actionCreators/usersCreator";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserFollowing } from "../store/actionCreators/usersCreator";

const UserCard = ({ id, name, username, profilePict }) => {
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState(false);

  const { usersReducer } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchUserFollowing()).then((users) => {
      users.forEach((el) => {
        if (el.followingId === id) {
          setFollowed(true);
        }
      });
    });
  }, []);

  const handleFollow = (id) => {
    dispatch(doFollow(id));
    setFollowed(true);
  };

  const handleUnfollow = (id) => {
    dispatch(doUnfollow(id));
    setFollowed(false);
  };

  return (
    <div className="flex w-full justify-between items-center p-5 bg-white shadow-lg">
      <div className="flex">
        <div className="avatar">
          <div className="w-24 h-24 mask mask-squircle">
            <img src={profilePict} />
          </div>
        </div>
        <div className="flex flex-col justify-center ml-4">
          <h1 className="font-bold text-lg">{name}</h1>
          <h3 className="text-gray-700">{username}</h3>
        </div>
      </div>
      <div>
        {followed && (
          <button
            className="btn btn-secondary"
            onClick={() => handleUnfollow(id)}
          >
            Unfollow <IoPersonRemoveSharp size={28} className="ml-4" />
          </button>
        )}
        {!followed && (
          <button className="btn btn-accent" onClick={() => handleFollow(id)}>
            Follow <IoPersonAddSharp size={28} className="ml-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
