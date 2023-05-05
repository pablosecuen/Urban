"use client";
import { RootState } from "@component/Redux/store/store";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchPassageById } from "@component/Redux/passage/passageSlice";
import { Passage } from "@component/app/types/Passages";

interface DetailPassageProps {
  params: {
    id: string;
  };
}

export default function PassageDetail({ params }: DetailPassageProps) {
  const { id } = params;
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const passageById: Passage | null = useSelector((state: RootState) => state.passage.passageById);

  useEffect(() => {
    dispatch(fetchPassageById(id));
  }, [id]);

  console.log(passageById);

  return (
    <div>
      {passageById ? (
        <div>
          <h1>{passageById.origin}</h1>
          <p>{passageById.destination}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
