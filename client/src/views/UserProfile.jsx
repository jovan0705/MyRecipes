import ClassCardProfile from "../components/ClassCardProfile";
import ProfileCard from "../components/ProfileCard";
import ProfileDetail from "../components/ProfileDetail";
import RecipeCard from "../components/RecipeCard";
import TopNavbar from "../components/TopNavbar";

const UserProfile = () => {
  return (
    <>
      <div className="container mx-auto py-10 ">
        <TopNavbar />
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-3/12 md:mx-2">
            <ProfileCard />
            <ClassCardProfile />
          </div>
          {/* <!-- Left Side end--> */}
          {/* <!-- Right Side --> */}
          <div className="w-full md:w-9/12 mx-2 h-64">
            <ProfileDetail />
            <div className="bg-white border p-5 shadow-md rounded-lg">
              <div>
                <h1 className="font-bold text-gray-600">Post</h1>
              </div>
              <hr className="my-3" />
              {/* <div className="grid grid-cols-3 gap-10 p-3">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
              </div> */}
            </div>
            {/* <!-- End of profile tab --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
