import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Urban | Inicio",
  description:
    "Descubre nuestra página de inicio, tu punto de partida para una experiencia de transporte excepcional. Con nuestra aplicación líder en el mercado, podrás acceder a una amplia gama de servicios de transporte, desde buses intermunicipales y taxis públicos hasta opciones de transporte privado y servicios de cadetería. Empodérate con información detallada y toma decisiones informadas que se adapten a tus necesidades. Nuestra plataforma te brinda soluciones reales para resolver tus problemas cotidianos de manera eficiente, permitiéndote gestionar tu tiempo y optimizar tus días. Explora nuestra página de inicio y descubre cómo mejorar tu vida con el poder de elegir tu medio de transporte de manera inteligente y conveniente.",
  keywords:
    "inicio, página de inicio, transporte, aplicación de transporte, servicios de transporte, buses intermunicipales, taxis públicos, transportes privados, cadetería, soluciones reales, gestionar tiempo, optimizar días, experiencia de transporte.",
};
export default function Home() {
  return (
    <div>
      <div className="mx-auto flex h-[92vh] flex-col items-center justify-center py-10 lg:container lg:flex-row lg:pb-20">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h2>Acerca de nosotros</h2>
          <p>
            Somos la solución perfecta para hacer tus viajes intermunicipales terrestres más fáciles
            y seguros. Con solo 1 clic te ofrecemos una oferta multimodal de transporte (bus, taxi o
            vehículo particular) que se ajustara a tus necesidades económicas y de itinerario. Somos
            la única solución en Colombia que te permite realizar viajes compartidos en vehículos
            privados con estrictas condiciones de seguridad, de esta forma contribuimos a tu
            comodidad, pero, más importante aún, generamos eficiencias económicas y ambientales.
          </p>
        </div>
        <div className="flex h-full w-full items-center justify-center"></div>
      </div>
      <div className="mt-48 lg:mt-0"></div>
    </div>
  );
}
