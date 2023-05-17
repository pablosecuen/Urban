"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [userData, setUserData] = useState<any>(null);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      setUserData(JSON.parse(userDataString));
    }
  }, []);

  const onClick = () => {
    setShowInput(!showInput);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Retrieve the user ID from localStorage
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;

    // Make the PUT request to update the user
    axios
      .put(`http://localhost:3000/user/${user.id}`, userData)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setShowInput(false);
        // Redirect to a new page or perform any other actions
        // window.location.href = "/success"; // Replace "/success" with your desired route
      })
      .catch((error) => {
        // Handle any errors if needed
        console.error("Error updating user:", error);
      });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={onSubmit}
      className=" flex w-full flex-col items-center justify-evenly gap-4 rounded-xl py-8 shadow-xl  shadow-black/40 xl:h-[600px]  xl:flex-col"
    >
      <div className="flex flex-col items-center justify-center ">
        {userData && (
          <Image
            alt="..."
            src={userData?.img}
            className="max-w-150-px h-20 w-20 overflow-hidden rounded-full shadow-xl lg:h-20 lg:w-20 2xl:h-28 2xl:w-28"
            width={200}
            height={200}
          />
        )}
        <h3 className=" w-auto text-xl font-semibold leading-normal text-blueGray-700">
          {userData?.name}
        </h3>
      </div>

      <div className="flex h-auto w-[350px] flex-wrap justify-center gap-2 text-center lg:mb-0 lg:w-2/3 lg:justify-between xl:w-auto xl:flex-col 2xl:text-lg ">
        {/* <label htmlFor="">
          Telefono
          {showInput === true ? (
            <input
              name="phone"
              type="text"
              placeholder="Ingrese su numero"
              className="border-b-1 rounded-2xl bg-white text-center text-gray-800"
              onChange={onChange}
            />
          ) : (
            <input
              type="text"
              placeholder="Ingrese su numero"
              className=" border-0 bg-white text-center font-semibold text-gray-800"
              disabled
            />
          )}
        </label> */}

        <div className="max-w-[90px]">
          <label htmlFor="">Cc:</label>
          {showInput === true ? (
            <input
              name="cc"
              type="text"
              placeholder="Ingrese su CC"
              className="border-b-1 rounded-2xl text-center text-gray-800"
              onChange={onChange}
              value={userData?.cc}
            />
          ) : (
            <input
              type="text"
              placeholder="Ingrese su CC"
              className="rounded-2xl border-0 bg-white text-center font-semibold text-gray-800"
              disabled
              value={userData?.cc}
            />
          )}
        </div>
        <div className="max-w-[90px]">
          <label htmlFor="">Location</label>
          {showInput === true ? (
            <input
              name="location"
              type="text"
              placeholder="Ingrese su Ciudad"
              className="border-b-1 rounded-2xl text-center text-gray-800"
              onChange={onChange}
              value={userData?.location}
            />
          ) : (
            <input
              type="text"
              disabled
              placeholder="Ingrese su Ciudad"
              className="border-0 bg-white text-center font-semibold text-gray-800"
              value={userData?.location}
            />
          )}
        </div>

        <div className="max-w-[90px]">
          <label htmlFor="">State</label>
          {showInput === true ? (
            <input
              name="state"
              type="text"
              placeholder="Ingrese su Estado"
              className="border-b-1 rounded-2xl text-center text-gray-800"
              onChange={onChange}
              value={userData?.state}
            />
          ) : (
            <input
              type="text"
              disabled
              placeholder="Ingrese su Estado"
              className="border-0 bg-white text-center font-semibold text-gray-800"
              value={userData?.state}
            />
          )}
        </div>

        <div className="max-w-[90px]">
          <label htmlFor="">Calle</label>
          {showInput === true ? (
            <input
              name="street"
              type="text"
              placeholder="Ingrese su Calle"
              className="border-b-1 rounded-2xl text-center text-gray-800"
              onChange={onChange}
              value={userData?.street}
            />
          ) : (
            <input
              type="text"
              disabled
              placeholder="Ingrese su Calle"
              className="border-0 bg-white text-center font-semibold text-gray-800"
              value={userData?.street}
            />
          )}
        </div>
        <div className="max-w-[90px]">
          <label htmlFor="">Numero</label>
          {showInput === true ? (
            <input
              name="number"
              type="text"
              placeholder="Ingrese su Numero"
              className="border-b-1 rounded-2xl text-center text-gray-800"
              onChange={onChange}
              value={userData?.number}
            />
          ) : (
            <input
              type="text"
              disabled
              placeholder="Ingrese su Numero"
              className="border-0 bg-white text-center font-semibold text-gray-800"
              value={userData?.number}
            />
          )}
        </div>
      </div>
      <div className="mx-auto mt-8 flex  h-auto w-1/2  gap-1 ">
        <button
          type="button"
          className="w-1/2 bg-blue text-sm hover:bg-sky-500 lg:py-1 2xl:text-base"
          onClick={onClick}
        >
          Editar
        </button>
        <button className="w-1/2 text-sm hover:bg-sky-500 lg:py-1 2xl:text-base">Guardar</button>
      </div>
    </form>

    // postalCode,
    // location,
    // state,
    // street,
    // number,
  );
}
