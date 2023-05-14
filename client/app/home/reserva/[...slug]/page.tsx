import CardReservaSlug from "@component/components/Cards/CardReservaSlug";

export default function SearchResults({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto h-full rounded-3xl p-10 shadow-2xl shadow-black/40 lg:ml-12 ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-center text-xl text-blue">
          Estas son las mejores opciones encontradas
        </h1>
        <CardReservaSlug params={params} />
      </div>
      <div className="flex gap-2 pt-10">
        <button>Ver mas opciones</button>
      </div>
    </div>
  );
}
