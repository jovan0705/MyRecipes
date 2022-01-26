import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { successAlert } from '../../helpers/alerts.js'
import { deleteCategory } from '../../store/actionCreators/categoriesCreator'

const CategoryList = ({categoryItem, editForm}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const deleteHandler = (event, id) => {
        event.preventDefault()
        dispatch(deleteCategory(id))
        .then(data => {
            successAlert(data.message)
            navigate('/admin/categories')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const toUpdatePage = (event, id) => {
        event.preventDefault()
        editForm(false)
        navigate(`/admin/categories/${id}`)
    }


    return (
        <>
        <tr className="text-center">
            <td>{categoryItem.id}</td>
            <td>
                <div>{categoryItem.name}</div>
            </td>
            <td className="flex justify-center">
                <img className="rounded-full w-14 h-14" src={categoryItem.imageUrl} alt="" />
            </td>
            <td className="space-x-3">
                <button className="btn btn-outline btn-secondary text-xs" onClick={(event) => deleteHandler(event, categoryItem.id)}>Delete</button>
                <button className="btn btn-outline btn-primary text-xs" onClick={(event) => toUpdatePage(event, categoryItem.id)}>Update</button>
            </td>
        </tr>
        </>

    )
}

export default CategoryList