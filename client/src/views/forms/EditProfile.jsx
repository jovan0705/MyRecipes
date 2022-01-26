import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addIngredient } from '../../store/actionCreators/ingredientsCreator'
import { successAlert } from "../../helpers/alerts";
import { editProfile } from '../../store/actionCreators/userActon'

const EditProfile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [imageFile, setImageFile] = useState('')
    const [description, setDescription] = useState('')
    const {id} = useParams()

    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("name", name);
        fd.append("imageFile", imageFile);
        fd.append("description", description);

        dispatch(editProfile(id, fd))
        .then(data => {
            navigate('/userProfile')
        })
        .catch(err => {
            console.log(err)
        })
    };

    return (
        <>
        <div className="modalBackground h-screen flex justify-center items-center">
            <div className="modalContainer w-1/3 flex flex-col items-center gap-3 border rounded-lg bg-white shadow-lg p-5">
                <div className="modalHeader">
                    <h1 className="font-bold text-xl">Edit Profile</h1>
                </div>
                <div className="modalBody flex flex-col w-full">
                <form
                    className="py-5"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="relative w-full mb-7">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <input
                        type={"text"}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Name"
                        name="name"
                        style={{ transition: "all .15s ease" }}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                    </div>
                    <div className="relative w-full mb-7">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Profile Picture
                      </label>
                      <input
                        type={'file'}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Name"
                        name="imageFile"
                        style={{ transition: "all .15s ease" }}
                        onChange={(event) => setImageFile(event.target.files[0])}
                        required
                      />
                    </div>
                    <div className="form-control mb-10">
                        <label className="label">
                        <span className="label-text text-lg text-base-content">
                            Description
                        </span>
                        </label>
                        <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        name="description"
                        className="textarea h-24 textarea-bordered"
                        required
                        ></textarea>
                    </div>
                    <div>
                        <button
                          className="bg-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Edit
                        </button>
                    </div>
                  </form>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default EditProfile