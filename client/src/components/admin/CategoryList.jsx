const CategoryList = ({categoryItem}) => {
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
                <button className="btn btn-outline btn-secondary text-xs">Delete</button>
                <button className="btn btn-outline btn-primary text-xs">Update</button>
            </td>
        </tr>
        </>

    )
}

export default CategoryList