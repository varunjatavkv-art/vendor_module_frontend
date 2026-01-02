import React from "react";

const VLogin = () => {
  return (
    <div className="w-1/2 m-auto rounded-sm shadow-lg mt-[100px] py-10 px-5">
      <h1 className="text-lg font-bold"> Log In </h1>
      <form action="" className="">
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
          value="Log in"
        />
      </form>
     
    </div>
  );
};

export default VLogin;
