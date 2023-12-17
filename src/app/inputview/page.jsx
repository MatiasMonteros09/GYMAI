
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

                    <button className="text-gray-50 text-3xl font-semibold">
                        Submit
                    </button>
                </div>


            </form>

            <Link className="bg-appOrange rounded-lg mt-3 px-6 font-semibold text-zinc-950" href='/'> 
                Back
            
            </Link>

        </div>
    );
};

export default InputView; 