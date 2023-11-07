"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import Link from "next/link";

const AuthView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
   const res = await signIn('credentials',{
      name: data.name,
      password: data.password,
      redirect: false,
    })
    console.log(res)
  })
  return (
    <div className="h-screen mx-5 flex flex-col justify-center items-center ">
      <h1 className="text-center text-zinc-50 text-xl mb-10 font-extrabold">
        NICE TO SEE YOU!
      </h1>
      <form onSubmit={onSubmit}>
      
        <div className="rounded-lg bg-appOrange p-5 mb-5 flex">
          <label className="mx-4 font-bold">Username</label>
          <input className="w-3/5 rounded-lg text-slate-800" type="text"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
          })} />
        </div>
        <div className="rounded-lg bg-appOrange p-5 mb-20 flex">
          <label className="mx-4 font-bold">Password</label>
          <input className="w-3/5 rounded-lg text-slate-800" type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })} />
        </div>
        <div className="rounded-lg bg-appOrange p-8 mb-5 flex justify-center items-center">
          <button className="text-zinc-50 text-3xl font-semibold">Login</button>
        </div>
      </form>
      <Link href="/">
        <button className="bg-appOrange rounded-lg mt-3 px-6 font-semibold">
          Back
        </button>
      </Link>
    </div>
  );
};

export default AuthView;
