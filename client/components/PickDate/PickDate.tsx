"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function PickDate() {
  const [fecha, setFecha] = useState(new Date());

  const handleFechaChange = (date: any) => {
    setFecha(date);
  };

  return (
    <DatePicker
      className="xl:ml-1 xl:w-[310px] xl:pl-2 "
      dateFormat="dd/MM/yyyy"
      selected={fecha}
      onChange={handleFechaChange}
      showYearDropdown
      yearDropdownItemNumber={4}
      scrollableYearDropdown
      placeholderText="Escriba o elija una fecha..."
      calendarClassName="flex items-center relative justify-center xl:ml-[800px] xl:w-1/4"
    />
  );
}
