import IngredientListAdmin from "../../components/admin/IngredientListAdmin"
import { useState } from "react";


const IngredientAdmin = () => {
    return (
        <>
        <div className="overflow-x-auto">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Ingredient</h1>
                <button class="btn btn-outline btn-primary">Add Ingredient</button>
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
        </>
    )
}

export default IngredientAdmin