<<<<<<< HEAD
const InputView = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center ">
            <h1 className="text-center text-white text-xl mb-10 font-extrabold">CREATE YOUR PLAN</h1>
            <div className="text-center text-white text-xl mb-10 font-extrabold bg-orange-600 min-w-full p-8">Input your set</div>
            <form >
                <div className="rounded-lg bg-orange-600 p-5 m-3 flex">
                    <label className="mx-5 font-bold">Body parts</label>
                    <input className="w-3/5 rounded-lg" type="text" placeholder="🔽 Amrs"/>
                </div>
                <div className="rounded-lg bg-orange-600 p-5 mb-20 mx-3 flex">
                    <label className="mx-7 font-bold">Objetive</label>
                    <input className="w-3/5 rounded-lg" type="password" placeholder="🔽 Volume"/>
                </div>
                <div className="rounded-lg bg-orange-600 p-8 m-3 flex justify-center items-center">
=======
import Link from "next/link";

const InputView = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center ">
            <h1 className="text-center text-zinc-50 text-xl mb-10 font-extrabold">CREATE YOUR PLAN</h1>
            <div className="text-center text-zinc-50 text-xl mb-10 font-extrabold bg-appOrange min-w-full p-8">Input your set</div>
            <form >
                <div className="rounded-lg bg-appOrange p-5 m-3 flex">
                    <label className="mx-5 font-bold">Body parts</label>
                    <input className="w-3/5 rounded-lg" type="text" placeholder="🔽 Amrs"/>
                </div>
                <div className="rounded-lg bg-appOrange p-5 mb-20 mx-3 flex">
                    <label className="mx-7 font-bold">Objetive</label>
                    <input className="w-3/5 rounded-lg" type="password" placeholder="🔽 Volume"/>
                </div>
                <div className="rounded-lg bg-appOrange p-8 m-3 flex justify-center items-center">
>>>>>>> 2adbc4964e69fa4930c2845fef9fc986d92e121a
                    <button className="text-gray-50 text-3xl font-semibold">
                        Submit
                    </button>
                </div>


            </form>
<<<<<<< HEAD
            <button className="bg-orange-600 rounded-lg mt-3 px-6 font-semibold text-zinc-950">
                Back
            </button>
=======
             <Link className="bg-appOrange rounded-lg mt-3 px-6 font-semibold text-zinc-950" href='/'> 
                Back
            
            </Link>
>>>>>>> 2adbc4964e69fa4930c2845fef9fc986d92e121a
        </div>
    );
};

export default InputView; 