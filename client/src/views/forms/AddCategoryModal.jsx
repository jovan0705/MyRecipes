import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { successAlert } from '../../helpers/alerts.js'
import { addCategory} from '../../store/actionCreators/categoriesCreator.js'

const AddCategoryModal = ({closeModal}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [imageFile, setImageFile] = useState('')

    const addHandlerBtn = (event) => {
        event.preventDefault()
        // console.log(imageFile, '<<<<<<<<<<<<<<<')
        const payload = new FormData()
        payload.append("name", name)
        payload.append("imageUrl", imageFile)

        dispatch(addCategory(payload))
        .then((data) => {
            successAlert('Add category success')
            closeModal(false)
            navigate('/admin/categories')

        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        <div className="modalBackground absolute left-0 top-0 bg-slate-200 bg-opacity-50 h-screen w-screen flex justify-center items-center">
            <div className="modalContainer w-1/3 flex flex-col items-center gap-3 border rounded-lg bg-white shadow-lg p-5">
                <div className="modalHeader">
                    <h1 className="font-bold text-xl">Add Category</h1>
                </div>
                <div className="modalBody flex flex-col w-full">
                    <form className="form-control space-y-3" action="">
                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Name</span></label>
                        <input type="text" name="name" placeholder="Name" className="input input-secondary input-bordered" onChange={(event) => setName(event.target.value)}/>
                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Image</span></label>
                        <input type="file" name="imageFile" placeholder="Image" className="input input-secondary input-bordered" onChange={(event) => setImageFile(event.target.files[0])}/>
                    </form>
                </div>
                <hr />
                <div className="modalFooter flex gap-3">
                    <button class="btn btn-outline btn-primary" onClick={(event) => addHandlerBtn(event)}>Add</button>
                    <button class="btn btn-outline btn-primary" onClick={() => closeModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddCategoryModal