export default function Home() {
  return (
    <div className="shadow/30 mb-8 w-full justify-center rounded-3xl border-2 px-4 py-20 shadow-lg lg:mb-0 lg:flex lg:w-4/5 lg:flex-col lg:px-24">
      <p className="my-2 text-center text-2xl font-bold">
        Bienvedios a <span className="text-verdeurban">U</span>
        <span className=" text-celeste">rban</span>!
      </p>
      <p className="w-full text-center ">
        Nuestra <b>misión</b> es entregar al usuario el poder de decidir su medio de transporte
        acercando a la oferta a la palma de su mano, <b>para empoderarte</b> con mayor información
        asistiendo en que tomes la mejor decision disponble dentro de tus necesidades, en nuestra
        app podras encontrar todo tipo de servicios de transporte, desde{" "}
        <b>buses intermunicipales, taxis publicos, transportes privados</b>, inclusive una{" "}
        <b>seccion de cadeteria</b>, para que puedas encontrar <b>soluciones reales</b> a tus
        problemas cotidianos en la menor cantidad de tiempo posibles, acercando a tu mano un poder
        increible para <b>gestionar</b> tu tiempo y tus días de la mejor manera posible
      </p>
      <p className="mt-8 text-center text-xl font-bold">
        Selecciona el tipo de servicio para poder continuar
      </p>
    </div>
  );
}
