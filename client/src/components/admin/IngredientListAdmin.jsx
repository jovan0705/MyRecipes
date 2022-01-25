import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { successAlert } from '../../helpers/alerts.js'
import { deleteIngredient } from '../../store/actionCreators/ingredientsCreator.js'

const IngredientListAdmin = ({ingredientItem}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const deleteHandler = (event, id) => {
        event.preventDefault()
        dispatch(deleteIngredient(id))
        .then(data => {
            successAlert(data.message)
            navigate('/admin/ingredient')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <>
        <tr className="text-center">
            <td>{ingredientItem.id}</td>
            <td>
                <div>{ingredientItem.name}</div>
            </td>
            <td>
                <h4>{ingredientItem.calorie} cal</h4>
            </td>
            <td className="space-x-3">
                <button className="btn btn-outline btn-secondary text-xs" onClick={(event) => deleteHandler(event, ingredientItem.id)}>Delete</button>
                <button className="btn btn-outline btn-primary text-xs">Update</button>
            </td>
        </tr>
        </>

    )
}

export default IngredientListAdmin