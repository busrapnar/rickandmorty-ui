import Input from "@/components/input";
import { Link } from "react-router-dom";
import { signIn } from "@/store/auth/authSlice.ts";
import { useDispatch } from "react-redux";
import { useState } from "react";

type UserInfo = {
  email: string;
  password: string;
};

const Login = () => {
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

  const handleSubmit = (element: any) => {
    element.preventDefault();
    // @ts-ignore
    dispatch(signIn({ ...userInfo }));
  };

  return (
    <div className=" border border-b-white/20 sm:border-t-white/20 shadow-slate-500/10 rounded-lg sm:shadow-sm lg:rounded-xl lg:shadow-none">
      <div className="flex flex-col p-6">
        <h3 className="text-2xl font-semibold leading-6 tracking-tighter">
          Login
        </h3>
        <p className="mt-2 text-base font-medium text-slate-600">
          Welcome, enter your credentials to continue.
        </p>
      </div>
      <div className="p-6 pt-0">
        <form onSubmit={handleSubmit}>
          <div>
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
          </div>
          <div className="mt-4 flex items-center justify-end gap-x-2">
            <Link
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-green-800 h-10 px-4 py-2 duration-200"
              to="/sign-up"
            >
              Register
            </Link>
            <button
              className="font-semibold hover:bg-green-700 hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
