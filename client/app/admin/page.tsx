"use client";
import React from "react";

// layout for page

import Auth from "../../layouts/Auth";

export default function Adminlogin() {
  return (
    <>
      <div className="container mx-auto flex h-screen w-full items-center justify-center px-4">
        <div className="flex h-full content-center items-center justify-center">
          <div className="w-full px-4 lg:w-4/12">
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-blueGray-200 shadow-lg lg:h-[630px]">
              <div className="mb-0 rounded-t px-6 py-6">
                <div className="mb-3 text-center">
                  <h6 className="text-sm font-bold text-blueGray-500">Sign in with</h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="mb-1 mr-2 inline-flex items-center justify-center gap-4 rounded bg-white px-4 py-2 text-xs font-bold  uppercase text-blueGray-700 shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blueGray-50"
                    type="button"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" className="w-auto">
                      <path
                        fill="currentColor"
                        d="M12 .3c-6.63 0-12 5.37-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.742.083-.727.083-.727 1.204.085 1.838 1.236 1.838 1.236 1.07 1.837 2.807 1.305 3.495.998.108-.776.419-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.383 1.236-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.837 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.216 0 1.6-.015 2.886-.015 3.286 0 .315.21.69.825.57C20.565 22.095 24 17.594 24 12.3c0-6.63-5.37-12-12-12z"
                      />
                    </svg>
                    Github
                  </button>
                  <button
                    className="mb-1 mr-1 inline-flex items-center justify-center gap-4 rounded bg-white px-4 py-2 text-xs font-bold  uppercase text-blueGray-700 shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blueGray-50"
                    type="button"
                  >
                    <svg className="w-auto" width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="#EA4335"
                        d="M23.96 12.28c0-.79-.07-1.56-.18-2.32H12v4.38h6.06c-.26 1.43-1.03 2.64-2.13 3.43v2.84h3.44c2.02-1.85 3.18-4.56 3.18-7.33z"
                      />
                      <path
                        fill="#4285F4"
                        d="M12 24c2.88 0 5.29-.95 7.06-2.58l-3.44-2.84c-.95.64-2.16 1.02-3.62 1.02-2.78 0-5.13-1.87-5.97-4.39H1.02v2.75C3.77 21.18 7.62 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M6.03 14.39c-.24-.71-.38-1.48-.38-2.28s.14-1.57.38-2.28V7.04H1.98A11.98 11.98 0 0 0 0 12c0 1.93.46 3.76 1.27 5.39l4.76-3.44z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 4.08c1.54 0 2.94.53 4.03 1.58l3.02-3.02C17.26.89 14.85 0 12 0 7.62 0 3.77 2.82 1.27 7.04l4.76 3.44c.84-2.52 3.19-4.39 5.97-4.39z"
                      />
                      <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                    Google
                  </button>
                </div>
                <hr className="border-b-1 mt-6 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <div className="mb-3 text-center font-bold text-blueGray-400">
                  <small>Or sign in with credentials</small>
                </div>
                <form>
                  <div className="relative mb-3 w-full">
                    <label
                      className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative mb-3 w-full">
                    <label
                      className="mb-2 block text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-blueGray-600 placeholder-blueGray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex cursor-pointer items-center">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox ml-1 h-5 w-5 rounded border-0 text-blueGray-700 transition-all duration-150 ease-linear"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      className="mb-1 mr-1 w-full rounded bg-blueGray-800 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blueGray-600"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="relative mt-6 flex flex-wrap">
              <div className="w-1/2">
                <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-blueGray-200">
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <small>Super Admins Section</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Adminlogin.layout = Auth;
