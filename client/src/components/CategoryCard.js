import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilter } from "../store/actionCreators/recipesCreator";
const CategoryCard = ({ id, name, imageUrl }) => {a
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setFilter(`?categoryId=${id}`))
    navigate(`/recipes/?categoryId=${id}`)
  }
  return (
    <div className="col-span-1 border bg-white rounded-xl shadow hover:bg-primary  hover:text-white duration-200 ease-in group h-56">
      <div className="text-center p-5 border h-full flex justify-around flex-col">
        <div className="avatar w-24 h-24 mx-auto">
          <div className="rounded-full mx-auto group-hover:opacity-90">
            <img src={imageUrl} />
          </div>
        </div>
        <div className="my-1 font-semibold text-xl hover:cursor-context-menu">
          {name}
        </div>
        <div className="text-primary text-3xl flex justify-center group-hover:text-white duration-200 hover:scale-125 hover:cursor-pointer">
          <IoChevronForwardCircleSharp onClick={() => handleClick()}/>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
