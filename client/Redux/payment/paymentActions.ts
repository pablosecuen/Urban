import { Passage, PassageToRegister, PassagePayload } from "@component/app/types/Passages";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";






export const getPassagesIdForPayment = createAsyncThunk<PassageToRegister[], PassagePayload[]>(
  "payment/getPassagesIdForPayment",
  async (passages: PassagePayload[]) => {
    const passagePromises = passages.map(async ({ passageId, quantity }) => {
      const response = await axios.get(`http://localhost:3000/passage/${passageId}`);
      const passageData: Passage = response.data;
      const passageToRegister: PassageToRegister = {
        ...passageData,
        quantity: quantity
      };
      return passageToRegister;
    });

    return Promise.all(passagePromises);
  }
);
  