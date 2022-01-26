import { Link } from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addClass } from "../../store/actionCreators/classesCreator"
import { successAlert } from '../../helpers/alerts.js'

const AddClass = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [addForm, setAddForm] = useState({
        name: '',
        link: '',
        price: 0,
        date: ''
    })
    const [imageFile, setImageFile] = useState('')

    const handleInput = (event) => {
        const value = event.target.value
        const name = event.target.name
        setAddForm({
            ...addForm,
            [name]: value
        })
    }

    const addHandlerBtn = (event) => {
        event.preventDefault()
        const payload = new FormData()
        payload.append("name", addForm.name)
        payload.append("imageFile", imageFile)
        payload.append("link", addForm.link)
        payload.append("price", addForm.price)
        payload.append("date", addForm.date)

        dispatch(addClass(payload))
        .then((data) => {
            successAlert('Add Class success')
            navigate('/admin/class')
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
                    <h1 className="font-bold text-xl">Add Class</h1>
                </div>
                <div className="modalBody flex flex-col w-full">
                    <form className="form-control space-y-3" action="" onSubmit={addHandlerBtn}>
                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Name</span></label>
                        <input type="text" name="name" placeholder="Name" className="input input-secondary input-bordered" onChange={(event) => handleInput(event)}/>

                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Image</span></label>
                        <input type="file" name="imageFile" placeholder="Image" className="input input-secondary input-bordered" onChange={(event) => setImageFile(event.target.files[0])}/>

                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Link</span></label>
                        <input type="text" name="link" placeholder="Image" className="input input-secondary input-bordered" onChange={(event) => handleInput(event)}/>

                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Price</span></label>
                        <input type="number" name="price" placeholder="Image" className="input input-secondary input-bordered" onChange={(event) => handleInput(event)}/>

                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Date</span></label>
                        <input type="date" name="date" placeholder="Image" className="input input-secondary input-bordered" onChange={(event) => handleInput(event)}/>
                        <div className="modalFooter flex gap-3">
                            <button type="submit" class="btn btn-outline btn-primary">Add</button>
                            <button class="btn btn-outline btn-primary"><Link to='/admin/class'>Cancel</Link></button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default AddClass