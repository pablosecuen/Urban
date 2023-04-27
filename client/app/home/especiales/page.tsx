export default function Especiales() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-4/5 border-2">
      <div className="flex flex-col gap-4 justify-center items-center align-middle h-1/2">
        {" "}
        <label className="text-center">
          Que necesitas?
          <input type="text" />
        </label>
        <label className="text-center">
          Donde necesitas retirarlo?
          <input type="email" />
        </label>
        <label className="text-center">
          necesitas Urban abone el artículo
          <select title="necesitas Urban abone el artículo?" className="border">
            <option className="text-center">Si</option>
            <option className="text-center">No</option>
          </select>
        </label>
        <label className="text-center">
          Destino del envío:
          <input type="password" />
        </label>
        <label className="text-center">
          Indicaciones especiales
          <input type="password" />
        </label>
      </div>
      <div className="flex flex-col justify-between items-center align-middle h-1/2"></div>
    </div>
  );
}
