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
                    <button className="text-gray-50 text-3xl font-semibold">
                        Submit
                    </button>
                </div>


            </form>
            <button className="bg-orange-600 rounded-lg mt-3 px-6 font-semibold text-zinc-950">
                Back
            </button>
        </div>
    );
};

export default InputView; 