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
    route: "/home/notificaciones",
    icon: HiOutlineBell,
    id: "3",
  },
  {
    label: "ayuda",
    route: "/home/ayuda",
    icon: HiOutlineAnnotation,
    id: "4",
  },
];

//  NavBar Mobile
export const linksMobile = [
  {
    label: "Home",
    route: "/home",
    icon: HiOutlineHome,
    id: "1",
  },
  {
    label: "Perfil",
    route: "/perfil",
    icon: HiUserCircle,
    id: "2",
  },
  {
    label: "Notificaciones",
    route: "/home/notificaciones",
    icon: HiOutlineBell,
    id: "3",
  },
  {
    label: "Ayuda",
    route: "/home/ayuda",
    icon: HiOutlineAnnotation,
    id: "4",
  },
  {
    label: "Reserva",
    route: "/home/reserva",
    icon: HiOutlineClipboardCheck,
    id: "5",
  },
  {
    label: "Paqueteria",
    route: "/home/paqueteria",
    icon: HiOutlineInbox,
    id: "6",
  },
  {
    label: "Especiales",
    route: "/home/especiales",
    icon: HiShoppingBag,
    id: "7",
  },
  {
    label: "Gestion",
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
    alt: "planet",
    description: "Viajando con nuestros aliados contribuyes al cuidado del medio ambiente",
  },
  {
    image: contract,
    alt: "contract",
    description: "Nuestras políticas",
  },
];

export const pestañasHistorialPerfil = [
  {
    name: "Viajes",
    id: 1,
  },
  {
    name: "Especiales",
    id: 2,
  },
  {
    name: "Taxis",
    id: 3,
  },
  {
    name: "Car-pool",
    id: 4,
  },
];

export const contenidoHistorialPerfil = [
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
    id: "3",
  },
  {
    name: "Car-pool",
    title: "historial de viajes",
    p: "Historial de viajes en Car-pool",
    placeHolder: `aca van las cards del historial de viajes en car-pool`,
    id: "4",
  },
];

export const pageData = [
  { name: "/especiales", visits: "0", uniqueUsers: "0", bounceRate: "50", id: "1" },
  { name: "/gestion", visits: "0", uniqueUsers: "0", bounceRate: "-13", id: "2" },
  { name: "/paqueteria", visits: "0", uniqueUsers: "0", bounceRate: "22", id: "3" },
  { name: "/reserva", visits: "0", uniqueUsers: "0", bounceRate: "-35", id: "4" },
];
