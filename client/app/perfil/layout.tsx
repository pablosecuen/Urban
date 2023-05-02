import Footer from "@component/components/Footer/Footer";
import NavBar from "@component/components/NavBar/NavBar";
import Image from "next/image";
import { User } from "../types/User";

interface ProfileProps {
  user: User;
}

const layoutPerfil = ({ user, children }: any) => {
  return (
    <div className="flex w-full flex-col ">
      <NavBar />
      <div className=" h-[97vh]  ">
        <div className="mx-auto mt-10 flex h-4/5 flex-col items-center justify-center gap-5 px-4 lg:mt-20 lg:w-3/5 lg:flex-row lg:px-0 ">
          <div className="flex h-1/3 flex-col items-center justify-center gap-2 bg-gray-200 p-2 shadow-md shadow-black/40 lg:h-3/5 lg:w-2/5 lg:gap-4 lg:px-8 lg:py-4">
            <Image
              src={user?.img}
              alt="imagen de perfil"
              className="mx-auto hidden  h-24 w-24 items-center justify-center rounded-full border-2 bg-gray-300 align-middle lg:flex lg:h-48 lg:w-48"
            ></Image>
            <h2 className="text-center font-bold">{user?.name} Imanol Dominguez Sanchez </h2>
            <h2 className="text-center font-semibold ">
              {user?.email}imanol.desarrolloweb@gmail.com
            </h2>
            <h2 className="text-center font-semibold ">{user?.DNI} 40236398</h2>
            <button className="mx-auto w-1/2 py-1">Edit Profile</button>
          </div>
          <div className="flex h-96 flex-col items-center  justify-center">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default layoutPerfil;
