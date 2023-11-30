"use client";
import Link from "next/link";
import React from "react";
import { BsFiletypePdf } from "react-icons/bs";
import "./page.css";
import useStore from "@/app/store/selectroutine";

import { useEffect, useState } from "react";
import { obtenerRespuesta } from "@/components/ChatGpt";

const Downloadview = () => {
  const { selectedValues } = useStore();

  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    if(selectedValues?.bodyPart?.label && selectedValues?.objective?.label){
    obtenerRespuesta(selectedValues.bodyPart.label,selectedValues.objective.label).then((res) => setRespuesta(res));
    }
  }, [selectedValues])

  return (
    <div className="h-screen mx-5 flex flex-col justify-center items-center">
      <h1 className="text-center text-zinc-50 text-xl mb-10 font-extrabold">
        AWESOME!
      </h1>
      <h1 className="text-center text-zinc-50 text-xl mb-10 font-extrabold flex">
        <p> GYM</p>
        <p className="text-appOrange">AI</p>
      </h1>

      <div className=" w-screen plan-container bg-appOrange px-5  mb-20 flex flex-col justify-around items-center">
        <h1 className="font-extrabold text-xl text-zinc-50">MAKE THIS PLAN</h1>
        <h1 className="font-extrabold text-xl text-slate-800">
          {selectedValues.bodyPart && selectedValues.bodyPart.label}
        </h1>
        <h1 className="font-extrabold text-xl text-slate-800">
          {selectedValues.objective && selectedValues.objective.label}
        </h1>
        <div>
          
        <p>Respuesta: {respuesta}</p>
        </div>
      </div>

      <div className="rounded-lg bg-appOrange p-5 mb-5 flex justify-center items-center">
        <button className="text-zinc-50 text-3xl mx-1 font-semibold">
          Download
        </button>
        <BsFiletypePdf style={{ fontSize: "40px" }} />
      </div>

      <Link href="/">
        <button className="bg-appOrange rounded-lg mt-3 px-6 font-semibold">
          Back
        </button>
      </Link>
    </div>
  );
};

export default Downloadview;
