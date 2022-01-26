import ClassListAdmin from "../../components/admin/ClassListAdmin"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import ClassAdminDetail from "../../components/admin/classAdminDetail";
import {fetchClasses} from '../../store/actionCreators/classesCreator.js'

const ClassesAdminPage = () => {
    const [showModal, setShowModal] = useState(false)
    const { classes, classesError, classesLoading } = useSelector((store) => store.classReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchClasses())
    }, [])

    return (
        <>
            <div className="overflow-x-auto">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Classes</h1>
                <button class="btn btn-outline btn-primary"><Link to='/admin/addClass'>Add Class</Link></button>
            </div>
            <table className="table w-full table-zebra border shadow-lg divide-y my-5">
                <thead>
                <tr className="text-center">
                    <th>No</th>
                    <th>Name</th>
                    <th>Link</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody className="">
                    {classes.map(el => {
                        return (
                            <ClassListAdmin classItem={el} setShowModal={setShowModal} key={el.id}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
        {showModal && <ClassAdminDetail setShowModal={setShowModal}/>}
        </>
    )
}

export default ClassesAdminPage