import { createContext, useState } from "react";

export const CountPassageContext = createContext({} as any);

export const CountPassageProvider = ({ children }: any) => {
  const [count, setCount] = useState(0);
  return (
    <CountPassageContext.Provider value={{ count, setCount }}>
      {children}
    </CountPassageContext.Provider>
  );
};
