"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { userData } from "../../app/types/User";

export default function Profile() {
  const [userData, setUserData] = useState<userData | null>(null);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      setUserData(JSON.parse(userDataString));
    }
  }, []);

  const onClick = () => {
    if (showInput === false) setShowInput(true);
    else setShowInput(false);
  };

  return (
    <div className="mt-32 flex w-3/5 flex-col items-center justify-evenly bg-gray-300 p-2 shadow-lg shadow-black/40 lg:mt-0 lg:h-[460px] lg:w-1/2 lg:gap-2 lg:px-8 lg:py-4 xl:bg-gray-200 2xl:h-full 2xl:w-1/3">
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
              className="border-b-0 text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              placeholder="Ingrese su numero"
              className="border-b-0 bg-gray-300 text-center text-gray-800 xl:bg-gray-200"
              disabled
            />
          )}
        </label>
        <label htmlFor="">
          Genero
          {showInput === true ? (
            <input
              type="text"
              placeholder="Ingrese su genero"
              className="border-b-0 text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              placeholder="Ingrese su genero"
              className="border-b-0 bg-gray-300 text-center text-gray-800 xl:bg-gray-200"
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
              className="border-b-0 text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              placeholder="Ingrese su CC"
              className="border-b-0 bg-gray-300 text-center text-gray-800 xl:bg-gray-200"
              disabled
            />
          )}
        </label>

        <div className="mt-3 flex w-auto justify-center text-sm font-bold uppercase leading-normal text-blueGray-400">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" className="w-auto ">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z"
              fill="gray"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0901 22.5958C11.2059 22.6753 11.2981 22.7366 11.3626 22.7788L11.4687 22.8472C11.7933 23.0504 12.2061 23.0508 12.5307 22.8476L12.6375 22.7788C12.7019 22.7366 12.7941 22.6753 12.9099 22.5958C13.1415 22.4367 13.4685 22.2041 13.8591 21.9041C14.6386 21.3054 15.6801 20.4322 16.7247 19.3336C18.7857 17.1661 21 13.9725 21 10.1818C21 7.75381 20.0571 5.42084 18.3719 3.69728C16.6859 1.97296 14.3943 1 12 1C9.60571 1 7.31415 1.97296 5.62814 3.69728C3.94288 5.42084 3 7.75381 3 10.1818C3 13.9725 5.21434 17.1661 7.27531 19.3336C8.31993 20.4322 9.36136 21.3054 10.1409 21.9041C10.5315 22.2041 10.8585 22.4367 11.0901 22.5958ZM12 3C10.1508 3 8.37273 3.75107 7.05815 5.09552C5.74283 6.44073 5 8.26992 5 10.1818C5 13.2007 6.78566 15.9162 8.72469 17.9554C9.68007 18.9602 10.6386 19.7646 11.3591 20.3179C11.6046 20.5065 11.8215 20.6651 12 20.7918C12.1785 20.6651 12.3954 20.5065 12.6409 20.3179C13.3614 19.7646 14.3199 18.9602 15.2753 17.9554C17.2143 15.9162 19 13.2007 19 10.1818C19 8.26992 18.2572 6.44073 16.9418 5.09552C15.6273 3.75107 13.8492 3 12 3Z"
              fill="gray"
            />
          </svg>
          {!userData?.adress ? (
            showInput === true ? (
              <input
                type="text"
                placeholder="Ingrese su direccion"
                className="border-b-0 text-center text-lg font-semibold"
              />
            ) : (
              <input
                type="text"
                placeholder="Ingrese su direccion"
                disabled
                className="border-b-0 bg-gray-300 text-center text-lg font-semibold xl:bg-gray-200"
              />
            )
          ) : (
            userData?.adress
          )}
        </div>

        <div className="mt-8 flex h-auto w-full gap-1 ">
          <button
            className="w-1/2 text-sm hover:bg-sky-500 lg:py-1 2xl:text-base"
            onClick={onClick}
          >
            Edit Profile
          </button>
          <button
            className="w-1/2 text-sm hover:bg-sky-500 lg:py-1 2xl:text-base"
            onClick={onClick}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
