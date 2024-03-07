import Input from "@/components/input";
import { Link } from "react-router-dom";
import { authDataStore, signUp } from "@/store/auth/authSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

type UserInfo = {
  email: string;
  password: string;
};

const Register = () => {
  const { isLoading } = useSelector(authDataStore);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handlerEmail = (e: any) => {
    setUserInfo((user: UserInfo) => ({ ...user, email: e.target.value }));
  };

  const handlerPassword = (e: any) => {
    setUserInfo((user: UserInfo) => ({ ...user, password: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(signUp({ ...userInfo }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center min-w-max mx-auto overflow-hidden rounded-lg lg:max-w-5xl">
      <div className="w-full px-6 py-8 md:px-8 ">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Welcome
        </h2>
        <p className="mt-2 text-xl text-center text-gray-600">
          Join
          <span className="text-green-600 font-semibold p-3">
            Rick and Morty
          </span>
          Community
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 h-px bg-gradient-to-r from-green-200 to-green-400  lg:w-1/4"></span>
          <span className="text-xs text-center text-gray-500 uppercase">
            use your email
          </span>
          <span className="w-1/5 h-px bg-gradient-to-r from-green-200 to-green-500  lg:w-1/4"></span>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            title="E-mail Adress"
            value={userInfo.email}
            onChange={handlerEmail}
          />
          <Input
            name="password"
            type="password"
            title="Password"
            value={userInfo.password}
            onChange={handlerPassword}
          />
          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-4 py-2 shadow-md transition-colors duration-300 transform rounded-md hover:bg-gray-700/70 hover:text-white"
            >
              {isLoading ? "Loadding..." : "Register"}
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  md:w-1/4"></span>
          <Link
            to="/sign-in"
            className="text-xs text-gray-700 uppercase  hover:underline"
          >
            Do you have an account?
          </Link>
          <span className="w-1/5 border-b md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
