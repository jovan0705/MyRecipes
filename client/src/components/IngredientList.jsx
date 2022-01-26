import { TiMediaRecord } from "react-icons/ti";

const IngredientList = ({ name }) => {
  return (
    <div className="flex items-center gap-3 text-gray-500">
      <span className="">
        <TiMediaRecord />
      </span>
      <p>
        <span className="font-bold">{name}</span>
      </p>
    </div>
  );
};

export default IngredientList;
