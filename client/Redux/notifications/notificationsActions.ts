import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notifications } from "@component/app/types/Notifications";

export const getAllNotificationsByUser = createAsyncThunk<Notifications[], string>(
  "notifications/getAllNotificationsByUser",
  async (userId) => {
    const response = await axios.get(`http://localhost:3000/notifications/user/${userId}`);
    console.log(response.data);
    return response.data.notifications;
  }
);
