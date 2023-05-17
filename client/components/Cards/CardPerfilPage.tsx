"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pestañasHistorialPerfil, contenidoHistorialPerfil } from "../../assets/data";
import { RootState } from "@component/Redux/store/store";
import { getTravelsByUserId } from "../../Redux/travel/travelActions";
import { Dispatch } from "@reduxjs/toolkit";
import { type } from "os";
import CardHistorialTickets from "./CardHistorialTickets";
import { User, userData } from "@component/app/types/User";

export default function PerfilPage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Viajes");
  const [userData, setUserData] = useState<userData | null>(null);

  const dispatch = useDispatch<Dispatch<any>>();
  const userTravels = useSelector((state: RootState) => state.travel.userTravels);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    setLoading(false);
    if (userDataString) {
      setUserData(JSON.parse(userDataString));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            key={index}
            className={`w-full cursor-pointer rounded-t-xl border border-gray-300 px-2 py-1 transition duration-500 lg:hover:bg-gray-300 xl:border-gray-200 ${
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
              key={index}
              className="text-35 bg-gray-white h-[416px] w-full overflow-hidden xl:border-2"
              title={item.title}
            >
              <h4 className="border-y-2 border-blue text-center text-lg font-semibold">{item.p}</h4>

              {activeTab === "Viajes" && (
                <div
                  className={`flex h-full w-full flex-col items-center justify-evenly gap-3 ${
                    userTravels.length > 3 && "overflow-scroll"
                  } pb-4 xl:border-2`}
                >
                  <CardHistorialTickets />
                </div>
              )}
            </div>
          )}
        </>
      ))}
    </div>
  );
}
