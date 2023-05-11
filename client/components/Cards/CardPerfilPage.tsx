"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pestañasHistorialPerfil, contenidoHistorialPerfil } from "../../assets/data";
import { RootState } from "@component/Redux/store/store";
import { getTravelsByUserId } from "../../Redux/travel/travelActions";
import { Dispatch } from "@reduxjs/toolkit";
import { type } from "os";

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
    <div className="h-full">
      {/* Tabs */}
      <div className="flex w-full ">
        {pestañasHistorialPerfil.map((item, index) => (
          <div
            key={item.id}
            className={`w-full cursor-pointer rounded-t-xl border border-gray-300 px-2 py-1 transition duration-500 xl:border-gray-200 ${
              activeTab === `${item.name}` && "bg-blue font-semibold text-white"
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
              className="text-35 h-[416px] w-full overflow-hidden border-2 bg-gray-300 xl:bg-gray-200"
              title={item.title}
            >
              <h4 className="border-y-2 border-blue text-center text-lg font-semibold">{item.p}</h4>

              {activeTab === "Viajes" && (
                <div
                  className={`flex h-full w-full flex-col items-center justify-evenly gap-3 ${
                    userTravels.length > 3 && "overflow-scroll"
                  } border-2 pb-4`}
                >
                  {userTravels.map((item, id) => (
                    <div
                      // onClick={asdas}
                      className="my-2 flex h-1/4 w-4/5 items-center rounded-lg bg-blueGray-300 py-12 font-mono shadow-xl shadow-black/20 hover:cursor-pointer xl:bg-gradient-to-r xl:from-blueGray-300 xl:to-blueGray-200"
                      key={id}
                    >
                      <p className="text-center font-semibold">
                        Desde: <span className="font-normal">{item.origin}</span>
                      </p>
                      <p className="text-center font-semibold">
                        Hasta: <span className="font-normal">{item.destination}</span>
                      </p>
                      <p className="text-center font-semibold">
                        Precio: <span className="font-normal">${item.price}</span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      ))}
    </div>
  );
}
