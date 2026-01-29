import { useState } from "react";
import axios from "axios";
import { serverUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputVal((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = async (e) => {
    try {
      const { email, password } = inputVal;
      e.preventDefault();
      const res = await axios.post(serverUrl + "/api/user/admin", {
        email,
        password,
      });
      if (res.data.success) {
        setToken(res.data.token);
        setInputVal("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel | Sign In</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2 ">
              Email Address
            </p>
            <input
              onChange={handleInputChange}
              value={inputVal.email}
              name="email"
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="admin@email.com"
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2 ">Password</p>
            <input
              value={inputVal.password}
              onChange={handleInputChange}
              name="password"
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="Enter your password."
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
