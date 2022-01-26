import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { successAlert } from '../../helpers/alerts.js'
import { fetchCategoriesById, updateCategory } from '../../store/actionCreators/categoriesCreator.js'

const EditCategoryModal = ({closeModal}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { categoriesDetail, categoriesError, categoriesLoading } = useSelector((store) => store.categoryReducer)
    const [name, setName] = useState('')
    const [imageFile, setImageFile] = useState('')
    const { id } = useParams()

    useEffect(() => {
        

        dispatch(fetchCategoriesById(id))

        setName(categoriesDetail.name)
        setImageFile(categoriesDetail.imageUrl)
    }, [id])

    const toCategories = (event) => {
        event.preventDefault()
        navigate('/admin/categories')
    }

    const updateHandlerBtn = (event) => {
        event.preventDefault()
        const payload = new FormData()
        payload.append("name", name)
        payload.append("imageUrl", imageFile)

        dispatch(updateCategory(id, payload))
        .then((data) => {
            successAlert('Update category success')
            closeModal(false)
            navigate('/admin/categories')

        })
        .catch(err => {
            console.log(err)
        })
    }
    if(categoriesError) {
        return (
            <p>error</p>
        )
    }
    if(categoriesLoading) {
        return (
            <p>loading</p>
        )
    }

    return (
        <>
        <div className="modalBackground absolute left-0 top-0 bg-slate-200 bg-opacity-50 h-screen w-screen flex justify-center items-center">
            <div className="modalContainer w-1/3 flex flex-col items-center gap-3 border rounded-lg bg-white shadow-lg p-5">
                <div className="modalHeader">
                    <h1 className="font-bold text-xl">Update Category</h1>
                </div>
                <div className="modalBody flex flex-col w-full">
                    <form className="form-control space-y-3" action="">
                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Name</span></label>
                        <input type="text" name="name" placeholder="Name" className="input input-secondary input-bordered" value={name} onChange={(event) => setName(event.target.value)}/>
                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Image</span></label>
                        <input type="file" name="imageFile" placeholder="Image" className="input input-secondary input-bordered" onChange={(event) => setImageFile(event.target.files[0])}/>
                    </form>
                </div>
                <hr />
                <div className="modalFooter flex gap-3">
                    <button class="btn btn-outline btn-primary" onClick={(event) => updateHandlerBtn(event)}>Update</button>
                    <button class="btn btn-outline btn-primary" onClick={(event) => toCategories(event)}>Cancel</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditCategoryModal