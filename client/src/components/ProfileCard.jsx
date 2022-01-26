const ProfileCard = ({totalPost, followers, following, item}) => {
    return (
        <>
            {/* <!-- Profile Card --> */}
            <div className="bg-white p-3 border shadow-lg rounded-lg">
                <div className="image overflow-hidden">
                    <img className="h-auto w-full mx-auto rounded-full"
                        src={item.profilePict ? item.profilePict : "https://sharinghappiness.imgix.net/files/149071.png"}
                        alt="" />
                </div>
                <h1 className="text-gray-800 font-bold text-xl leading-8 my-3 text-center">{item.username}</h1>
                <hr className="my-2"/>
                <div className="flex justify-around text-center my-3 text-gray-500 text-sm">
                    <div className="p-3 space-y-2">
                        <h3 className="font-bold">Post</h3>
                        {(totalPost) ? <p className="text-gray-400">{totalPost.length}</p> : <p className="text-gray-400">0</p>}
                        
                    </div>
                    <div className="p-3 space-y-2">
                        <h3 className="font-bold">Followers</h3>
                        <p className="text-gray-400">{followers.length}</p>
                    </div>
                    <div className="p-3 space-y-2">
                        <h3 className="font-bold">Following</h3>
                        <p className="text-gray-400">{following.length}</p>
                    </div>
                </div>
            </div>
            {/* <!-- End of profile card --> */}
        </>
    )
}

export default ProfileCard