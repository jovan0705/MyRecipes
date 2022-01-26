import Rating from "../components/Rating";

const ReviewList = () => {
    return (
        <>
        <div className="flex gap-3 my-5">
            <div className="w-1/12 px-3">
                <img className="rounded-full" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="" />
            </div>
            <div className="space-y-1">
                <h1 className="font-bold">Jane Doe</h1>
                <div className="flex gap-5">
                    <div className="rating rating-xs">
                        <Rating/>
                    </div>
                    <p className="text-xs text-gray-500">22 Januari 2022</p>
                </div>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, dignissimos aperiam voluptatem a sit odit minus. Nobis quis provident voluptatibus.</p>
            </div>
        </div>
        <hr />
        </>
    )
}

export default ReviewList