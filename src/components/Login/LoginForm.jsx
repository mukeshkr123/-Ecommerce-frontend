import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUserAction } from "../../redux/slices/users/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    password: "12345",
  });

  const { email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(LoginUserAction({ email, password }));
  };

  const { loading, userAuth } = {};

  if (userAuth?.userInfo?.status) {
    window.location.href = "/admin";
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blue-200 to-blue-300 overflow-x-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="absolute inset-0 bg-blue-200 my-24 -ml-4 rounded-full" />
        <div className="relative flex flex-wrap bg-white shadow-lg rounded-lg">
          <div className="w-full md:w-4/6 px-4">
            <div className="lg:max-w-3xl mx-auto py-20 px-4 md:px-10 lg:px-20">
              <h3 className="mb-8 text-4xl md:text-5xl font-bold font-heading text-blue-900">
                Welcome Back!
              </h3>
              <p className="mb-10 font-semibold font-heading text-blue-600">
                Login to your account
              </p>
              <form className="flex flex-wrap -mx-4" onSubmit={onSubmitHandler}>
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-12">
                  <label>
                    <h4 className="mb-2 text-gray-500 font-bold font-heading">
                      Your Email
                    </h4>
                    <input
                      name="email"
                      value={email}
                      onChange={onChangeHandler}
                      className="p-3 w-full border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </label>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-12">
                  <label>
                    <h4 className="mb-2 text-gray-500 font-bold font-heading">
                      Password
                    </h4>
                    <input
                      name="password"
                      value={password}
                      onChange={onChangeHandler}
                      className="p-3 w-full border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </label>
                </div>

                <div className="w-full px-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold font-heading py-3 px-6 rounded-md uppercase">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="w-full md:w-2/6 h-128 md:h-auto flex items-center lg:items-end px-4 pb-20 bg-cover bg-no-repeat rounded-lg"
            style={{
              backgroundImage:
                'url("https://cdn.pixabay.com/photo/2017/03/29/04/47/high-heels-2184095_1280.jpg")',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
