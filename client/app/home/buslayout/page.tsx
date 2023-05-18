import PlantaAlta from "./PlantaAlta";
import PlantaBaja from "./PlantaBaja";

export default function BusLayout() {
  // return <div className="grid-container">{arr}</div>;
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center justify-center gap-5 rounded-3xl border-2 py-10 text-center shadow-2xl shadow-black/40 ">
      <h1>Elige tu asiento</h1>
      <section className="flex flex-col gap-4 px-4 xl:flex-row">
        <article className="flex flex-col items-center justify-center gap-10 rounded-2xl border-2 border-blue/30 py-2  text-center shadow-inner-md">
          <h3 className="tracking-wider xl:text-lg">Planta Alta</h3>
          <PlantaAlta />
        </article>
        <article className="flex flex-col items-center justify-center gap-10 rounded-2xl border-2 border-blue/30 py-2 text-center shadow-inner-md ">
          <h3 className="tracking-wider xl:text-lg">Planta Baja</h3>
          <PlantaBaja />
        </article>
      </section>
      <button className="w-auto">Seguir con la compra</button>
    </div>
  );
}
