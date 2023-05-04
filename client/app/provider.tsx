"use client";
import { Provider } from "react-redux";
import { store } from "../Redux/store/store";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Toaster expand={true} position="bottom-right" richColors className="absolute w-12" />
      {children}
    </Provider>
  );
}
