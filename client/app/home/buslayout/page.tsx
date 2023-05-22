import PlantaAlta from "./PlantaAlta";
import PlantaBaja from "./PlantaBaja";

export default function BusLayout() {
  // return <div className="grid-container">{arr}</div>;
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-5 rounded-3xl border-2 py-10 text-center shadow-2xl shadow-black/40 ">
      <h1 className="text-xl tracking-wider">Elige tu asiento</h1>
      <section className="flex w-4/5 flex-col justify-center gap-4  px-4 xl:flex-row">
        <article className="flex flex-col items-center justify-center gap-10 rounded-2xl border-2 border-blue/30 py-2 text-center  shadow-inner-md md:w-1/2">
          <h2 className="tracking-wider xl:text-lg">Planta Alta</h2>
          <PlantaAlta />
        </article>
        <article className="flex flex-col items-center justify-center gap-10 rounded-2xl border-2 border-blue/30 py-2 text-center shadow-inner-md md:w-1/2 ">
          <h2 className="tracking-wider xl:text-lg">Planta Baja</h2>
          <PlantaBaja />
        </article>
      </section>
      <button className="w-auto">Seguir con la compra</button>
    </div>
  );
}
