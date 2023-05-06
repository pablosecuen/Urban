import React from "react";
import { createPopper } from "@popperjs/core/lib/createPopper.js";
import Image from "next/image";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.useRef<HTMLAnchorElement>(null);
  const popoverDropdownRef = React.useRef<HTMLDivElement>(null);
  const openDropdownPopover = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-start",
      });
      setDropdownPopoverShow(true);
    }
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <div
      className="flex w-auto justify-end  "
      onClick={(e) => {
        e.preventDefault();
        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
      }}
    >
      <a
        className="block text-blueGray-500"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex items-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blueGray-200 text-sm text-white">
            <Image
              alt="..."
              className="w-full rounded-full border-none align-middle shadow-lg"
              src="/img/team-1-800x800.jpg"
              width={40}
              height={40}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "min-w-48 z-50 float-left w-96 list-none rounded bg-white py-2 text-left text-base shadow-lg"
        }
      >
        <a
          href="#pablo"
          className={
            "block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            "block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            "block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="my-2 h-0 border border-solid border-blueGray-100" />
        <a
          href="#pablo"
          className={
            "block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </a>
      </div>
    </div>
  );
};

export default UserDropdown;
