"use client"
import { useState, useEffect } from "react";
import {pestañasHistorialPerfil, contenidoHistorialPerfil} from "../../assets/data"


export default function Perfil() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Viajes");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Tabs */}
      <div className="flex w-full ">
      {pestañasHistorialPerfil.map((item, index) => (
        <div
        key={item.id}
          className={`w-full px-2 border-2 cursor-pointer rounded-tr-2xl ${
            activeTab === `${item.name}` ? "bg-gray-200" : ""
          }`}
          onClick={() => handleTabClick(`${item.name}`)}
        >
         { item.name}
        </div>
      ))}
      </div>

      {/* Content  */}
      {contenidoHistorialPerfil.map((item, index) => (
        <>
         {activeTab === `${item.name}` && (
          <div className="w-full px-2 border-2" title={item.title}>
            <p>{item.p}</p>
            <div className="h-32 w-full border-2">{item.placeHolder}</div>
          </div>
        )}</>
      ))} 
    </>
  );
}


