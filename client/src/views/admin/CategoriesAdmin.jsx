import CategoryList from "../../components/admin/CategoryList"

const CategoriesAdmin = () => {
    return (
        <>
        <div className="overflow-x-auto">
            <h1 className="font-bold text-2xl">Categories</h1>
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
        
        </>
    )
}

export default CategoriesAdmin