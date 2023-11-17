'use client'
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
