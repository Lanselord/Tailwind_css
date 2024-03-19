import React from "react";
import LoginImg from "./img/login.png"
import google from "./img/iconfinder_Google_1298745 1.svg"

function App() {
  return (
    <>
      <div className="min-h-screen py-7 px-56 ">
        <div className="container mx-auto flex items-center justify-center max-xl:flex-col">
          <img src={LoginImg} alt="LoginImg" />
          <div className="w-98 ml-[193px] max-lg:mt-[100px] text-center mr-[80px]">
            <form className="max-xl:mt-[-700px] ml-[-50px] max-lg:w-64 text-start">

              <div className=" mb-5">
                <h4>Welcome back</h4>
                <h1 className="text-block text-3xl font-bold">Login to your account</h1>
              </div>

              <div>
                <label className="block to- mb-2 text-lg cursor-pointer" htmlFor="password">Password</label>
                <input className="border max-h-13 mb-5 w-96 text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-500 rounded-lg max-lg:w-64" type="text" id="password" placeholder="*********" />
              </div>

              <div>
                <label className="block to- mb-2 text-lg cursor-pointer" htmlFor="Email">Email</label>
                <input className="border max-h-13 mb-4 w-96 text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-500 rounded-lg max-lg:w-64" type="text" id="Email" placeholder="John.snow@gmail.com" />
              </div>
              <div className="flex w-98 items-center justify-between ">
                <div className="flex items-center ">
                  <input className="cursor-pointer" type="checkbox" />
                  <label className="text-sm">Remember Me</label>
                </div>
                <a className="text-violet-400 text-sm" href="#link">Forgot password?</a>
              </div>
              <button className="text-white max-h-13 bg-green-500 py-3 w-96 mt-5 hover:border-zinc-950 drounded-lg border-none rounded-md mt-0 p-0 mt-[27px] max-lg:w-64" type="submit">Login now</button>
              <button className="text-white max-h-13 bg-slate-800 py-3 w-96 mt-5 flex items-center justify-center gap-3 rounded-lg border-none hover:bg-slate-900 max-lg:w-64"><img src={google} alt="" /> Or sign-in with google</button>
            </form>
            <div className="flex items-center justify-center gap-1 translate-y-14">
              <p className="text-sm">Dont have an account?</p>
              <p className="text-sm text-blue-500">Join free today</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;