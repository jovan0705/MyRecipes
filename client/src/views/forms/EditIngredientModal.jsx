import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredientsById, updateIngredient } from '../../store/actionCreators/ingredientsCreator'
import { successAlert } from "../../helpers/alerts";

const EditIngredientModal = ({closeModal, itemId}) => {
    const { ingredientsDetail, ingredientsError, ingredientsLoading } = useSelector((store) => store.ingredientsReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const [addForm, setAddForm] = useState({
        name: '',
        calorie: 0
    })

    useEffect(() => {
        dispatch(fetchIngredientsById(id))
        setAddForm({
            name: ingredientsDetail.name,
            calorie: ingredientsDetail.calorie
        })
    }, [id])
    

    const handleInput = (event) => {
        const value = event.target.value
        const name = event.target.name
        setAddForm({
            ...addForm,
            [name]: value
        })
      }

    const updateHandler = (event) => {
        event.preventDefault()
        dispatch(updateIngredient(id, addForm))
        .then(async () => {
            successAlert('Update ingredient success')
            navigate('/admin/ingredient')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const toIngredientsPage = (event) => {
        event.preventDefault()
        navigate('/admin/ingredient')
    }

    return (
        <>
        <div className="modalBackground absolute left-0 top-0 bg-slate-200 bg-opacity-50 h-screen w-screen flex justify-center items-center">
            <div className="modalContainer w-1/3 flex flex-col items-center gap-3 border rounded-lg bg-white shadow-lg p-5">
                <div className="modalHeader">
                    <h1 className="font-bold text-xl">Update Ingredient</h1>
                </div>
                <div className="modalBody flex flex-col w-full">
                    <form className="form-control space-y-3" onSubmit={(event) => updateHandler(event)}>
                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Name</span></label>
                        <input type="text" name="name" placeholder="Name" className="input input-secondary input-bordered" value={addForm.name} onChange={(event) => handleInput(event)}/>
                        <label className="label-text text-gray-500 font-bold" htmlFor=""><span>Calorie</span></label>
                        <input type="number" name="calorie" placeholder="Calorie" className="input input-secondary input-bordered" value={addForm.calorie} onChange={(event) => handleInput(event)}/>
                        <div className="modalFooter flex gap-3 py-3">
                            <button type="submit" class="btn btn-outline btn-primary" >Update</button>
                            <button class="btn btn-outline btn-primary" onClick={(event) => toIngredientsPage(event)}>Cancel</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default EditIngredientModal