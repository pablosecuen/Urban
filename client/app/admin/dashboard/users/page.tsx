"use client";
import CardUsers from "../../../../components/Cards/CardUsers";
import CardProfile from "@component/components/Cards/CardProfile";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { fetchAllUsers } from "@component/Redux/user/userSlice";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { User } from "@component/app/types/User";

// components
export interface CardUsersProps {
  allUsers: User[];
  handleClickFunction: (user: User) => void;
  selectedUser: User | null;
}

export interface CardProfileProps {
  selectedUser: User | null;
}

export default function Users() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const allUsers = useSelector((state: RootState) => state.user.allUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    dispatch(fetchAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickFunction = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardUsers
            allUsers={allUsers}
            handleClickFunction={handleClickFunction}
            selectedUser={selectedUser}
          />
        </div>
        <div className="w-full px-4 lg:w-4/12">
          <CardProfile selectedUser={selectedUser} />
        </div>
      </div>
    </>
  );
}
