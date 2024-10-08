import React, { useState } from "react";

const Login = () => {
  const [currentSatate, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentSatate}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentSatate === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full py-2 px-3 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full py-2 px-3 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full py-2 px-3 border border-gray-800"
        placeholder="Password"
        required
      />
      {currentSatate === "Login" ? (
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p></p>
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        </div>
      ) : (
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot Your Password?</p>
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        </div>
      )}
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentSatate === "Login" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
};

export default Login;
