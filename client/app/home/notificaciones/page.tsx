"use client";
import { getAllNotificationsByUser } from "@component/Redux/notifications/notificationsActions";
import { RootState } from "@component/Redux/store/store";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export default function Notifications() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "");
  const notification = useSelector((state: RootState) => state.notifications.allNotifications);

  useEffect(() => {
    dispatch(getAllNotificationsByUser(user.id));
  }, []);

  return (
    <div>
      {notification.map((e) => {
        return <div>{e.notification}</div>;
      })}
    </div>
  );
}
