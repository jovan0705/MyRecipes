const CategoryList = () => {
    return (
        <>
        <tr className="text-center">
            <td>1</td>
            <td>
                <div>Burger</div>
            </td>
            <td className="flex justify-center">
                <img className="rounded-full w-14" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="" />
            </td>
            <td className="space-x-3">
                <button className="btn btn-outline btn-secondary text-xs">Delete</button>
                <button className="btn btn-outline btn-primary text-xs">Update</button>
            </td>
        </tr>
        </>

    )
}

export default CategoryList