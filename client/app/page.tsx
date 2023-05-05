"use client";
import Login from "@component/components/Login/Login";
import logo from "../assets/imagenes/UrbanLogo.png";
import Image, { StaticImageData } from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@component/Redux/store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onRegisterClick: () => void;
  onRegister: (name: string, email: string, password: string) => void;
  onLoginClick: () => void;
}

export default function LandingPage() {
  // useEffect(() => {
  //   dispatch(fetchAllUsers());
  // }, [dispatch]);
  // console.log(allUsers);

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <GoogleOAuthProvider
        clientId={"413100398306-qhc30n7vdf81seedk3o8bckqrlisu86d.apps.googleusercontent.com"}
      >
        {" "}
        <div className="mx-auto flex w-1/2 justify-center sm:h-full lg:h-full lg:pl-24">
          <Image
            src={logo as StaticImageData}
            alt="logo"
            className="aspect-ratio-square h-40 w-40  sm:h-72 sm:w-72  lg:h-96 lg:w-96"
          />
        </div>
        <div className="lg:mx-auto lg:w-1/2">
          <Login />
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}
