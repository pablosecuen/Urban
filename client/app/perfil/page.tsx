import CardPerfilPage from "@component/components/Cards/CardPerfilPage";
import Footer from "@component/components/Footer/Footer";
import NavBar from "@component/components/NavBar/NavBar";
import Profile from "@component/components/Profile/Profile";

export default function Perfil() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <NavBar />
      <div className=" container flex min-h-[90vh] flex-col items-center justify-center gap-6 py-10 xl:flex-row ">
        <section className="xl:w-1/3">
          <Profile />
        </section>
        <section className="xl:w-2/3">
          <CardPerfilPage />
        </section>
      </div>
      <Footer />
    </div>
  );
}
