"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addMonths, isSameMonth, format } from "date-fns";
import { useState } from "react";
import { es } from "date-fns/locale";

export default function PickDate() {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [selected, setSelected] = useState<Date>();

  let footer = <p>Por favor elige un dia.</p>;
  if (selected) {
    footer = <p>seleccionaste {format(selected, "PP", { locale: es })}.</p>;
  }

  const defaultDate = new Date(2023, 4);

  return (
    <DayPicker
      captionLayout="dropdown-buttons"
      locale={es}
      mode="single"
      defaultMonth={defaultDate}
      fromMonth={defaultDate}
      selected={selected}
      onSelect={setSelected}
      fromYear={2023}
      toYear={2026}
      footer={footer}
      showOutsideDays
      fixedWeeks
    />
  );
}

// "use client";
// import { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// export default function PickDate() {
//   const [fecha, setFecha] = useState(new Date());

//   const handleFechaChange = (date: any) => {
//     setFecha(date);
//   };

//   return (
//     <DatePicker
//       className="xl:ml-1 xl:w-[310px] xl:pl-2 "
//       dateFormat="dd/MM/yyyy"
//       selected={fecha}
//       onChange={handleFechaChange}
//       showYearDropdown
//       yearDropdownItemNumber={4}
//       scrollableYearDropdown
//       placeholderText="Escriba o elija una fecha..."
//       calendarClassName="flex items-center relative justify-center xl:ml-[800px] xl:w-1/4"
//     />
//   );
// }
