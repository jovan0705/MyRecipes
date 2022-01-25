import { useDispatch, useSelector } from "react-redux";
import { registerClass } from "../store/actionCreators/classesCreator";
import { successAlert, errorAlert } from "../helpers/alerts";

const ClassCard = ({ id, name, image }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(registerClass(id))
      .then((data) => {
        if (data.data) {
          successAlert(data.data.message)
        } else {
          console.log(data.response.data.message, '<<<<<< ini err')
          errorAlert(data.response.data.message)
        }
      })
      .catch((err) => {
        console.log(err, '<<<<< ini err')
      })
  }
  return (
    <div className="border border-primary flex col-span-1 rounded-xl overflow-hidden">
      <div className="flex-1 rounded-xl">
        <img src={image} />
      </div>
      <div class="flex-1 flex flex-col p-5">
        <h2 class="card-title">
          {name}
          <div class="badge mx-2">NEW</div>
        </h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div class="card-actions">
          <button class="btn btn-primary" onClick={() => handleClick()}>Buy This Class</button>
          <button class="btn btn-ghost">More info</button>
        </div>
      </div>
    </div>
  );
};



export default ClassCard;
