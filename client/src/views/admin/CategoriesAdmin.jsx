import { useState } from "react"
import CategoryList from "../../components/admin/CategoryList"
import AddCategoryModal from "../forms/AddCategoryModal"

const CategoriesAdmin = () => {
    const [showModal, setShowModal] = useState(false)

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
                    <CategoryList/>
                </tbody>
            </table>
        </div>
        {showModal && <AddCategoryModal closeModal={setShowModal}/>}
        </>
    )
}

export default CategoriesAdmin