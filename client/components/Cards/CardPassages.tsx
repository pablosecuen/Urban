"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Passage } from "../../app/types/Passages";
import UserDropDownSettings from "../Dropdowns/UserDropDownSettings";
import { getAllPassages } from "@component/Redux/passage/passageActions";

// components

export default function CardUsers() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const allPassages = useSelector((state: RootState) => state.passage.allPassages);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPassage, setSelectedPassage] = useState<Passage | null>(null);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    dispatch(getAllPassages());
  }, [dispatch]);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredPassages = allPassages.filter(
    (passage: any) =>
      (passage.origin && passage.origin.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (passage.userId && passage.userId.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleClick = (passage: Passage) => {
    setSelectedPassage(passage);
  };

  const handleSettingsClick = () => {
    setShowDropDown(!showDropDown); // toggle state variable on click
  };

  return (
    <div>
      {/*contendedor de render de todos los usuarios */}
      <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg border-0 bg-blueGray-100 shadow-lg">
        <div className="mb-0 rounded-t bg-white px-6 py-6">
          <div className="flex justify-between text-center">
            <h6 className="flex text-lg font-bold text-blueGray-700">Lista de Viajes</h6>
            <div className="flex items-center">
              <label htmlFor="search" className="flex items-center text-gray-500">
                <FaSearch className="w-auto" />
                <input
                  type="text"
                  id="search"
                  className="ml-2 border-b-2 border-gray-500 focus:outline-none"
                  placeholder="Buscar usuarios"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </label>
              {/* <button
                className="mr-1 w-auto rounded bg-blueGray-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blueGray-600"
                type="button"
              >
                Settings
              </button> */}
            </div>
          </div>
          {/* este es el render de los passages */}
        </div>
        <div style={{ height: "500px", overflow: "scroll" }}>
          {filteredPassages.map((passage: any) => (
            <div
              onClick={() => handleClick(passage)}
              key={passage.id}
              className="flex w-full cursor-pointer justify-between gap-4 border-2 px-4 py-2"
            >
              <div className="flex items-center gap-4">
                <h3 className="">{passage.origin}</h3>
              </div>
              <div className="flex items-center gap-4">
                <h3 className="">{passage.destination}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* passage details */}
      <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg border-0 bg-blueGray-100 shadow-lg">
        <div className="mb-0 rounded-t bg-white px-6 py-6">
          <div className="flex justify-between  text-center">
            <h6 className="flex text-lg font-bold text-blueGray-700">Detalles del viaje</h6>
            <button
              className="relative mr-1 w-auto rounded bg-blueGray-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blueGray-600"
              type="button"
              onClick={handleSettingsClick}
            >
              Settings
            </button>
            {showDropDown && <UserDropDownSettings />}
          </div>
        </div>
        <div className="flex flex-wrap px-4 py-10 pt-0 lg:px-10">
          <form>
            <h6 className="mb-6 mt-3 text-sm font-bold uppercase text-blueGray-400">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Origen
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedPassage ? selectedPassage.origin : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Destino
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedPassage ? selectedPassage.destination : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Fecha de salida
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedPassage ? selectedPassage.departureDate : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Fecha de llegada
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedPassage ? selectedPassage.arrivalDate : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Duración del viaje
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedPassage ? selectedPassage.duration : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Numero de butaca
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedPassage ? selectedPassage.numberSeat : ""}
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  Stock
                </label>
                <input
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                  defaultValue={selectedPassage ? selectedPassage.stock : ""}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
