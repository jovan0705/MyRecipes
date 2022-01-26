import ClassCardProfile from "../components/ClassCardProfile";
import ProfileCard from "../components/ProfileCard";
import ProfileDetail from "../components/ProfileDetail";
import RecipeCard from "../components/RecipeCard";
import TopNavbar from "../components/TopNavbar";
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {fetchUserProfile} from '../store/actionCreators/userActon'
import { fetchUserRecipes} from '../store/actionCreators/userRecipesCreator'
import { fetchUserClasses } from '../store/actionCreators/classesCreator'
import { fetchUserFollowers, fetchUserFollowing } from "../store/actionCreators/usersCreator";


const UserProfile = () => {
  const { userReducer, userRecipesReducer, classReducer, usersReducer} = useSelector((store) => store);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserProfile())
    dispatch(fetchUserRecipes())
    dispatch(fetchUserClasses())
    dispatch(fetchUserFollowing())
    dispatch(fetchUserFollowers())
  }, [])

  // const totalPost =() => {
  //   if(userRecipesReducer.userRecipes.userCreatedRecipes.length > 0) {
  //     return userRecipesReducer.userRecipes.userCreatedRecipes.length
  //   } else {
  //     return 0
  //   }
  // }


  return (
    <>
      <div className="container mx-auto py-10 ">
        <TopNavbar />
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-3/12 md:mx-2">
            <ProfileCard totalPost={userRecipesReducer.userRecipes.userCreatedRecipes} item={userReducer.user} followers={usersReducer.userFollowers} following={usersReducer.userFollowing}/>
          </div>
          {/* <!-- Left Side end--> */}
          {/* <!-- Right Side --> */}
          <div className="w-full md:w-9/12 mx-2 h-64">
            <ProfileDetail item={userReducer.user}/>
            <div className="bg-white border p-5 shadow-md rounded-lg">
              <div>
                <h1 className="font-bold text-gray-600">Post</h1>
              </div>
              <hr className="my-3" />
              <div className="grid grid-cols-3 gap-10 p-3">
                {userRecipesReducer.userRecipes.userCreatedRecipes && userRecipesReducer.userRecipes.userCreatedRecipes.map(el => {
                  return (
                    <RecipeCard 
                      key={el.id}
                      id={el.id}
                      imageUrl={el.imageUrl}
                      name={el.name}
                      totalCalories={el.totalCalories}
                      userId={el.userId}
                      category={el.Category.name}
                      user={el.User.name}
                      rating={el.RecipeRatings}
                    />
                  )
                })}
              </div>
            </div>
            {/* <!-- End of profile tab --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
