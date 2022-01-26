import { IoTimerOutline } from "react-icons/io5";

const FeedCard = ({
  name,
  imageUrl,
  createdAt,
  creatorName,
  creatorUserName,
}) => {
  return (
    <div className="border w-1/2 mx-auto p-8 bg-white mb-10">
      <div className="flex justify-between">
        <div className="flex">
          <div class="avatar mr-5">
            <div class="rounded-full w-16 h-16">
              <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-3xl text-base-content">
              {creatorName}
            </h3>
            <p className="text-base-content">{creatorUserName}</p>
          </div>
        </div>
        <div className="text-gray-600 flex">
          <IoTimerOutline className="text-xl mr-2" />
          <p>Posted {createdAt.split("T")[0]}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <h1 className="text-center font-bold text-2xl mb-5">{name}</h1>
        <img src={imageUrl} className="h-full w-full rounded-md" />
      </div>
    </div>
  );
};

export default FeedCard;
