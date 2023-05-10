"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addMonths, isSameMonth, format } from "date-fns";
import { useState } from "react";
import { es } from "date-fns/locale";

export default function PickDate() {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [days, setDays] = useState<Date[]>();

  const handleResetClick = () => setDays([]);

  const footer =
    days && days.length > 0 ? (
      <p>
        Seleccionaste {days.length} dia(s).{" "}
        <button onClick={handleResetClick} className="font-bold text-violet-700">
          Reset
        </button>
      </p>
    ) : (
      <p>Por favor elige uno o mas dias. </p>
    );

  const defaultDate = new Date(2023, 4);

  return (
    <DayPicker
      captionLayout="dropdown-buttons"
      locale={es}
      mode="multiple"
      defaultMonth={defaultDate}
      fromMonth={defaultDate}
      selected={days}
      onDayClick={handleResetClick}
      min={1}
      max={7}
      onSelect={setDays}
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
