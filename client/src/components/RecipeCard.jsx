import {IoBookmarkOutline, IoHeartOutline} from 'react-icons/io5'

const RecipeCard = () => {
    return (
        <>
            <div className="w-5/12 h-auto border shadow-md flex gap-2 rounded-md">
                <div className="w-1/2 h-52 image overflow-hidden p-2">
                    <img className="h-full w-full mx-auto rounded-md"
                        src="https://images.squarespace-cdn.com/content/v1/5fda67f173ed1f33f0c9a3bc/1608153624258-5Q8LTVG7Y8PY8RSC9T13/MapleBaconBeerBurger.jpg?format=1000w"
                        alt="" />
                </div>
                <div className="w-1/2 py-2 flex flex-col justify-between">
                    <div className="space-y-2">
                        <div className="flex gap-2 py-2 flex-wrap">
                            <div class="badge badge-secondary badge-outline">Cake</div> 
                            <div class="badge badge-accent badge-outline">Burger</div>
                        </div>
                        <div className="">
                            <h3 className="font-bold text-gray-500 text-xl">Beef Burger</h3>
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning"/> 
                            <input type="radio" name="rating-2" checked="checked" className="mask mask-star-2 bg-warning"/> 
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning"/> 
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning"/> 
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning"/>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-xs text-gray-400">Posted by <span className="font-bold">Jane Doe</span></p>
                    </div>
                    <div className='flex flex-row-reverse gap-3 py-2 px-5'>
                        <button className='text-xl text-gray-500 hover:text-yellow-600'><IoBookmarkOutline/></button>
                        <button className='text-xl text-gray-500 hover:text-yellow-600'><IoHeartOutline/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeCard