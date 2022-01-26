import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addIngredient } from '../../store/actionCreators/ingredientsCreator'
import { successAlert } from "../../helpers/alerts";

const AddIngredientModal = ({closeModal}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [addForm, setAddForm] = useState({
        name: '',
        calorie: 0
    })

    const handleInput = (event) => {
        const value = event.target.value
        const name = event.target.name
        setAddForm({
            ...addForm,
            [name]: value
        })
      }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(addIngredient(addForm))
        .then(async () => {
            successAlert('Add ingredient success')
            closeModal(false)
            navigate('/admin/ingredient')
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
                    <h1 className="font-bold text-xl">Add Ingredient</h1>
                </div>
                <div className="modalBody flex flex-col w-full">
                    <form className="form-control space-y-3" onSubmit={(event) => submitHandler(event)}>
                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Name</span></label>
                        <input type="text" name="name" placeholder="Name" className="input input-secondary input-bordered" onChange={(event) => handleInput(event)}/>
                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Calorie</span></label>
                        <input type="number" name="calorie" placeholder="Calorie" className="input input-secondary input-bordered" onChange={(event) => handleInput(event)}/>
                        <div className="modalFooter flex gap-3 py-3">
                            <button type="submit" class="btn btn-outline btn-primary">Add</button>
                            <button class="btn btn-outline btn-primary" onClick={() => closeModal(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default AddIngredientModal