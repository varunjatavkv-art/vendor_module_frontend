import React from "react";
import { FaGoogle } from "react-icons/fa";

const VSignup = () => {
  return (
    <div className="w-1/2 m-auto h-[550px] rounded-sm shadow-lg mt-5 py-10 px-5">
      <h1 className="text-lg font-bold"> Sign up </h1>
      <form action="" className="">
        <div className="flex flex-col gap-4 pt-5">
          <label htmlFor="name" className="font-semibold">
            User Name *
          </label>
          <input
            type="text"
            placeholder="Please Enter Your Name"
            id="name"
            className="p-2"
          />
        </div>
        <div className="flex flex-col gap-4 pt-5">
          <label htmlFor="email" className="font-semibold">
            User Email *
          </label>
          <input
            type="text"
            placeholder="Please Enter Your Email"
            id="email"
            className="p-2"
          />
        </div>
        <div className="flex flex-col gap-4 pt-5">
          <label htmlFor="password" className="font-semibold">
            User Password *
          </label>
          <input
            type="text"
            placeholder="Please Enter Your Password"
            id="password"
            className="p-2"
          />
        </div>
        <input
          type="button"
          className="w-full bg-blue-500 mt-4 py-2 text-white font-semibold text-md rounded-sm cursor-pointer"
          value="Sign up"
        />
      </form>
      <p className="text-center font-bold text-sm py-4">OR</p>
      <div className="flex items-center justify-center gap-4 cursor-pointer">
        <FaGoogle /> <p className="font-semibold text-sm">Login with Google</p>
      </div>
      <p className="pt-2 text-sm font-semibold text-right">
        Already a User ? <span className="text-blue-500 font-bold pl-2">LOGIN</span>
      </p>
    </div>
  );
};

export default VSignup;
