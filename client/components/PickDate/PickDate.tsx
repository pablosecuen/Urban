import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function PickDate() {
  const [fecha, setFecha] = useState(new Date());

  const handleFechaChange = (date) => {
    setFecha(date);
  };

  return <DatePicker className="ml-1 w-[310px] " selected={fecha} onChange={handleFechaChange} />;
}
