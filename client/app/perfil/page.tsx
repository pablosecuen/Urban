"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pestañasHistorialPerfil, contenidoHistorialPerfil } from "../../assets/data";
import { RootState } from "@component/Redux/store/store";
import { getTravelsByUserId } from "../../Redux/travel/travelActions";
import { Dispatch } from "@reduxjs/toolkit";

export default function Perfil() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Viajes");
  const [userData, setUserData] = useState(null);

  const dispatch = useDispatch<Dispatch<any>>();
  const userTravels = useSelector((state: RootState) => state.travel.userTravels);

  console.log({ userTravels: userTravels });

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const BENJAUSER = "112977155091916444768";
  useEffect(() => {
    dispatch(getTravelsByUserId("112977155091916444768"));
    setLoading(false);
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      setUserData(JSON.parse(userDataString));
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-96">
      {/* Tabs */}
      <div className="flex w-full ">
        {pestañasHistorialPerfil.map((item, index) => (
          <div
            key={item.id}
            className={`w-full cursor-pointer rounded-t-xl border border-gray-200 px-2 py-1 transition duration-500 ${
              activeTab === `${item.name}` && "bg-gray-200 font-bold"
            }`}
            onClick={() => handleTabClick(`${item.name}`)}
          >
            <h3 className="text-center">{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Content  */}
      {contenidoHistorialPerfil.map((item, index) => (
        <>
          {activeTab === `${item.name}` && (
            <div
              className="h-full w-full overflow-hidden border-2 bg-gray-200 text-center"
              title={item.title}
            >
              <h4 className="border-y-2 border-gray-400 font-semibold">{item.p}</h4>
              <div className=" flex h-full w-full flex-col items-center justify-center gap-3 overflow-scroll border-2 pb-5">
                {userTravels.map((item, id) => (
                  <div className="my-2 h-1/4 w-4/5 bg-gray-300 p-2 shadow-xl" key={id}>
                    <h1>{item.travel}</h1>
                    <h1>Precio: ${item.price}</h1>
                    <div className="flex">
                      <h1>Desde: {item.origin}</h1>
                      <p>TO</p>
                      <h1>Hasta: {item.destination}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
}
