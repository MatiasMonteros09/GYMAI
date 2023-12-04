"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SigninForm = () => {
  const router = useRouter();
  // const session = useSession();
  // console.log(session.data);

  // if (session.data){
  //   router.push("/create");
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.name,
      password: data.password,
      redirect: false,
    });


    res.ok
      ? (toast.success('Welcome!!'),
        reset(),
        "continue.html",
        router.push("/create"),
        router.refresh())
      : toast.error(res.error);
  });
  return (
    <div className="h-screen mx-5 flex flex-col justify-center items-center ">
      <h1 className="text-center text-zinc-50 text-xl mb-10 font-extrabold">
        NICE TO SEE YOU!
      </h1>
      <form onSubmit={onSubmit}>
        <div className="rounded-lg bg-appOrange p-5 mb-5 flex">
          <label className="mx-4 font-bold">Email</label>
          <input
            className="w-3/5 rounded-lg text-slate-800"
            type="email"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
        </div>
        <div className="rounded-lg bg-appOrange p-5 mb-20 flex">
          <label className="mx-4 font-bold">Password</label>
          <input
            className="w-3/5 rounded-lg text-slate-800"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
        </div>
        <div className="rounded-lg bg-appOrange p-8 mb-5 flex justify-center items-center">
          <button className="text-zinc-50 text-3xl font-semibold">Login</button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default SigninForm;
