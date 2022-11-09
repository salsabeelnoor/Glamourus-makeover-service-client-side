import React, { useContext, useState } from "react";
import img1 from "../../../assets/images/banner/banner5.jpeg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        handleUpdateUserProfile(name, photoURL);
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="grid lg:grid-cols-layout grid-cols-mobile_layout mx-auto container lg:px-0 py-16">
      <div>
        <img
          className="w-full px-3 lg:px-0 mb-5 lg:mb-0 shadow-xl"
          src={img1}
          alt=""
        />
      </div>
      {/* form  */}
      <div className="">
        <div className="lg:mx-10 mx-3 h-full bg-[#f0d7e4] card lg:w-[500px] mb-[-20px] w-auto  border-2 shadow-xl">
          <h2 className="py-5 text-center text-3xl font-bold text-pink-900">
            Please Sign Up
          </h2>
          <div className="card-body pt-0">
            <form onSubmit={handleSignUp}>
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-900">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-900">
                  Your PhotoURL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  className="border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                  placeholder="Your PhotoURL"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-base font-medium text-gray-900">
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
                <label className="block mb-2 text-base font-medium text-gray-900">
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
              <button
                type="submit"
                className="btn w-full bg-pink-700 border-2 border-pink-800 text-white hover:text-white hover:bg-pink-900 hover:border-2"
              >
                Sign Up
              </button>
            </form>
            <div className="mb-3">
              <h2 className="text-base text-red-400 text-left font-medium ">
                {error}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
