"use client";
import { savePassengerData } from "@component/Redux/payment/paymentSlice";
import { PassengerFormData, PassengerFormModalProps } from "@component/app/types/Passenger";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ModalPasajeros: React.FC<PassengerFormModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  seat,
  enabledSeats,
}) => {
  const [formData, setFormData] = useState<PassengerFormData>({
    nombre: "",
    apellido: "",
    nacionalidad: "",
    tipoDocumento: "",
    fechaNacimiento: "",
    genero: "",
    codigoArea: "",
    telefono: "",
    email: "",
    cc: "",
    quantity: "",
  });
  const dispatch = useDispatch();
  const existingData = useSelector((state: any) => state.payment?.passengerData);

  useEffect(() => {
    // Aquí puedes realizar cualquier acción que necesites cuando cambie `existingData`
    console.log("existingData has changed:", existingData);
  }, [existingData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedPassengerData = [...existingData, { ...formData, seat, quantity: "1" }];

    dispatch(savePassengerData(updatedPassengerData));

    const updatedEnabledSeats = {
      ...enabledSeats,
      numberSeat: [...enabledSeats.numberSeat, seat],
    };

    setIsModalOpen(false); 

    setFormData({
      nombre: "",
      apellido: "",
      nacionalidad: "",
      tipoDocumento: "",
      fechaNacimiento: "",
      genero: "",
      codigoArea: "",
      telefono: "",
      email: "",
      cc: "",
      quantity: "",
    });
  };


  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed left-1/2 top-1/2 z-50 h-[660px] w-96 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 shadow-2xl shadow-black/40 ">
          <h2 className=" text-2xl font-bold">Información del pasajero</h2>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className=" block" htmlFor="nombre">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-1"
                maxLength={25}
                required
              />
            </div>
            <div className="">
              <label className="mb-2 block" htmlFor="apellido">
                Apellido
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-1"
                maxLength={25}
                required
              />
            </div>
            <div className="">
              <label className="mb-2 block" htmlFor="nacionalidad">
                Nacionalidad
              </label>
              <input
                type="text"
                id="nacionalidad"
                name="nacionalidad"
                value={formData.nacionalidad}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-1"
                required
              />
            </div>
            <div className="">
              <label className="mb-2 block" htmlFor="tipoDocumento">
                Tipo de Documento
              </label>
              <div className="flex">
                {" "}
                <select
                  id="tipoDocumento"
                  name="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  className="w-1/4 rounded border border-gray-300 px-3 py-1"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="CC">C.C</option>
                  <option value="CE">C.E</option>
                </select>
                <input
                  type="text"
                  id="cc"
                  name="cc"
                  value={formData.cc}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 px-3 py-1"
                  maxLength={8}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
              <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-1"
              />
            </div>
            <div>
              <label htmlFor="genero">Género:</label>
              <select
                id="genero"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-1"
                required
              >
                <option value="">Seleccione un género</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="prefiero declarar">No Declara</option>
              </select>
            </div>
            <div>
              <div className="flex gap-4">
                <div className="flex w-1/3 flex-col">
                  <label htmlFor="telefono">Area:</label>
                  <input
                    type="text"
                    id="codigoArea"
                    name="codigoArea"
                    value={formData.codigoArea}
                    onChange={handleChange}
                    maxLength={3}
                    className="w-full rounded border border-gray-300 px-3 py-1"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="telefono">Teléfono:</label>
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    maxLength={10}
                    className="w-full rounded border border-gray-300 px-3 py-1"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                className="w-full rounded border border-gray-300 px-3 py-1"
                required
              />
            </div>
            {/* Continue adding the rest of the form fields */}
            <div className="flex justify-center gap-4 pt-8">
              <button type="button" onClick={handleCloseModal} className=" bg-blue px-4 py-2">
                Cancel
              </button>
              <button type="submit" className="bg-blue px-4 py-2 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ModalPasajeros;
