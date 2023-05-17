"use client";

import { RootState } from "@component/Redux/store/store";
import { getTicketsByUserId } from "@component/Redux/ticket/ticketActions";
import { AnyAction } from "@reduxjs/toolkit";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import logo from "../../assets/imagenes/UrbanIsoLogo.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Ticket } from "@component/app/types/Ticket";
import { FaBus, FaCar, FaTaxi } from "react-icons/fa";
import RatingStars from "../RatingStars/RatingStars";
import { toast } from "react-toastify";
import ToastComponent from "../00-Toastify/ToastComponent";
import axios, { AxiosError } from "axios";

interface ValuationData {
  rating: number;
  comment: string;
}
interface UserAndCompanyIds {
  userId: string;
  companyId: string;
}

export default function CardGestion() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAndCompanyIds, setUserAndCompanyIds] = useState<UserAndCompanyIds | null>();
  const [valuationData, setValuationData] = useState<ValuationData>({
    rating: 0,
    comment: "",
  });
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

  const handleOpenModal = ({ userId, companyId }: UserAndCompanyIds) => {
    setUserAndCompanyIds({ userId, companyId });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setUserAndCompanyIds(null);
    setIsModalOpen(false);
    setValuationData({ rating: 0, comment: "" });
  };

  const handleModalClick = (event: any) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  // se necesita prop valued en tickets para evitar valoracion infinita
  const proximamenteTicket = { valued: false };

  const onClickFuntionToRatingStars = (value: number) => {
    setValuationData((prev) => {
      return { ...prev, rating: value };
    });
  };
  const handleChangeValuationComment = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    if (target.value.length < 200) {
      setValuationData((prev) => {
        return { ...prev, comment: target.value };
      });
    } else {
      // mostrar alerta de cantidad máxima de caracteres alcanzada
    }
  };

  const sendValuation = () => {
    if (userAndCompanyIds?.userId && userAndCompanyIds?.companyId) {
      try {
        const { userId, companyId } = userAndCompanyIds;
        axios
          .post(`http://localhost:3000/user/rating/company/${userId}/${companyId}`, valuationData)
          .then(() => {
            // alerta con mensaje de éxito
          });
      } catch (error: AxiosError | any) {
        // alerta con el error
        console.log(error);
      }
    }
  };
  return (
    <section
      className={` flex h-full w-full flex-col gap-2  ${
        allTickets.length > 4 ? "scrollbar overflow-y-scroll" : ""
      } rounded-3xl bg-transparent  lg:container lg:mx-auto  lg:h-[500px] lg:p-10`}
    >
      {allTickets.map((ticket) => (
        <>
          <div key={ticket.id} className="flex  items-center justify-center align-middle ">
            <div className="flex flex-col">
              {" "}
              <div className="flex items-center gap-2 ">
                <FaBus size="30" className=" w-auto pr-2 text-blue" />
                <span className="text-xl font-semibold text-gray-600">Bus intermunicipal</span>
              </div>
              <span className="pt-2 text-gray-600">
                Origen: {ticket.passageInfo.origin} - {ticket.passageInfo.departureTime} - Estrella
                St <br />
                Tiempo estimado: {ticket.passageInfo.duration}
              </span>
            </div>
            {!proximamenteTicket.valued && (
              <button
                className="w-auto shadow-transparent "
                onClick={() =>
                  handleOpenModal({
                    userId: ticket.userId,
                    companyId: ticket.passageInfo.companyId,
                  })
                }
              >
                Valorar
              </button>
            )}
          </div>
          <hr className="mb-4" />
        </>
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
            {userAndCompanyIds && (
              <article className="p-6 ">
                <Image src={logo} alt="logo" className="mx-auto  w-16  py-4" />
                <h2 className="mb-4 text-center text-2xl font-bold">Valoración</h2>
                <div className="">
                  <RatingStars
                    onClickFunction={onClickFuntionToRatingStars}
                    stateValue={valuationData?.rating || 0}
                  />
                  <textarea
                    onChange={handleChangeValuationComment}
                    className="border"
                    cols={30}
                    rows={4}
                    value={valuationData.comment}
                  />
                </div>
                <button onClick={sendValuation}>Enviar Valoración</button>
              </article>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
