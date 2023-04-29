import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="border-b-1 border-blueGray-200 mb-4" />
          <div className="flex w-full flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 md:w-4/12">
              <div className="text-blueGray-500 py-1 text-center text-sm font-semibold md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                  className="text-blueGray-500 hover:text-blueGray-700 py-1 text-sm font-semibold"
                >
                  Creative Tim
                </a>
              </div>
            </div>
            <div className="flex w-full px-4 md:w-8/12">
              <ul className="flex w-full list-none flex-wrap justify-center border-2  md:justify-end">
                <li className="w-auto">
                  <a
                    href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 block px-3 py-1 text-sm font-semibold"
                  >
                    Creative Tim
                  </a>
                </li>
                <li className="w-auto">
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 block px-3 py-1 text-sm font-semibold"
                  >
                    About Us
                  </a>
                </li>
                <li className="w-auto">
                  <a
                    href="http://blog.creative-tim.com?ref=nnjs-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 block px-3 py-1 text-sm font-semibold"
                  >
                    Blog
                  </a>
                </li>
                <li className="w-auto">
                  <a
                    href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 block px-3 py-1 text-sm font-semibold"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
