"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
      className="mt-32 flex h-full w-full flex-col items-center justify-evenly p-2 py-4 shadow-lg shadow-black/40 lg:mt-0 lg:h-[460px] lg:w-1/2 lg:gap-2 lg:px-8 lg:py-4 2xl:h-full 2xl:w-1/3"
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

        <label htmlFor="">
          Cc:
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
        </label>

        <label htmlFor="">
          Location
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
        </label>
        <label htmlFor="">
          State
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
        </label>
        <label htmlFor="">
          Calle
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
        </label>
        <label htmlFor="">
          Numero
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
