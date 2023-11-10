"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AuthView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter()
 
  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
   const res = await signIn('credentials',{
      email: data.name,
      password: data.password,
      redirect: false,
    })
    // console.log(res)
    if (res.ok){
      return router.push("/results")
    }
    
  })
  return (
    <div className="h-screen mx-5 flex flex-col justify-center items-center ">
      <h1 className="text-center text-zinc-50 text-xl mb-10 font-extrabold">
        NICE TO SEE YOU!
      </h1>
      <form onSubmit={onSubmit}>
      
        <div className="rounded-lg bg-appOrange p-5 mb-5 flex">
          <label className="mx-4 font-bold">Email</label>
          <input className="w-3/5 rounded-lg text-slate-800" type="email"
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
