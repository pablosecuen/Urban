// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * I M P O R T S * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

// Icons NavBar
import {
  HiMenuAlt1,
  HiUserCircle,
  HiOutlineHome,
  HiOutlineBell,
  HiOutlineAnnotation,
  HiOutlineClipboardCheck,
  HiShoppingBag,
  HiOutlineInbox,
} from "react-icons/hi";

// Icons Footer
import sos from "./icons/sos.png";
import escudo from "./icons/escudo.png";
import planet from "./icons/planet.png";
import contract from "./icons/contract.png";
import Viajes from "@component/app/home/reserva/viajes/page";

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * E X P O R T S * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

//  NavBar
export const links = [
  {
    label: "home",
    route: "/home",
    icon: HiOutlineHome,
    id: "1",
  },
  {
    label: "perfil",
    route: "/perfil",
    icon: HiUserCircle,
    id: "2",
  },
  {
    label: "notificaciones",
    route: "/notificaciones",
    icon: HiOutlineBell,
    id: "3",
  },
  {
    label: "ayuda",
    route: "/ayuda",
    icon: HiOutlineAnnotation,
    id: "4",
  },
];



//  NavBar Mobile
export const linksMobile = [
  {
    label: "home",
    route: "/home",
    icon: HiOutlineHome,
    id: "1",
  },
  {
    label: "perfil",
    route: "/perfil",
    icon: HiUserCircle,
    id: "2",
  },
  {
    label: "notificaciones",
    route: "/notificaciones",
    icon: HiOutlineBell,
    id: "3",
  },
  {
    label: "ayuda",
    route: "/ayuda",
    icon: HiOutlineAnnotation,
    id: "4",
  },
  {
    label: "reserva",
    route: "/home/reserva",
    icon: HiOutlineClipboardCheck,
    id: "5",
  },
  {
    label: "paqueteria",
    route: "/home/paqueteria",
    icon: HiOutlineInbox,
    id: "6",
  },
  {
    label: "especiales",
    route: "/home/especiales",
    icon: HiShoppingBag,
    id: "7",
  },
  {
    label: "gestion",
    route: "/home/gestion",
    icon: HiOutlineAnnotation,
    id: "8",
  },
];

// Icons Footer
export const iconsData = [
  {
    image: sos,
    alt: "sos",
    description:
      "Verificamos cuidadosamente la identidad y antecedentes de nuestros transportadores y usuarios",
  },
  {
    image: escudo,
    alt: "protected",
    description: "Nuestro botón de emergencia está disponible 24 horas",
  },
  {
    image: planet,
    alt: "sos",
    description:
      "Viajando con nuestros aliados contribuyes al cuidado del medio ambiente",
  },
  {
    image: contract,
    alt: "sos",
    description: "Nuestras políticas",
  },
];

export const pestañasHistorialPerfil =[
  {
    name: "Viajes",
    id:1,
  },
  {
    name: "Especiales",
    id:2,
  },
  {
    name: "Taxis",
    id:3,
  },
  {
    name: "Car-pool",
    id:4,
  }
]

  export const contenidoHistorialPerfil =[
    {
      name: "Viajes",
      title: "historial de viajes",
      p: "Historial de viajes",
      placeHolder: `aca van las cards del historial de viajes`,
      id: "1",
    },
    {
      name: "Especiales",
      title: "historial de pedidos especiales",
      p: "Historial de pedidos especiales",
      placeHolder: `aca van las cards del historial de pedidos`,
      id: "2",
    },
    {
      name: "Taxis",
      title: "historial de Taxis tomados",
      p: "Historial de viajes",
      placeHolder: `aca van las cards del historial de viajes en taxi`,
      id: "1",
    },
    {
      name: "Car-pool",
      title: "historial de viajes",
      p: "Historial de viajes en Car-pool",
      placeHolder: `aca van las cards del historial de viajes en car-pool`,
      id: "1",
    }



]