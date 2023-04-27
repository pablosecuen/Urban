// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * I M P O R T S * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

// Icons NavBar
import {
  HiMenuAlt1,
  HiUserCircle,
  HiOutlineHome,
  HiOutlineBell,
  HiOutlineAnnotation,
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
    label: "Home",
    route: "/",
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
    route: "/notificaciones",
    icon: HiOutlineBell,
    id: "3",
  },
  {
    label: "Ayuda",
    route: "/ayuda",
    icon: HiOutlineAnnotation,
    id: "4",
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