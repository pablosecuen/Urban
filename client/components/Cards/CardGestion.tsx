"use client";

import { RootState } from "@component/Redux/store/store";
import { getTicketsByUserId } from "@component/Redux/ticket/ticketActions";
import { AnyAction } from "@reduxjs/toolkit";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import logo from "../../assets/imagenes/UrbanIsoLogo.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Ticket } from "@component/app/types/Ticket";

export default function CardGestion() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const allTickets = useSelector((state: RootState) => state.ticket.allTickets) as Ticket[];

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

  const handleOpenModal = (ticket: any) => {
    setSelectedTicket(ticket); // Set the selected ticket
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTicket(null);
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
        pdf.save(`ticket-Urban-id-${allTickets[0].id}.pdf`);
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="rounded-3xl p-4  text-left font-bold tracking-widest">Historial de viajes</h3>
      <div className="flex h-[550px] items-center justify-center  rounded-3xl border-2 bg-slate-100  shadow-inner-lg  shadow-black/40 ">
        <section className="container flex h-80 w-full flex-col gap-2 overflow-y-scroll rounded-3xl bg-transparent  lg:container lg:mx-auto  lg:h-[500px] lg:p-10">
          {allTickets.map((ticket) => (
            <div
              key={ticket.id}
              className=" my-2 flex flex-col rounded-3xl bg-white px-4 py-2 text-sm  shadow-xl shadow-black/30 md:text-base"
            >
              <div className="flex flex-row items-center justify-between">
                <strong className="flex w-1/4 flex-col justify-start">
                  {ticket.passageInfo.origin}
                </strong>
                <p className="flex w-1/4 justify-start text-center">hacia</p>
                <strong className="flex w-1/4 flex-col justify-start">
                  {ticket.passageInfo.destination}
                </strong>
                <div className="hidden w-1/4 flex-col justify-start sm:flex">
                  {ticket.passageInfo.departureDate}
                </div>
                <button
                  className="w-auto shadow-transparent"
                  onClick={() => handleOpenModal(ticket)}
                >
                  Ticket
                </button>
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
                {selectedTicket && (
                  <article key={selectedTicket.id} className="p-6 ">
                    <Image src={logo} alt="logo" className="mx-auto  w-16  py-4" />
                    <h2 className="mb-4 text-center text-2xl font-bold">
                      <>
                        {selectedTicket.passageInfo.origin} to{" "}
                        {selectedTicket.passageInfo.destination}
                      </>
                    </h2>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="">
                        <p className="mb-2 flex flex-col">
                          <strong>Fecha de salida:</strong>{" "}
                          {selectedTicket.passageInfo.departureDate}
                        </p>
                        <p className="mb-2 flex flex-col">
                          <strong>Horario de salida:</strong>{" "}
                          {selectedTicket.passageInfo.departureTime}
                        </p>
                        <p className="mb-2 flex flex-col">
                          <strong>Duracion del viaje:</strong> {selectedTicket.passageInfo.duration}
                        </p>
                      </div>
                      <div>
                        <p className="mb-2 flex flex-col">
                          <strong>Ticket ID:</strong> {selectedTicket.id}
                        </p>
                        <p className="mb-2 flex flex-col">
                          <strong>Precio:</strong> ${selectedTicket.price}
                        </p>
                        <p className="mb-2 flex flex-col">
                          <strong>Número de asiento:</strong>{" "}
                          {selectedTicket.passageInfo.numberSeat}
                        </p>
                      </div>
                    </div>
                    <button onClick={saveAsPDF}>Guardar Ticket</button>
                  </article>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
