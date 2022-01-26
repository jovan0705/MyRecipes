const ProfileCard = () => {
    return (
        <>
            {/* <!-- Profile Card --> */}
            <div className="bg-white p-3 border shadow-lg rounded-lg">
                <div className="image overflow-hidden">
                    <img className="h-auto w-full mx-auto rounded-full"
                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                        alt="" />
                </div>
                <h1 className="text-gray-800 font-bold text-xl leading-8 my-3 text-center">Jane Doe</h1>
                <hr className="my-2"/>
                <div className="flex justify-between text-center my-3 text-gray-500 text-sm">
                    <div className="p-3 space-y-2">
                        <h3 className="font-bold">Post</h3>
                        <p className="text-gray-400">30</p>
                    </div>
                    <div className="p-3 space-y-2">
                        <h3 className="font-bold">Followers</h3>
                        <p className="text-gray-400">100</p>
                    </div>
                    <div className="p-3 space-y-2">
                        <h3 className="font-bold">Following</h3>
                        <p className="text-gray-400">10</p>
                    </div>
                </div>
            </div>
            {/* <!-- End of profile card --> */}
        </>
    )
}

export default ProfileCard