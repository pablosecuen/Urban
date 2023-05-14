import CardPaqueteriaPage from "@component/components/Cards/CardPaqueteriaPage";

export default function Paqueteria() {
  return (
    <section className="mx-auto mb-8 w-4/5 rounded-3xl border-2 shadow-2xl shadow-black/40 lg:mb-0">
    <h1 className="mt-12 text-center text-xl text-blue">
      Llena el formulario para encontrar tu cadete
    </h1>
  <CardPaqueteriaPage />
  </section>
  );
}
