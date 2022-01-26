



import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerClass } from "../store/actionCreators/classesCreator";
import { successAlert, errorAlert } from "../helpers/alerts";


const ClassCard = ({ id, name, image, link, date, page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toDetail = (id) => {
    navigate(`/classes/${id}`);
  };
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
  const btnRenderHandler = () => {
    if(!page) {
      return <button class="btn btn-primary" onClick={() => handleClick()}>Buy This Class</button>
    }
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
          {link}
        </p>
        <p>{date}</p>
        <div class="card-actions">
          {btnRenderHandler()}
          {/* <button class="btn btn-primary" onClick={() => handleClick()}>Buy This Class</button> */}
          {/* <button class="btn btn-ghost" onClick={() => toDetail(id)}>
            More info
          </button> */}
        </div>
      </div>
    </div>
  );
};



export default ClassCard;
