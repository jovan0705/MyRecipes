import "./styles/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/actionCreators/userActon";
import { successAlert } from "../../helpers/alerts";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const loginHandleBtn = (event) => {
    event.preventDefault();
    dispatch(login(loginForm))
      .then((data) => {
        localStorage.setItem("access_token", data.accessToken);
        successAlert("Login Success");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="absolute w-full h-full">
        <div className="absolute top-0 w-full h-full bg-gray-900 background-container"></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-end h-full">
            <div className="w-full lg:w-5/12 px-4 mx-10">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                <div className="rounded-t mb-0 px-6 py-6"></div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <h6 className="text-gray-600 text-xl font-bold">
                      Welcome back
                    </h6>
                  </div>
                  <form
                    className="py-5"
                    onSubmit={(event) => loginHandleBtn(event)}
                  >
                    <div className="relative w-full mb-7">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email / Username
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email or Username"
                        name="emailOrUsername"
                        style={{ transition: "all .15s ease" }}
                        onChange={(event) => handleInput(event)}
                      />
                    </div>

                    <div className="relative w-full mb-7">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        name="password"
                        style={{ transition: "all .15s ease" }}
                        onChange={(event) => handleInput(event)}
                      />
                    </div>

                    <div>
                      <p>
                        Don't have an account yet?{" "}
                        <Link to="/register" className="font-bold">
                          Register
                        </Link>{" "}
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
