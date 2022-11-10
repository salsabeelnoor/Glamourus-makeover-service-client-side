import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/images/banner/banner8.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import PageTitle from "../../Shared/Header/PageTitle/PageTitle";
const Login = () => {
  const [error, setError] = useState("");
  const { login, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //google Sign in
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //sign in with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          uid: user.uid,
        };
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="bg-pink-100">
      <PageTitle title={"Login"}></PageTitle>
      <div className="grid lg:grid-cols-layout grid-cols-mobile_layout mx-auto container lg:px-0 py-16">
        <div>
          <img
            className="w-full shadow-lg px-3 lg:px-0 mb-5 lg:mb-0"
            src={img}
            alt=""
          />
        </div>
        {/* form  */}
        <div className="">
          <div className="lg:mx-10 mx-3 h-full bg-[#ebcadb] card lg:w-[500px] w-auto  border-2 shadow-xl ">
            <h2 className="py-4 text-center text-3xl font-bold text-pink-900">
              Please Login
            </h2>
            <div className="card-body pt-0">
              <form onSubmit={handleLogin} className="flex flex-col">
                <div className="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="password"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                    placeholder="Your Password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <h2 className="text-base text-red-400 text-left font-medium ">
                    {error}
                  </h2>
                </div>
                <button
                  type="submit"
                  className="btn w-full bg-pink-700 border-2 border-pink-800 text-white hover:text-white hover:bg-pink-900 hover:border-2"
                >
                  Submit
                </button>
              </form>
              <div className="mb-3">
                <h2 className=" text-sm  text-gray-800 mt-2 text-center">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-pink-900 font-medium">
                    Sign Up
                  </Link>
                </h2>
                <h2 className=" text-base font-medium text-gray-900 mt-3 text-center">
                  Also Log in With
                </h2>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn my-3 w-full bg-pink-700 border-2 border-pink-800 text-white hover:text-white hover:bg-pink-900 hover:border-2"
                >
                  <FaGoogle className="mr-2"></FaGoogle>
                  <h2>Google</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
