"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [userData, setUserData] = useState<any>(null);
  const [showInput, setShowInput] = useState(false);
  const telefonoRef = useRef<HTMLInputElement | null>(null);
  const ccRef = useRef<HTMLInputElement | null>(null);
  const locationRef = useRef<HTMLInputElement | null>(null);
  const stateRef = useRef<HTMLInputElement | null>(null);
  const streetRef = useRef<HTMLInputElement | null>(null);
  const numberRef = useRef<HTMLInputElement | null>(null);

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
    const phone = telefonoRef.current?.value;
    const cc = ccRef.current?.value;

    const location = locationRef.current?.value;
    const state = stateRef.current?.value;
    const street = streetRef.current?.value;
    const number = numberRef.current?.value;

    // const address = {
    //   phone,
    //   cc,
    //   location,
    //   state,
    //   street,
    //   number,
    // };

    // Create an object with the updated user data
    const updatedUserData = {
      ...userData,
      phone,
      cc,
      location,
      state,
      street,
      number,
    };

    // Save the updated user data to localStorage
    localStorage.setItem("user", JSON.stringify(updatedUserData));

    // Update the userData state
    setUserData(updatedUserData);

    // Retrieve the user ID from localStorage
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    console.log(user.id);

    // Make the PUT request to update the user
    axios
      .put(`http://localhost:3000/user/${user.id}`, updatedUserData)
      .then((response) => {
        // Handle any response data if needed
        console.log("User updated successfully:", response.data);
        // Redirect to a new page or perform any other actions
        window.location.href = "/success"; // Replace "/success" with your desired route
      })
      .catch((error) => {
        // Handle any errors if needed
        console.error("Error updating user:", error);
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="300 mt-32 flex w-3/5 flex-col items-center justify-evenly p-2 shadow-lg shadow-black/40 lg:mt-0 lg:h-[460px] lg:w-1/2 lg:gap-2 lg:px-8 lg:py-4 2xl:h-full 2xl:w-1/3"
    >
      <div className="flex flex-col items-center justify-center">
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

      <div className="flex h-auto w-auto flex-col justify-between gap-2 text-center lg:mb-0 2xl:text-lg ">
        <label htmlFor="">
          Telefono
          {showInput === true ? (
            <input
              type="text"
              placeholder="Ingrese su numero"
              className="border-b-1 rounded-2xl bg-white text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              placeholder="Ingrese su numero"
              className=" border-0 bg-white text-center font-semibold text-gray-800"
              disabled
            />
          )}
        </label>

        <label htmlFor="">
          Cc:
          {showInput === true ? (
            <input
              type="text"
              placeholder="Ingrese su CC"
              className="border-b-1 rounded-2xl text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              placeholder="Ingrese su CC"
              className="rounded-2xl border-0 bg-white text-center font-semibold text-gray-800"
              disabled
            />
          )}
        </label>

        <label htmlFor="">
          Location
          {showInput === true ? (
            <input
              type="text"
              placeholder="Ingrese su Ciudad"
              className="border-b-1 rounded-2xl text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              disabled
              placeholder="Ingrese su Ciudad"
              className="border-0 bg-white text-center font-semibold text-gray-800"
            />
          )}
        </label>
        <label htmlFor="">
          State
          {showInput === true ? (
            <input
              type="text"
              placeholder="Ingrese su Estado"
              className="border-b-1 rounded-2xl text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              disabled
              placeholder="Ingrese su Estado"
              className="border-0 bg-white text-center font-semibold text-gray-800"
            />
          )}
        </label>
        <label htmlFor="">
          Calle
          {showInput === true ? (
            <input
              type="text"
              placeholder="Ingrese su Calle"
              className="border-b-1 rounded-2xl text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              disabled
              placeholder="Ingrese su Calle"
              className="border-0 bg-white text-center font-semibold text-gray-800"
            />
          )}
        </label>
        <label htmlFor="">
          Numero
          {showInput === true ? (
            <input
              type="text"
              placeholder="Ingrese su Numero"
              className="border-b-1 rounded-2xl text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              disabled
              placeholder="Ingrese su Numero"
              className="border-0 bg-white text-center font-semibold text-gray-800"
            />
          )}
        </label>

        <div className="mt-8 flex h-auto w-full gap-1 ">
          <button
            type="button"
            className="w-1/2 bg-blue text-sm hover:bg-sky-500 lg:py-1 2xl:text-base"
            onClick={onClick}
          >
            Edit Profile
          </button>
          <button className="w-1/2 text-sm hover:bg-sky-500 lg:py-1 2xl:text-base">Guardar</button>
        </div>
      </div>
    </form>

    // postalCode,
    // location,
    // state,
    // street,
    // number,
  );
}
