import { getAllNotificationsByUser } from "@component/Redux/notifications/notificationsActions";
import { RootState } from "@component/Redux/store/store";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export default function Notifications() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id !== null) {
      dispatch(getAllNotificationsByUser(id));
    }
  }, []);

  const notification = useSelector((state: RootState) => state.notifications.allNotifications);
  return (
    <div>
      {notification.map((e) => {
        return <div>{e.notification}</div>;
      })}
    </div>
  );
}
