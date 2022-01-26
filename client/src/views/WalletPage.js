import "./styles/CardStyle.css";
import BalanceCard from "../components/BalanceCard";
import Swal from "sweetalert2";
import { errorAlert } from "../helpers/alerts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doTopUp, fetchUserProfile, successTopUp } from "../store/actionCreators/userActon";
import { useLocation, useNavigate } from "react-router-dom";
const WalletPage = () => {
  const params = useLocation().search
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    if (params !== "") {
      dispatch(successTopUp())
        .then(() => {
          navigate('/wallet')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);
  // const snap = new midtransClient.Snap({
  //   isProduction: false,
  //   serverKey: "SB-Mid-server-ejgmiwXrRhnl5dmLoTS4EqjW",
  //   clientKey: "SB-Mid-client-Wx0wsfVcdFXofYDR",
  // });
  const { userReducer } = useSelector((store) => store);
  const handleClick = async () => {
    const { value: amount } = await Swal.fire({
      title: "Top Up Amount",
      input: "text",
      width: 800,
      height: 1000,
      inputLabel: "Minimum Rp 10.000",
      position: "center",
      allowEnterKey: true,
    });

    if (amount) {
      if (isNaN(+amount)) {
        errorAlert("Please input number");
      } else {
        dispatch(doTopUp(amount))
          .then((data) => {
            console.log(data);
            window.snap.pay(data.token);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <BalanceCard
        name={userReducer.user.name}
        balance={userReducer.user.balance}
      />
      <div>
        <button class="btn btn-accent mt-10" onClick={handleClick}>
          Top Up
        </button>
      </div>
    </div>
  );
};

export default WalletPage;
