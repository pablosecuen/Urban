export default function Gestion() {
  // Los botones dentro de cada li tienen que ser Links que nos lleven a la ruta "/home/gestion/${id}" con la id del viaje
  return (
    <div className="w-3/5 mx-auto p-10 h-3/5 flex flex-col gap-10">
      <div className="rounded-3xl bg-sky-600 text-white font-bold tracking-widest p-4 text-center shadow-xl shadow-black/40">
        <h3>Historial de viajes</h3>
      </div>
      <ul className="flex flex-col gap-3">
        <li className="flex gap-4 px-4 items-center">
          <div className="text-center border-2 border-blue rounded-full p-2">
            <small>12/01/23</small>
            <small>12:00-Medellin-La Ceja</small>
          </div>
          <div className="w-1/4">
            <button>Gestionar</button>
          </div>
        </li>
        <li className="flex gap-4 px-4 items-center">
          <div className="text-center border-2 border-blue rounded-full p-2">
            <small>12/01/23</small>
            <small>12:00-Medellin-La Ceja</small>
          </div>
          <div className="w-1/4">
            <button>Gestionar</button>
          </div>
        </li>
        <li className="flex gap-4 px-4 items-center">
          <div className="text-center border-2 border-blue rounded-full p-2">
            <small>12/01/23</small>
            <small>12:00-Medellin-La Ceja</small>
          </div>
          <div className="w-1/4">
            <button>Gestionar</button>
          </div>
        </li>
        <li className="flex gap-4 px-4 items-center">
          <div className="text-center border-2 border-blue rounded-full p-2">
            <small>12/01/23</small>
            <small>12:00-Medellin-La Ceja</small>
          </div>
          <div className="w-1/4">
            <button>Gestionar</button>
          </div>
        </li>
        <li className="flex gap-4 px-4 items-center">
          <div className="text-center border-2 border-blue rounded-full p-2">
            <small>12/01/23</small>
            <small>12:00-Medellin-La Ceja</small>
          </div>
          <div className="w-1/4">
            <button>Gestionar</button>
          </div>
        </li>
        <li className="flex gap-4 px-4 items-center">
          <div className="text-center border-2 border-blue rounded-full p-2">
            <small>12/01/23</small>
            <small>12:00-Medellin-La Ceja</small>
          </div>
          <div className="w-1/4">
            <button>Gestionar</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
