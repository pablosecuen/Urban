import CardGestion from "@component/components/Cards/CardGestion";

// Traigo todos los viajes del usuario

export default function Gestion() {
  return (
    <div className=" mt-10 flex   flex-col gap-2 rounded-3xl border-2 p-6 shadow-2xl shadow-black/40 lg:h-[530px]">
      <h2 className="rounded-3xl p-4  text-center text-xl font-semibold tracking-wider text-blue">
        Historial de viajes
      </h2>

      <section className=" flex h-full w-full flex-col gap-2 overflow-y-scroll rounded-3xl bg-transparent  lg:container lg:mx-auto  lg:h-[500px] lg:p-10">
        <CardGestion />
      </section>
    </div>
  );
}
