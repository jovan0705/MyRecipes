import IngredientListAdmin from "../../components/admin/IngredientListAdmin"
import { useState } from "react";
import AddIngredientModal from "../forms/AddIngredientModal";

const IngredientAdmin = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className="overflow-x-auto">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Ingredient</h1>
                <button class="btn btn-outline btn-primary" onClick={() => setShowModal(true)}>Add Ingredient</button>
            </div>
            <table className="table w-full table-zebra border shadow-lg divide-y my-5">
                <thead>
                <tr className="text-center">
                    <th>No</th>
                    <th>Name</th>
                    <th>Calorie</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody className="">
                    <IngredientListAdmin/>
                </tbody>
            </table>
        </div>
        {showModal && <AddIngredientModal closeModal={setShowModal}/>}
        </>
    )
}

export default IngredientAdmin