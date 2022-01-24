import IngredientList from "../components/IngredientList"
import MethodsList from "../components/MethodsList"
import { IoStarOutline } from "react-icons/io5";
import Rating from "../components/Rating";
import ReviewList from "../components/ReviewList";

const RecipeDetail = () => {
    
    return (
        <>
        
        <div class="text-gray-700 body-font overflow-hidden border shadow-lg">
        <div class="container mx-auto">
            <div class="mx-auto h-auto">
                <img alt="ecommerce" class="w-full object-cover object-center rounded border border-gray-200 h-96 " src="https://images.squarespace-cdn.com/content/v1/5fda67f173ed1f33f0c9a3bc/1608153624258-5Q8LTVG7Y8PY8RSC9T13/MapleBaconBeerBurger.jpg?format=1000w" />
                <div class="w-full mt-6 px-5 space-y-3 pb-7 rounded-md">
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Beef Burger</h1>
                    <div class="flex mb-4">
                        <div className="rating rating-sm">
                            <Rating/>
                        </div>
                            <span class="text-gray-600 ml-3">4 Reviews</span>
                    </div>
                    <hr className="" />
                    <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    <div class="flex flex-col mt-6 gap-5">
                        {/* ingredient start */}
                        <div class="flex flex-col gap-2">
                            <h2 class="text-lg title-font text-gray-500 tracking-widest">Ingredient</h2>
                            <div className="ml-4">
                                <IngredientList/>
                                <IngredientList/>
                                <IngredientList/>
                                <IngredientList/>
                                <IngredientList/>
                            </div>
                        </div>
                        <div>
                            <h2 class="text-lg title-font text-gray-500 tracking-widest">Methods</h2>
                            <div className="ml-4">
                                <MethodsList/>
                                <MethodsList/>
                                <MethodsList/>
                                <MethodsList/>
                                <MethodsList/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="my-5 border shadow-lg p-5 text-gray-700">
        <div className="flex gap-3 items-center">
            <p className="text-yellow-500 text-xl"><IoStarOutline/></p>
            <h1 className="font-bold">Review & Rating</h1>  
        </div>
        <hr className="my-3" />
        <div>
            <ReviewList/>
            <ReviewList/>
            <ReviewList/>
            <ReviewList/>
        </div>
    </div>
    </>
    )
}

export default RecipeDetail