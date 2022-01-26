import { useNavigate } from 'react-router-dom'

const ProfileDetail = ({item}) => {
    const navigate = useNavigate()
    const toEdit = (e, id) => {
        e.preventDefault()
        navigate(`/users/editProfile/${id}`)
    }
    return (
        <>
            <div className="bg-white p-3 shadow-md rounded-lg mb-5 border">
                <div className="flex items-center justify-between space-x-2 font-semibold text-gray-900 p-3 ">
                    <h3 className="font-bold text-3xl">My Profile</h3>
                    <a className="text-sm hover:text-primary pointer" href='' onClick={(e) => toEdit(e, item.id)}>Edit Profile</a>
                </div>
                <hr className="bg-gray-400" />
                <div className="text-gray-700 py-3 flex">
                    <div className="w-1/2 p-3">
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6 ">{item.description ? item.description : 'Insert your bio...'  }</p>
                    </div>
                    <div className="w-1/2 p-3 text-sm flex space-x-10 justify-center items-center">
                        <div className="space-y-2 font-semibold">
                            <h4 className="text-gray-500 hover:text-gray-600">Name :</h4>
                            <h4 className="text-gray-500 hover:text-gray-600">Username :</h4>
                            <h4 className="text-gray-500 hover:text-gray-600">Email :</h4>
                        </div>
                        <div className="space-y-2 text-gray-500">
                            <p>{item.name}</p>
                            <p>{item.username}</p>
                            <p>{item.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDetail