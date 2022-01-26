import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { successAlert } from '../../helpers/alerts'
import { registerAdmin } from "../../store/actionCreators/userActon"; 

const AddAdmin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const [registerAdminForm, setRegisterAdminForm] = useState({
      name: "",
      username: "",
      email: "",
      password: "",
    });

    const handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setRegisterAdminForm({
          ...registerAdminForm,
          [name]: value,
        });
      };

      const registerHandleBtn = (event) => {
        event.preventDefault();
        dispatch(registerAdmin(registerAdminForm))
          .then((data) => {
            successAlert("Admin registered successfully");
            navigate("/admin");
          })
          .catch((err) => {
            console.log(err);
          });
      };


    return (
        <>
        <div className="container flex justify-center items-center h-screen">
            <div className="w-1/3 bg-white p-5 border rounded-lg shadow-lg">
                <div className="text-center my-3 py-2 text-2xl">
                    <h1 className="font-bold">Add Admin</h1>
                </div>
            <form className="py-5" onSubmit={(event) => registerHandleBtn(event)} >
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
                    required
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
                    required
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
                        required
                      />
                      </div>
                      <div className="">
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
        </>
    )
}

export default AddAdmin