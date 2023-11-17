<<<<<<< HEAD

=======
'use client'
>>>>>>> 21e8fd045aa92a8aa25a0167afbcc5325ef418ab
import Link from "next/link";
import Select from "react-select";

const optionsBodyParts = [
  { value: "arms", label: "Arms" },
  { value: "legs", label: "Legs" },
  { value: "chest", label: "Chest" },
  
];

const optionsObjectives = [
  { value: "strength", label: "Strength" },
  { value: "volume", label: "Volume" },
  { value: "endurance", label: "Endurance" },
 
];

const InputView = () => {
<<<<<<< HEAD
    return (
        <div className="h-screen flex flex-col justify-center items-center ">
            <h1 className="text-center text-zinc-50 text-xl mb-10 font-extrabold">CREATE YOUR PLAN</h1>
            <div className="text-center text-zinc-50 text-xl mb-10 font-extrabold bg-appOrange min-w-full p-8">Input your set</div>
            <form >
                <div className="rounded-lg bg-appOrange p-5 m-3 flex">
                    <label className="mx-5 font-bold">Body parts</label>
                    <input className="w-3/5 rounded-lg" type="text" name="objective" placeholder="🔽 Amrs"/>
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

=======
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <div className="text-center mb-6">
        <h1 className="text-zinc-50 text-xl font-extrabold">CREATE YOUR PLAN</h1>
        <div className="bg-appOrange px-4 py-2 rounded-full">Select your options</div>
      </div>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">Body parts</label>
          <Select
            options={optionsBodyParts}
            className="w-full text-black"
            placeholder="Select Body Part"
          />
>>>>>>> 21e8fd045aa92a8aa25a0167afbcc5325ef418ab
        </div>
        <div className="mb-6">
          <label className="block text-white font-bold mb-2">Objective</label>
          <Select
            options={optionsObjectives}
            className="w-full text-black"
            placeholder="Select Objective"
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="rounded-full bg-appOrange text-gray-50 text-3xl font-semibold px-6 py-2">
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
