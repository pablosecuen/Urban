import React from "react";

import CardPassages from "../../../../components/Cards/CardPassages";

import CardProfile from "@component/components/Cards/CardProfile";

// components

export default function Users() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardPassages />
        </div>
        <div className="w-full px-4 lg:w-4/12">
          <CardProfile selectedUser={null} />
        </div>
      </div>
    </>
  );
}
