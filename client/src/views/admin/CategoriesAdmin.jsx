import { useState, useEffect } from "react"
import CategoryList from "../../components/admin/CategoryList"
import AddCategoryModal from "../forms/AddCategoryModal"
import EditCategoryModal from "../forms/EditCategoryModal"
import { fetchCategories } from '../../store/actionCreators/categoriesCreator'
import { useDispatch, useSelector } from "react-redux"
import CategoryCardLoading from '../../components/CategoryCardLoading.js'

const CategoriesAdmin = () => {
    const [showModal, setShowModal] = useState(false)
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const { categories, categoriesError, categoriesLoading } = useSelector((store) => store.categoryReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    if(categoriesLoading) {
        return (
            <CategoryCardLoading/>
        )
    }

    return (
        <>
        <div className="overflow-x-auto">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Category</h1>
                <button class="btn btn-outline btn-primary" onClick={() => setShowModal(true)}>Add Category</button>
            </div>
            <table className="table w-full table-zebra border shadow-lg divide-y my-5">
                <thead>
                <tr className="text-center">
                    <th>No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody className="">
                    {categories.map(el => {
                        return (
                            <CategoryList categoryItem={el} editForm={setShowUpdateModal} key={el.id}/>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
        {showModal && <AddCategoryModal closeModal={setShowModal}/>}
        {showUpdateModal && <EditCategoryModal closeModal={setShowUpdateModal}/>}
        </>
    )
}

export default CategoriesAdmin