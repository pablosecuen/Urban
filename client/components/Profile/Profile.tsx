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
    <div className="flex flex-col items-center justify-evenly bg-gray-200 p-2 shadow-md shadow-black/40 lg:h-[450px] lg:w-2/5 lg:gap-2 lg:px-8 lg:py-4">
      <div className="relative mt-10 flex h-auto justify-center border-2">
        {userData && (
          <Image
            alt="..."
            src={userData?.img}
            className="max-w-150-px absolute -top-24 -m-16 -ml-20 h-48 w-48 overflow-hidden rounded-full border-none align-middle shadow-xl lg:-ml-16 lg:h-32 lg:w-32 2xl:h-40 2xl:w-40"
            width={200}
            height={200}
          />
        )}
      </div>

      <div className="flex h-auto w-auto flex-col justify-between gap-2 text-center ">
        <h3 className=" w-auto  text-xl font-semibold leading-normal text-blueGray-700">
          {userData?.name}
        </h3>
        <label htmlFor="">
          Telefono
          {showInput === true ? (
            <input
              type="text"
              placeholder="Ingrese su numero"
              className="text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              placeholder="Ingrese su numero"
              className="text-center text-gray-800"
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
              className="text-center text-gray-800"
            />
          ) : (
            <input
              type="text"
              placeholder="Ingrese su genero"
              className="text-center text-gray-800"
              disabled
            />
          )}
        </label>
        <label htmlFor="">
          Cc:
          {showInput === true ? (
            <input type="text" placeholder="Ingrese su CC" className="text-center text-gray-800" />
          ) : (
            <input
              type="text"
              placeholder="Ingrese su CC"
              className="text-center text-gray-800"
              disabled
            />
          )}
        </label>

        <div className="flex w-auto justify-center text-sm font-bold uppercase leading-normal text-blueGray-400">
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
              <input type="text" placeholder="Ingrese su direccion" className="text-center" />
            ) : (
              <input
                type="text"
                placeholder="Ingrese su direccion"
                disabled
                className="text-center"
              />
            )
          ) : (
            userData?.adress
          )}
        </div>
        {/* <div className=" flex justify-center text-blueGray-600">
          <svg
            width="20px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#626062"
            className="w-auto "
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="0.15"
                d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V12C20 13.1046 19.1046 14 18 14H6C4.89543 14 4 13.1046 4 12V8Z"
                fill="#6c7284"
              ></path>{" "}
              <path
                d="M12 14V12M12 14V16M12 14H18C19.1046 14 20 13.1046 20 12M12 14H6C4.89543 14 4 13.1046 4 12M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12M20 12V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V12M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
                stroke="#6c7284"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          Solution Manager - Creative Tim Officer
        </div> */}
        {/* <div className="mb-2 flex justify-center text-blueGray-600">
          <svg fill="#6c7284" viewBox="0 0 50 50" className="w-auto " width="20px" height="24px">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M24.982422 2 A 1.0001 1.0001 0 0 0 24.535156 2.1132812L3.5351562 13.113281 A 1.0001 1.0001 0 0 0 3 14L3 17 A 1.0001 1.0001 0 0 0 4 18L5 18L5 19.400391C5 20.612292 5.8642937 21.645028 7 21.921875L7 40.011719L4.0996094 40.011719L4.265625 40.025391C3.0336039 39.818002 2 40.874696 2 42.03125L2 44.779297C2 45.959462 2.9340538 47 4.0996094 47L45.800781 47C46.966337 47 47.900391 46.037413 47.900391 44.880859L47.900391 42.132812C47.900391 40.976259 46.966337 40.011719 45.800781 40.011719L43 40.011719L43 21.921875C44.135706 21.645028 45 20.612292 45 19.400391L45 18L46 18 A 1.0001 1.0001 0 0 0 47 17L47 14 A 1.0001 1.0001 0 0 0 46.464844 13.113281L25.464844 2.1132812 A 1.0001 1.0001 0 0 0 24.982422 2 z M 25 4.1308594L45 14.605469L45 16L44.167969 16 A 1.0001 1.0001 0 0 0 43.841797 16L34.154297 16 A 1.0001 1.0001 0 0 0 33.984375 15.986328 A 1.0001 1.0001 0 0 0 33.839844 16L30.167969 16 A 1.0001 1.0001 0 0 0 29.841797 16L20.154297 16 A 1.0001 1.0001 0 0 0 19.984375 15.986328 A 1.0001 1.0001 0 0 0 19.839844 16L16.167969 16 A 1.0001 1.0001 0 0 0 15.841797 16L6.1542969 16 A 1.0001 1.0001 0 0 0 5.984375 15.986328 A 1.0001 1.0001 0 0 0 5.8398438 16L5 16L5 14.605469L25 4.1308594 z M 7 18L15 18L15 19.400391C15 19.781872 14.781872 20 14.400391 20L7.5996094 20C7.2181279 20 7 19.781872 7 19.400391L7 18 z M 17 18L19 18L19 19.400391C19 20.612292 19.864294 21.645028 21 21.921875L21 40.011719L15 40.011719L15 21.921875C16.135706 21.645028 17 20.612292 17 19.400391L17 18 z M 21 18L29 18L29 19.400391C29 19.781872 28.781872 20 28.400391 20L21.599609 20C21.218128 20 21 19.781872 21 19.400391L21 18 z M 31 18L33 18L33 19.400391C33 20.612292 33.864294 21.645028 35 21.921875L35 40.011719L29 40.011719L29 21.921875C30.135706 21.645028 31 20.612292 31 19.400391L31 18 z M 35 18L43 18L43 19.400391C43 19.781872 42.781872 20 42.400391 20L35.599609 20C35.218128 20 35 19.781872 35 19.400391L35 18 z M 9 22L13 22L13 40L9 40L9 22 z M 23 22L27 22L27 40L23 40L23 22 z M 37 22L41 22L41 40L37 40L37 22 z M 3.984375 42.003906 A 1.0001 1.0001 0 0 0 4.0996094 42.011719L45.800781 42.011719C45.835221 42.011719 45.900391 42.067369 45.900391 42.132812L45.900391 44.880859C45.900391 44.946308 45.835226 45 45.800781 45L4.0996094 45C4.0651649 45 4 45.023132 4 44.779297L4 42.03125C4 42.008135 3.9913337 42.007741 3.984375 42.003906 z"></path>
            </g>
          </svg>
          University of Computer Science
        </div> */}
        <div className="flex h-auto gap-4">
          <button className="mx-auto w-1/2 py-1" onClick={onClick}>
            Edit Profile
          </button>
          <button className="mx-auto w-1/2 py-1" onClick={onClick}>
            Guardar
          </button>
        </div>
      </div>
    </div>
    // <>
    //   <div className="relative mb-6 mt-16 flex   min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
    //     <div className="px-6">
    //       <div className="flex flex-wrap justify-center">
    //         <div className="flex w-full justify-center px-4">
    //           <div className="relative flex  justify-center border-2">
    //             {userData && (
    //               <Image
    //                 alt="..."
    //                 src={userData?.img}
    //                 className="max-w-150-px absolute -top-12 -m-16 -ml-20 h-48 w-48  overflow-hidden rounded-full border-none align-middle shadow-xl lg:-ml-16"
    //                 width={200}
    //                 height={200}
    //               />
    //             )}
    //           </div>
    //         </div>
    //         <div className="mt-20 w-full px-4 text-center">
    //           <div className="flex justify-center py-4 pt-8 lg:pt-4">
    //             <div className="mr-4 p-3 text-center">
    //               <span className="block text-xl font-bold uppercase tracking-wide text-blueGray-600">
    //                 22
    //               </span>
    //               <span className="text-sm text-blueGray-400">Friends</span>
    //             </div>
    //             <div className="mr-4 p-3 text-center">
    //               <span className="block text-xl font-bold uppercase tracking-wide text-blueGray-600">
    //                 10
    //               </span>
    //               <span className="text-sm text-blueGray-400">Photos</span>
    //             </div>
    //             <div className="p-3 text-center lg:mr-4">
    //               <span className="block text-xl font-bold uppercase tracking-wide text-blueGray-600">
    //                 89
    //               </span>
    //               <span className="text-sm text-blueGray-400">Comments</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w.aut mt-12 text-center ">
    //         <h3 className=" w-auto  text-xl font-semibold leading-normal text-blueGray-700">
    //           {userData?.name}
    //         </h3>

    //         <div className="mb-2 mt-0 flex w-auto justify-center  text-sm font-bold uppercase leading-normal text-blueGray-400">
    //           <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" className="w-auto ">
    //             <path
    //               fill-rule="evenodd"
    //               clip-rule="evenodd"
    //               d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z"
    //               fill="gray"
    //             />
    //             <path
    //               fill-rule="evenodd"
    //               clip-rule="evenodd"
    //               d="M11.0901 22.5958C11.2059 22.6753 11.2981 22.7366 11.3626 22.7788L11.4687 22.8472C11.7933 23.0504 12.2061 23.0508 12.5307 22.8476L12.6375 22.7788C12.7019 22.7366 12.7941 22.6753 12.9099 22.5958C13.1415 22.4367 13.4685 22.2041 13.8591 21.9041C14.6386 21.3054 15.6801 20.4322 16.7247 19.3336C18.7857 17.1661 21 13.9725 21 10.1818C21 7.75381 20.0571 5.42084 18.3719 3.69728C16.6859 1.97296 14.3943 1 12 1C9.60571 1 7.31415 1.97296 5.62814 3.69728C3.94288 5.42084 3 7.75381 3 10.1818C3 13.9725 5.21434 17.1661 7.27531 19.3336C8.31993 20.4322 9.36136 21.3054 10.1409 21.9041C10.5315 22.2041 10.8585 22.4367 11.0901 22.5958ZM12 3C10.1508 3 8.37273 3.75107 7.05815 5.09552C5.74283 6.44073 5 8.26992 5 10.1818C5 13.2007 6.78566 15.9162 8.72469 17.9554C9.68007 18.9602 10.6386 19.7646 11.3591 20.3179C11.6046 20.5065 11.8215 20.6651 12 20.7918C12.1785 20.6651 12.3954 20.5065 12.6409 20.3179C13.3614 19.7646 14.3199 18.9602 15.2753 17.9554C17.2143 15.9162 19 13.2007 19 10.1818C19 8.26992 18.2572 6.44073 16.9418 5.09552C15.6273 3.75107 13.8492 3 12 3Z"
    //               fill="gray"
    //             />
    //           </svg>
    //           Los Angeles, California
    //         </div>
    //         <div className=" flex justify-center text-blueGray-600">
    //           <svg
    //             width="20px"
    //             height="24px"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //             stroke="#626062"
    //             className="w-auto "
    //           >
    //             <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    //             <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    //             <g id="SVGRepo_iconCarrier">
    //               {" "}
    //               <path
    //                 opacity="0.15"
    //                 d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V12C20 13.1046 19.1046 14 18 14H6C4.89543 14 4 13.1046 4 12V8Z"
    //                 fill="#6c7284"
    //               ></path>{" "}
    //               <path
    //                 d="M12 14V12M12 14V16M12 14H18C19.1046 14 20 13.1046 20 12M12 14H6C4.89543 14 4 13.1046 4 12M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12M20 12V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V12M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
    //                 stroke="#6c7284"
    //                 stroke-width="1.5"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               ></path>{" "}
    //             </g>
    //           </svg>
    //           Solution Manager - Creative Tim Officer
    //         </div>
    //         <div className="mb-2 flex justify-center text-blueGray-600">
    //           <svg
    //             fill="#6c7284"
    //             viewBox="0 0 50 50"
    //             className="w-auto "
    //             width="20px"
    //             height="24px"
    //           >
    //             <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    //             <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    //             <g id="SVGRepo_iconCarrier">
    //               <path d="M24.982422 2 A 1.0001 1.0001 0 0 0 24.535156 2.1132812L3.5351562 13.113281 A 1.0001 1.0001 0 0 0 3 14L3 17 A 1.0001 1.0001 0 0 0 4 18L5 18L5 19.400391C5 20.612292 5.8642937 21.645028 7 21.921875L7 40.011719L4.0996094 40.011719L4.265625 40.025391C3.0336039 39.818002 2 40.874696 2 42.03125L2 44.779297C2 45.959462 2.9340538 47 4.0996094 47L45.800781 47C46.966337 47 47.900391 46.037413 47.900391 44.880859L47.900391 42.132812C47.900391 40.976259 46.966337 40.011719 45.800781 40.011719L43 40.011719L43 21.921875C44.135706 21.645028 45 20.612292 45 19.400391L45 18L46 18 A 1.0001 1.0001 0 0 0 47 17L47 14 A 1.0001 1.0001 0 0 0 46.464844 13.113281L25.464844 2.1132812 A 1.0001 1.0001 0 0 0 24.982422 2 z M 25 4.1308594L45 14.605469L45 16L44.167969 16 A 1.0001 1.0001 0 0 0 43.841797 16L34.154297 16 A 1.0001 1.0001 0 0 0 33.984375 15.986328 A 1.0001 1.0001 0 0 0 33.839844 16L30.167969 16 A 1.0001 1.0001 0 0 0 29.841797 16L20.154297 16 A 1.0001 1.0001 0 0 0 19.984375 15.986328 A 1.0001 1.0001 0 0 0 19.839844 16L16.167969 16 A 1.0001 1.0001 0 0 0 15.841797 16L6.1542969 16 A 1.0001 1.0001 0 0 0 5.984375 15.986328 A 1.0001 1.0001 0 0 0 5.8398438 16L5 16L5 14.605469L25 4.1308594 z M 7 18L15 18L15 19.400391C15 19.781872 14.781872 20 14.400391 20L7.5996094 20C7.2181279 20 7 19.781872 7 19.400391L7 18 z M 17 18L19 18L19 19.400391C19 20.612292 19.864294 21.645028 21 21.921875L21 40.011719L15 40.011719L15 21.921875C16.135706 21.645028 17 20.612292 17 19.400391L17 18 z M 21 18L29 18L29 19.400391C29 19.781872 28.781872 20 28.400391 20L21.599609 20C21.218128 20 21 19.781872 21 19.400391L21 18 z M 31 18L33 18L33 19.400391C33 20.612292 33.864294 21.645028 35 21.921875L35 40.011719L29 40.011719L29 21.921875C30.135706 21.645028 31 20.612292 31 19.400391L31 18 z M 35 18L43 18L43 19.400391C43 19.781872 42.781872 20 42.400391 20L35.599609 20C35.218128 20 35 19.781872 35 19.400391L35 18 z M 9 22L13 22L13 40L9 40L9 22 z M 23 22L27 22L27 40L23 40L23 22 z M 37 22L41 22L41 40L37 40L37 22 z M 3.984375 42.003906 A 1.0001 1.0001 0 0 0 4.0996094 42.011719L45.800781 42.011719C45.835221 42.011719 45.900391 42.067369 45.900391 42.132812L45.900391 44.880859C45.900391 44.946308 45.835226 45 45.800781 45L4.0996094 45C4.0651649 45 4 45.023132 4 44.779297L4 42.03125C4 42.008135 3.9913337 42.007741 3.984375 42.003906 z"></path>
    //             </g>
    //           </svg>
    //           University of Computer Science
    //         </div>
    //       </div>
    //       <div className="mt-10 border-t border-blueGray-200 py-10 text-center">
    //         <div className="flex flex-wrap justify-center">
    //           <div className="w-full px-4 lg:w-9/12">
    //             <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
    //               An artist of considerable range, Jenna the name taken by Melbourne-raised,
    //               Brooklyn-based Nick Murphy writes, performs and records all of his own music,
    //               giving it a warm, intimate feel with a solid groove structure. An artist of
    //               considerable range.
    //             </p>
    //             Show more
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
