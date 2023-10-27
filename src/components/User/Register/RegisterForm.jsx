import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../../redux/slices/users/userSlice";
import LoadingComponent from "../../LoadingComponent";
import ErrorMsg from "../../ErrorMessage";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { fullname, email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUserAction({ fullname, email, password }));
  };

  // get user from the store
  const { user, error, loading } = useSelector((state) => state?.users);

  //redirect
  if (user) {
    // window.location.href = "/login";
  }

  return (
    <section className="relative overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
            <div className="py-20 text-center">
              <h3 className="mb-8 text-4xl md:text-5xl font-bold font-heading">
                Signing up with social is super quick
              </h3>

              {/* Error  */}
              {error && <ErrorMsg message={error?.message} />}

              <p className="mb-10">Please, do not hesitate</p>
              <form onSubmit={onSubmitHandler}>
                <input
                  name="fullname"
                  value={fullname}
                  onChange={onChangeHandler}
                  className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  name="email"
                  value={email}
                  onChange={onChangeHandler}
                  className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                  type="email"
                  placeholder="Enter your email"
                />
                <input
                  name="password"
                  value={password}
                  onChange={onChangeHandler}
                  className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                  type="password"
                  placeholder="Enter your password"
                />

                {loading ? (
                  <LoadingComponent />
                ) : (
                  <button className="mt-12 md:mt-16 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                    Register
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block lg:absolute top-0 bottom-0 right-0 lg:w-3/6 bg-center bg-cover bg-no-repeat m-4 rounded-md"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/4199523/pexels-photo-4199523.jpeg")',
        }}
      />
    </section>
  );
};

export default RegisterForm;
