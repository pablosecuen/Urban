"use client";
import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

// import ChauffeurDropDownSettings from "../Dropdowns/ChauffeurDropDownSettings"; // crear

import { CardChauffeursProps } from "@component/app/admin/dashboard/chauffeurs/page";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "@component/Redux/store/store";
import { AnyAction } from "@reduxjs/toolkit";
import { getChauffeurs } from "@component/Redux/chauffeur/chauffeurActions";

// components

const CardChauffeurs: React.FC<CardChauffeursProps> = ({
  allChauffeurs,
  handleSelectChauffeur,
  selectedChauffeur,
}) => {
  const [searchProperty, setSearchProperty] = useState<"name" | "cc" | "ce" | "patent">("name");
  const [searchTerm, setSearchTerm] = useState(""); //   => QueryParams
  // const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  const handleSearchChange = (event: any) => {
    const value = event.target.value;
    setSearchTerm(value);
    value === "" && dispatch(getChauffeurs({}));
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    let queryParams = searchTerm ? { [searchProperty]: searchTerm } : {};
    dispatch(getChauffeurs(queryParams));
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
            <h6 className="flex text-lg font-bold text-blueGray-700">Chauffeurs List</h6>
            <div className="flex items-center">
              <form onSubmit={handleSearch}>
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
              </form>
            </div>
          </div>
          {/* este es el render de los usuarios */}
        </div>
        <div style={{ height: "500px", overflow: "scroll" }}>
          {allChauffeurs?.map((chauffeur: any) => (
            <div
              onClick={() => handleSelectChauffeur(chauffeur)}
              key={chauffeur.id}
              className="flex w-full cursor-pointer justify-between gap-4 border-2 px-4 py-2"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={chauffeur.img}
                  width={50}
                  height={50}
                  alt="profile pc"
                  className="h-12 w-12 rounded-full"
                />
                <h3 className="">{chauffeur.name}</h3>
              </div>
              <div className="flex w-80 items-center justify-around border-2">
                <p className="flex ">
                  <p className=" font-bold">id: </p>
                  {chauffeur.id}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* chauffeur details */}
      <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-lg border-0 bg-blueGray-100 shadow-lg">
        <div className="mb-0 rounded-t bg-white px-6 py-6">
          <div className="flex justify-between  text-center">
            <h6 className="flex text-lg font-bold text-blueGray-700">Chauffeur details</h6>
            <button
              className="relative mr-1 w-auto rounded bg-blueGray-700 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blueGray-600"
              type="button"
              onClick={handleSettingsClick}
            >
              Settings
            </button>
            {/* {showDropDown && <ChauffeurDropDownSettings />} */}
          </div>
        </div>
        <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
          <form>
            <h6 className="mb-6 mt-3 text-sm font-bold uppercase text-blueGray-400">
              Chauffeur Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedChauffeur ? selectedChauffeur.displayName : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedChauffeur ? selectedChauffeur.email : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Medios de pago
                  </label>
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      defaultValue={selectedChauffeur?.payments?.cardNumber ?? ""}
                    />
                    <input
                      type="text"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      defaultValue={selectedChauffeur?.payments?.expirationDate ?? ""}
                    />
                    <input
                      type="text"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      defaultValue={selectedChauffeur?.payments?.securityCode ?? ""}
                    />
                  </div>

                  <div className="flex justify-center">
                    <svg
                      width="20px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#626062"
                      className="w-auto "
                    >
                      <input
                        type="text"
                        className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                        defaultValue={selectedChauffeur ? selectedChauffeur.displayName : ""}
                      />
                      {/* Icono de usuario */}
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Fecha de nacimiento
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedChauffeur ? selectedChauffeur.birthday : ""}
                  />
                </div>
              </div>
            </div>

            <hr className="border-b-1 mt-6 border-blueGray-300" />

            <h6 className="mb-6 mt-3 text-sm font-bold uppercase text-blueGray-400">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="lg:w-12/12 w-full px-4">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={
                      typeof selectedChauffeur?.address === "string"
                        ? selectedChauffeur.address
                        : selectedChauffeur?.address?.street
                    }
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Género
                  </label>
                  <input
                    type="email"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedChauffeur ? selectedChauffeur.gender : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Nacionalidad
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedChauffeur ? selectedChauffeur.nationality : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    C.C.
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedChauffeur ? selectedChauffeur.cc : ""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    C.E.
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    defaultValue={selectedChauffeur ? selectedChauffeur.ce : ""}
                  />
                </div>
              </div>
            </div>

            <hr className="border-b-1 mt-6 border-blueGray-300" />

            <h6 className="mb-6 mt-3 text-sm font-bold uppercase text-blueGray-400">About Me</h6>
            <div className="w-full px-4 lg:w-4/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  C.E.
                </label>
                <input
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                  defaultValue="notas especiales del usuario"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardChauffeurs;
