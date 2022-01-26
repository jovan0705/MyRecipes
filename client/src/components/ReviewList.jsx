import Rating from "../components/Rating";

const ReviewList = ({ user, rating, review, createdAt }) => {
  return (
    <>
      <div className="flex gap-3 my-5">
        <div className="w-1/12 px-3">
          <img
            className="rounded-full"
            src={user.profilePict}
            alt="Profile Picture"
          />
        </div>
        <div className="space-y-1">
          <h1 className="font-bold">{user.name}</h1>
          <div className="flex gap-5">
            <div className="rating rating-xs">
              {Array(rating).fill(<Rating />)}
            </div>
            <p className="text-xs text-gray-500">{createdAt.split('T')[0]}</p>
          </div>
          <p className="text-gray-500">{review}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ReviewList;
