import CardUsers from "../../../components/Cards/CardUsers";

import CardProfile from "@component/components/Cards/CardProfile";

// components

export default function Users() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardUsers />
        </div>
        <div className="w-full px-4 lg:w-4/12">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
