import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notifications } from "@component/app/types/Notifications";

export const getAllNotificationsByUser = createAsyncThunk<Notifications[], string>(
  "notifications/getAllNotificationsByUser",
  async (userId) => {
    const response = await axios.get(`https://api-urban.onrender.com/notifications/user/${userId}`);
    return response.data.notifications;
  }
);
