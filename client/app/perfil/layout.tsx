import Footer from "@component/components/Footer/Footer";
import NavBar from "@component/components/NavBar/NavBar";
import Image from "next/image";
import { User } from "../types/User";

interface ProfileProps {
    user: User;
  }


  const layoutPerfil = ({ user, children }:any) => {
    return (
      <div className="flex flex-col w-full ">
          <NavBar/>
          
        <div className="h-[97vh] ">
          <div className="flex w-3/5 h-4/5 items-center justify-center border-2 mx-auto mt-20">
            <div className="flex flex-col w-1/2 border-2 p-8 gap-4">  
              <Image src={user?.img} alt="imagen de perfil" className="rounded-full flex justify-center items-center align-middle border-2 w-48 h-48 mx-auto" ></Image>
              <h1>{user?.name}'s Profile</h1>
              <p>Email: {user?.email}</p>
              <p>Age: {user?.DNI}</p>
               <button className="w-auto py-1" >Edit Profile</button>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2"> 
            {children}
            </div>
          </div>
        </div>
         <Footer/>
      </div>
    )
}
export default layoutPerfil;