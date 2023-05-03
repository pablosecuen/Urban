import Footer from "@component/components/Footer/Footer";
import NavBar from "@component/components/NavBar/NavBar";
import Profile from "@component/components/Profile/Profile";

const layoutPerfil = ({ children }: any) => {
  return (
    <div className="flex w-full flex-col ">
      <NavBar />
      <div className=" h-[97vh]  ">
        <div className="mx-auto mt-10 flex h-4/5 flex-col items-center justify-center gap-5 px-4 lg:mt-20 lg:w-3/5 lg:flex-row lg:px-0 ">
          <Profile />
          <div className="flex h-96 flex-col items-center  justify-center">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default layoutPerfil;
