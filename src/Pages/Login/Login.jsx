// import {Link} from "react-router-dom";
import google from "/assets/google-color-svgrepo-com.png";
// import SignUp from "../Pages/SignUp/SignUp.jsx";

function Login() {
  return (
    <div className="w-full flex justify-center items-center h-[100vh]">
      <div
        className="loginPage flex flex-col rounded-[20px] w-[460px] h-[550px] p-5 justify-between"
        id="login"
        style={{
          backgroundColor: "#ced4da",
        }}
      >
        <h1 className="text-[40px] text-black font-noto-sans-mono text-center">
          Welcome Back!
        </h1>

        <div className="flex flex-col w-[400px] items-center h-[200px] gap-4">
          <div className="email flex flex-col h-[80px] gap-2">
            <label htmlFor="email" className="text-black">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-[350px] h-[40px] p-2 rounded-[15px] border-none focus:outline-none"
            />
          </div>

          <div className="password flex flex-col h-[80px] gap-2">
            <label htmlFor="password" className="text-black">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-[350px] h-[40px] p-2 rounded-[15px] border-none focus:outline-none"
            />
          </div>
        </div>

        <div className="checkbox w-[400px] flex items-center justify-between px-3">
          <div className="input flex items-center gap-2">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label htmlFor="rememberMe" className="text-black">Remember me</label>
          </div>
          <p className="text-black">Forgot Password</p>
        </div>

        <div className="buttons w-[370px] flex items-center justify-between flex-col h-[90px] px-8 gap-4">
          <button className="bg-black text-white w-[350px] h-[40px] rounded-[15px] text-[18px]">
            Sign in
          </button>

          <button className="bg-white text-black w-[350px] h-[40px] rounded-[15px] text-[18px] flex items-center justify-center gap-2">
            <img src={google} className="w-[20px] h-[20px]" alt="Google Logo" />
            Sign in with Google
          </button>
        </div>

        {/* <div className="footer flex justify-center items-center mt-4">
          <span>Don't have an account? </span>
          <span className="text-blue-600 mx-2">
            <Link to="/" className="text-blue-500">
             <SignUp/>
            </Link>
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
