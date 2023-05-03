"use client";
import { useState, useEffect } from "react";
import { pestañasHistorialPerfil, contenidoHistorialPerfil } from "../../assets/data";

export default function Perfil() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Viajes");
  const [userData, setUserData] = useState(null);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
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
            className={`w-full cursor-pointer rounded-t-xl border px-2 py-1 transition duration-500 ${
              activeTab === `${item.name}` && "bg-gray-200"
            }`}
            onClick={() => handleTabClick(`${item.name}`)}
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Content  */}
      {contenidoHistorialPerfil.map((item, index) => (
        <>
          {activeTab === `${item.name}` && (
            <div className="h-full w-full overflow-hidden border-2 bg-red-300 " title={item.title}>
              <h4>{item.p}</h4>
              <div className=" h-full w-full overflow-scroll border-2">{item.placeHolder}</div>
            </div>
          )}
        </>
      ))}
    </div>
  );
}
