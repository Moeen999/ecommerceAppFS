import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Login = () => {
  const { serverURL, token, setToken, navigate } = useContext(ShopContext);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [currState, setCurrState] = useState("Sign In");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currState === "Sign Up") {
        const res = await axios.post(
          serverURL + "/api/user/register",
          inputData,
        );
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        } else {
          toast.error(res.data.message);
        }
      } else {
        const res = await axios.post(serverURL + "/api/user/login", inputData);
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currState === "Sign Up" && (
        <input
          onChange={handleInputChange}
          required
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          name="name"
          value={inputData.name}
        />
      )}
      <input
        onChange={handleInputChange}
        required
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        name="email"
        value={inputData.email}
      />
      <input
        onChange={handleInputChange}
        value={inputData.password}
        required
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        name="password"
      />

      <div className="w-full flex justify-between text-sm mt-[8px]">
        <p>Forgot your password?</p>
        {currState === "Login" ? (
          <p onClick={() => setCurrState("Sign Up")} className="cursor-pointer">
            Create Account
          </p>
        ) : (
          <p onClick={() => setCurrState("Login")} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
