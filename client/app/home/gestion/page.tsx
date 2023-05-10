"use client";

import { RootState } from "@component/Redux/store/store";
import { getTicketsByUserId } from "@component/Redux/ticket/ticketActions";
import { AnyAction } from "@reduxjs/toolkit";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import logo from "../../../assets/imagenes/UrbanIsoLogo.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Traigo todos los viajes del usuario

export default function Gestion() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const allTickets = useSelector((state: RootState) => state.ticket.allTickets);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Retrieve "user" from local storage
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      dispatch(getTicketsByUserId(user.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (event: any) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  const saveAsPDF = () => {
    if (modalRef.current) {
      html2canvas(modalRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
        pdf.save("ticket-Urban.pdf");
      });
    }
  };

  return (
    <section className="container flex h-96 w-full flex-col gap-2 rounded-3xl bg-slate-100 shadow-2xl shadow-black/40 lg:container lg:mx-auto lg:h-[500px] lg:p-10">
      <h3 className="rounded-3xl p-4  text-left font-bold tracking-widest">Historial de viajes</h3>
      {allTickets.map((ticket) => (
        <div key={ticket.id} className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <strong className="flex flex-col">{ticket.passageInfo.origin}</strong>
            <p className="text-center">to</p>
            <strong className="flex flex-col">{ticket.passageInfo.destination}</strong>
            <div className="flex flex-col">{ticket.passageInfo.departureDate}</div>
            <button onClick={handleOpenModal}>Ticket</button>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleModalClick}
          ref={modalRef}
        >
          <div
            className="mx-auto h-96 w-96 rounded-2xl bg-white shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            {allTickets.map((ticket) => (
              <article key={ticket.id} className="p-6">
                <Image src={logo} alt="logo" className="mx-auto  w-16  py-4" />
                <h2 className="mb-4 text-center text-2xl font-bold">
                  {ticket.passageInfo.origin} to {ticket.passageInfo.destination}
                </h2>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="">
                    <p className="mb-2 flex flex-col">
                      <strong>Fecha de salida:</strong> {ticket.passageInfo.departureDate}
                    </p>
                    <p className="mb-2 flex flex-col">
                      <strong>Horario de salida:</strong> {ticket.passageInfo.departureTime}
                    </p>
                    <p className="mb-2 flex flex-col">
                      <strong>Duracion del viaje:</strong> {ticket.passageInfo.duration}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 flex flex-col">
                      <strong>Ticket ID:</strong> {ticket.id}
                    </p>
                    <p className="mb-2 flex flex-col">
                      <strong>Precio:</strong> ${ticket.price}
                    </p>
                    <p className="mb-2 flex flex-col">
                      <strong>Número de asiento:</strong> {ticket.passageInfo.numberSeat}
                    </p>
                  </div>
                </div>
                <button onClick={saveAsPDF}>Guardar Ticket</button>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
