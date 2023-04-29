
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-free/css/all.css";

"use client";
import { useState, useEffect } from "react";


// components
config.autoAddCss = false;
import CardStats from "components/Cards/CardStats.js";
import axios from "axios";

export default function HeaderStats() {
  const [totalUsers, setAllUsers] = useState(0);

  const getUsers = async () => {
    const total = await axios.get("http://localhost:3000/user").then((response) => {
      return response.data.totalPages * response.data.users.length;
    });
    return total;
  };

  useEffect(() => {
    setAllUsers(getUsers());
  }, []);

  return (
    <>
      {/* Header */}

      <div className="relative bg-blueGray-800 pb-32 pt-12 md:pt-32">

        <div className="mx-auto w-full px-4 md:px-10">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Users"
                  statTitle={totalUsers}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-blueGray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
