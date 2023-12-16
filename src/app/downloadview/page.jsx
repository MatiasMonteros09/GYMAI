


"use client";

import { BsFiletypePdf } from "react-icons/bs";

import { useSession } from "next-auth/react";
import useStore from "@/app/store/selectroutine";

import { useEffect, useState } from "react";
import { obtenerRespuesta } from "@/components/ChatGpt";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner"; // Importa el componente Spinner
import "bootstrap/dist/css/bootstrap.min.css";
import PdfFile from "@/components/PdfFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
// import AnimatedBackground from "@/components/AnimatedBackground";
import "@/app/downloadview/style.css"
// import Header from "@/components/Header";
const Downloadview = () => {
  const { selectedValues } = useStore();

  const [respuesta, setRespuesta] = useState("");

  const apiUrl = "api/routine"; // Reemplaza con la URL real de tu API
  const { data: session } = useSession();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendResponseToPrisma = async (data) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos a Prisma.");
      }

      console.log("Datos enviados correctamente a Prisma.");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (selectedValues?.bodyPart?.label && selectedValues?.objective?.label) {
      obtenerRespuesta(
        selectedValues.bodyPart.label,
        selectedValues.objective.label
      ).then((res) => {
        setRespuesta(res);
        // Enviar la respuesta a la tabla Routine
        sendResponseToPrisma({
          response: res,
          creatorId:
            session?.user
              ?.id /* reemplazar con el ID real */ /* otros campos */,
        });
        setLoading(false);
      });
    }
  }, [selectedValues]);

  return (
    <div className="container-bg">
      {/* <Header/> */}
      <div className="containerTwo">
        <h1 className="text-center text-zinc-50 text-xl mb-10 font-extrabold flex">
          <p> GYM</p>
          <p className="text-appOrange">AI</p>
        </h1>

        <div className="justify-center text-center">
          <h1 className="font-extrabold text-xl text-zinc-50">MAKE THIS PLAN</h1>

          <div>
            <Button variant="secondary" onClick={handleShow}>
              Routine
            </Button>

            <Modal className="text-black" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Making the best routine 4U</Modal.Title>
              </Modal.Header>
              <Modal.Body className="justify-center text-center">
                {loading ? (
                  <Spinner animation="border" role="status">
                    <span className="text-black visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <p>Routine: {respuesta}</p>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <h1 className="font-extrabold text-xl text-slate-800">FOR YOU</h1>
        </div>

        <div className="flex">
          <PDFDownloadLink document={<PdfFile respuesta={respuesta} />} filename="FORM">
            {({ loading }) =>
              loading ? <button>Loading Document...</button> : <button className="text-white">Download</button>
            }
          </PDFDownloadLink>
          <BsFiletypePdf style={{ fontSize: '40px'}}  />
        </div>
      </div>

      <div className="bg-animated"></div>
      <div className="bg-animated bg2-animated"></div>
      <div className="bg-animated bg3-animated"></div>
    </div>
  );
};

export default Downloadview;