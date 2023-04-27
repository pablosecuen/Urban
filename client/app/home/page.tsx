export default function Home() {

  return (
   <div className="lg:flex lg:flex-col lg:w-4/5 w-full justify-center border-2 rounded-3xl py-20 px-24 shadow-lg shadow/30"> 
      <p className="text-center font-bold text-2xl my-2">Bienvedios a <span className="text-verdeurban">U</span><span className=" text-celeste">rban</span>!</p>
      <p className="text-center">
        Nuestra <b>misión</b> es entregar al usuario el poder de decidir su medio de transporte acercando a
        la oferta a la palma de su mano, <b>para empoderarte</b> con mayor información asistiendo en que tomes
        la mejor decision disponble dentro de tus necesidades, en nuestra app podras encontrar todo
        tipo de servicios de transporte, desde <b>buses intermunicipales, taxis publicos, transportes
        privados</b>, inclusive una <b>seccion de cadeteria</b>, para que puedas encontrar <b>soluciones reales</b> a
        tus problemas cotidianos en la menor cantidad de tiempo posibles, acercando a tu mano un
        poder increible para <b>gestionar</b> tu tiempo y tus días de la mejor manera posible
      </p>
      <p className="text-center mt-8 font-bold text-xl">
        Selecciona el tipo de servicio para poder continuar
      </p>
    </div>
  );
}
