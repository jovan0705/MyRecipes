import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedCard from "../components/FeedCard";
import { fetchFeeds } from "../store/actionCreators/userActon";
import EmptyState from "../components/EmptyState";

const Feed = () => {
  const dispatch = useDispatch();
  const { userReducer } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchFeeds());
  }, []);
  
  return (
    <div className="min-h-screen py-10">
      <h1 className="heading text-center">Feeds</h1>
      {userReducer.feeds.length === 0 && (
        <EmptyState message="Follow more people to discover feeds" />
      )}
      {userReducer.feeds.length > 0 && 
        userReducer.feeds.map(({ id, name, imageUrl, createdAt, User }) => {
          return (
            <FeedCard
              key={id}
              name={name}
              imageUrl={imageUrl}
              createdAt={createdAt}
              creatorName={User.name}
              creatorUserName={User.username}
              profilePict={User.profilePict}
            />
          );
        })
      }
    </div>
  );
};

export default Feed;
