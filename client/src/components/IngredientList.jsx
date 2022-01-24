import { TiMediaRecord } from "react-icons/ti";

const IngredientList = () => {
    return (
        <div className="flex items-center gap-3 text-gray-500">
            <span className=""><TiMediaRecord/></span>
            <p><span className="font-bold">200 gr</span> Beef</p>
        </div>
    )
}

export default IngredientList