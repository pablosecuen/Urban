"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/imagenes/UrbanLogo.png";

const links = [
  {
    label: "home",
    route: "/",
  },
  {
    label: "perfil",
    route: "/perfil",
  },
  {
    label: "notificaciones",
    route: "/notificaciones",
  },
  {
    label: "ayuda",
    route: "/ayuda",
  },
];

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const isMobile = useMediaQuery({ maxWidth: 700 });

  return (
    <header>
      <nav className={styles.nav}>
        <img src="../../assets/imagenes/UrbanLogo.png" alt="logo" />
        {isMobile ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-6 -3 30 30"
              className={styles.hamburguer}
              onClick={toggleMenu}
            >
              <path
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M2,6h20M2,12h20M2,18h20"
              />
            </svg>
            {showMenu && (
              <ul className={styles.ulMobile}>
                <li className={styles.liMobile}>uno</li>
                <li className={styles.liMobile}>dos</li>
                <li className={styles.liMobile}>tres</li>
              </ul>
            )}
          </>
        ) : (
          <ul className={styles.ul}>
            {links.map(({ label, route }) => (
              <li className={styles.li} key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
