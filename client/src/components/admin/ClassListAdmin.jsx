import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { successAlert } from '../../helpers/alerts.js'
import { deleteClass } from '../../store/actionCreators/classesCreator'

const ClassListAdmin = ({setShowModal, classItem}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const deleteHandlerBtn = (event, id) => {
        event.preventDefault()
        dispatch(deleteClass(id))
        .then(data => {
            successAlert('Delete Class Success')
            navigate('/admin/class')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const toUpdatePage = (event, id) => {
        event.preventDefault()
        navigate(`/admin/class/update/${id}`)
    }

    return (
        <>
        <tr className="text-center">
            <td>{classItem.id}</td>
            <td>
                <div>{classItem.name}</div>
            </td>
            <td className="">
                {classItem.link}
            </td>
            <td className="space-x-3">
                <button className="btn btn-outline btn-secondary text-xs" onClick={(event) => deleteHandlerBtn(event, classItem.id)}>Delete</button>
                <button className="btn btn-outline btn-primary text-xs" onClick={(event) => toUpdatePage(event, classItem.id)}>Update</button>
                <button className="btn btn-outline btn-primary text-xs" onClick={() => setShowModal(true)}>Detail</button>
            </td>
        </tr>
        </>
    )
}

export default ClassListAdmin