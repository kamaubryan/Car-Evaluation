import React from "react";
import google from "/assets/google-color-svgrepo-com.png";
import Link from "react-router-dom";

function Login() {
  return (
    <div className="w-full flex justify-center items-center h-[100vh] ">
      <div
        className="loginPage  flex flex-col rounded-[20px] w-[460px] h-[550px] p-3  justify-between"
        id="login"
        style={{
          backgroundColor: "#ced4da",
        }}
      >
        <h1 className="text-[40px] text-black flex  font-noto-sans-mono justify-center ">
          Welcome Back!
        </h1>
        <h1></h1>
        <div className="flex flex-col w-[400px] items-center h-[ 100px] gap-4">
          <div className="email flex flex-col h-[80px] gap-2 ">
            <label htmlFor="" className="border-">
              Email
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="email"
              className=" w-[350px] h-[40px] p-2 rounded-[15px] border-none "
              color="#000814"
            />
          </div>
          <div className="password flex flex-col h-[80px] gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=" password"
              id=""
              placeholder="password"
              className=" w-[350px] h-[40px] p-2 rounded-[15px] "
              color="#000814"
            />
          </div>
        </div>
        <div className="checkbox w-[400px] flex items-center px-3 justify-around">
          <div className="input w-[200px] flex gap-2 ">
            <input type="checkbox" name="Rememberme" id="" />
            <label htmlFor="Rememberme">Remember me</label>
          </div>
          <p>Forgot Password</p>
        </div>
        <div className="buttons w-[370px] flex items-center justify-between flex-col h-[90px] px-8">
          <button className=" bg-black text-white w-[350px]  h-[35px] rounded-[15px] text-[18px] ">
            {" "}
            Sign in
          </button>
          <button className=" bg-white text-black w-[350px]  h-[35px] rounded-[15px] text-[18px]  flex items-center justify-center gap-2">
            {" "}
            <img src={google} className="w-[20px] h-[20px]" alt="" /> Sign in
            with Google
          </button>
        </div>
        <div className="footer flex align-bottom justify-center items-center">
          {" "}
          Don't have an account?{" "}
          <span className="text-blue-600 mx-2">
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
