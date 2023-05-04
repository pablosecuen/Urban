"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Chauffeur } from "@component/app/types/Chauffeur";
import { Travel } from "@component/app/types/Travels";

interface InfoDetail {
  chauffeur: Chauffeur;
  travel: Travel;
}

interface DetailTravelProps {
  params: {
    id: string;
  };
}

export default function DetailTravel({ params }: DetailTravelProps) {
  const { id } = params;
  const [infoDetail, setInfoDetail] = useState<InfoDetail>({
    chauffeur: {} as Chauffeur,
    travel: {} as Travel,
  });

  console.log(infoDetail);

  useEffect(() => {
    const getInformation = async (id: string) => {
      const { data } = await axios.get<Travel>(`http://localhost:3000/travels/${id}`);
      const dataChauffeurId: any = await axios.get<Chauffeur>(
        `http://localhost:3000/chauffeur/${data.chauffeurId}`
      );
      setInfoDetail({ travel: data, chauffeur: dataChauffeurId.data });
    };

    getInformation(id);
  }, []);

  return (
    <section className="container flex h-auto w-full flex-col gap-2 rounded-3xl border-2 bg-slate-100 shadow-2xl shadow-black/40 lg:container lg:mx-auto lg:h-[500px] lg:p-10">
      <h3 className="rounded-3xl p-4  text-left font-bold tracking-widest">Detalle de viaje</h3>
      <article>
        {/* info viaje */}
        <div className="mx-auto flex w-11/12 flex-col items-center justify-center self-center rounded-2xl border border-blue px-3 py-1">
          <div className="flex w-[70%] text-center">
            <small>{infoDetail.travel.date?.slice(0, 10).split("-").reverse().join("-")}</small>
            <small>{infoDetail.travel.date?.slice(11, 16)}</small>
            <small>
              {infoDetail.travel.destination} - {infoDetail.travel.origin}
            </small>
          </div>
          <div className="flex w-2/4 items-center justify-center text-center">
            <h4>Conductor: </h4>
            <h6>{infoDetail.chauffeur.name}</h6>
          </div>
          <div className="flex w-2/4 items-center justify-center text-center">
            <h4>Placa: </h4>
            <h6>{infoDetail.chauffeur.vehicle?.patent}</h6>
          </div>
        </div>
        {/* valoracion */}
        <div></div>
        {/* Descripcion de valoracion */}
        <div></div>
      </article>
    </section>
  );
}
