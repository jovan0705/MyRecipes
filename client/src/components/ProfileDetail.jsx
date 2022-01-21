const ProfileDetail = () => {
    return (
        <>
            <div className="bg-white p-3 shadow-md rounded-lg mb-5 border">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 p-3 ">
                    <h3 className="font-bold text-3xl">My Profile</h3>
                </div>
                <hr className="bg-gray-400" />
                <div className="text-gray-700 py-3 flex">
                    <div className="w-1/2 p-3">
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6 ">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                    </div>
                    <div className="w-1/2 p-3 text-sm flex space-x-10 justify-center items-center">
                        <div className="space-y-2 font-semibold">
                            <h4 className="text-gray-500 hover:text-gray-600">Name :</h4>
                            <h4 className="text-gray-500 hover:text-gray-600">Username :</h4>
                            <h4 className="text-gray-500 hover:text-gray-600">Email :</h4>
                        </div>
                        <div className="space-y-2 text-gray-500">
                            <p>Jane Doe</p>
                            <p>Aulag</p>
                            <p>janeDoe@mail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDetail