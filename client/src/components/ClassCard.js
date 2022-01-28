


import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserClasses, registerClass, fetchClasses } from "../store/actionCreators/classesCreator";
import { successAlert, errorAlert } from "../helpers/alerts";
import { useEffect, useState } from "react";
import { rupiah } from "../helpers/currencyFormatter";

const ClassCard = ({ id, name, image, link, date, page, price }) => {
  const location = useLocation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { classes } = useSelector((store) => store.classReducer)
  const [bought, setBought] = useState(false)
  useEffect(() => {
    dispatch(fetchUserClasses())
      .then((data) => {
        data.forEach(el => {
          if (el.Class.id === id) {
            setBought(true)
          }
        });
      })
      .catch((err) => {
        console.log(err)
      })
  }, [classes])

  const toDetail = (id) => {
    navigate(`/classes/${id}`);
  };

  const handleClick = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Buy Class!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(registerClass(id))
        .then((data) => {
          if (data.data) {
            dispatch(fetchClasses());
            successAlert(data.data.message)
          } else {
            errorAlert(data.response.data.message)
          }
        })
        .catch((err) => {
          console.log(err, '<<<<< ini err')
        })
      }
    })
    
  }
  const btnRenderHandler = () => {
    if(!bought) {
      return <button class="btn btn-primary" onClick={() => handleClick()}>Buy This Class</button>
    } else {
      return <button class="btn btn-primary">Class already Bought</button>
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
        {(location.pathname === '/classes') ? <p>
          Date
        </p> : <p>
          {link}
        </p>}
        <p>{`${date.split('T')[0]}`}</p>
        {(location.pathname === '/classes') ? <p className="font-bold text-lg my-3">{rupiah(price)}</p> : <p></p>}
        
        
        <div class="card-actions">
          {(location.pathname === '/classes') ? btnRenderHandler() : <p></p>}
          
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
