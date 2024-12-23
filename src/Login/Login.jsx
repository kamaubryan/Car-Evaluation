import React from "react";

function Login() {
  return (
    <div className="w-full flex justify-center items-center h-[100vh] ">
      <div
        className="loginPage  flex flex-col align-middle rounded-[20px] w-[600px] h-[500px] p-3  gap-4"
        id="login"
        style={{
          backgroundColor: "#ced4da",
        }}
      >
        <h1 className="text-[40px] text-black flex  font-noto-sans-mono justify-center ">
          Welcome Back!
        </h1>
        <div className="flex flex-col w-[400px] items-center h-[ 100px] gap-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="email"
            className=" w-[300px] h-[40px] p-2 rounded-[15px] "
            color="#000814"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            className=" w-[300px] h-[40px] p-2 rounded-[15px] "
            color="#000814"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
