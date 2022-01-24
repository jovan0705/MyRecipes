import "./styles/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../store/actionCreators/userActon'
import { successAlert } from '../../helpers/alerts'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [registerForm, setRegisterForm] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  const handleInput = (event) => {
    const value = event.target.value
    const name = event.target.name
    setRegisterForm({
        ...registerForm,
        [name]: value
    })
  }

  const registerHandleBtn = (event) => {
    event.preventDefault()
    dispatch(registerUser(registerForm))
    .then( async (data) => {
      console.log(data)
      successAlert('Register Success')
      navigate('/login')
    })
    .catch( async err => {
      console.log(err)
    })

  }

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
                  <div className="text-gray-500 text-center mb-3">
                    <h6 className="text-gray-600 text-xl font-bold mb-2">
                      Welcome
                    </h6>
                    <h6 className="text-gray-400 text-md">
                      Please fill in your personal data
                    </h6>
                  </div>
                  <form className="py-5" onSubmit={(event) => registerHandleBtn(event)}>
                    <div className="relative w-full mb-7">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <input
                        type={"text"}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Name"
                        name="name"
                        style={{ transition: "all .15s ease" }}
                        onChange={(event) => handleInput(event)}
                      />
                    </div>
                    <div className="relative w-full mb-7">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Username
                      </label>
                      <input
                        type={"text"}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Username"
                        name="username"
                        style={{ transition: "all .15s ease" }}
                        onChange={(event) => handleInput(event)}
                      />
                    </div>
                    <div className="relative w-full mb-7">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type={"email"}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        name="email"
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
                        Already have an account?{" "}
                        <Link to="/login" className="font-bold">
                          Login
                        </Link>
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        Register
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

export default Register;
