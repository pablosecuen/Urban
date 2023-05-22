import { useState } from "react";

export default function FormCreatePassage() {
  const [newPassage, setNewPassage] = useState({
    stock: 0,
    price: 0,
    numberSeat: [],
    service: "",
    companyId: "",
    origin: "",
    destination: "",
    departureDate: "",
    departureTime: "",
    arrivalDate: "",
    arrivalTime: "",
    duration: "",
    img: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === "stock") {
      const stock = parseInt(value, 10);
      const numberSeat = Array.from({ length: stock }, (_, index) => (index + 1).toString());
      setNewPassage(
        (prevPassage) =>
          ({
            ...prevPassage,
            stock,
            numberSeat,
          } as typeof newPassage)
      );
    } else {
      setNewPassage(
        (prevPassage) =>
          ({
            ...prevPassage,
            [name]: value,
          } as typeof newPassage)
      );
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(newPassage);
    setNewPassage({
      stock: 0,
      price: 0,
      numberSeat: [],
      service: "",
      companyId: "",
      origin: "",
      destination: "",
      departureDate: "",
      departureTime: "",
      arrivalDate: "",
      arrivalTime: "",
      duration: "",
      img: "",
    });
  };

  return (
    <article>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <section>
            <label htmlFor="">PRECIO: </label>
            <input type="text" name="price" value={newPassage.price} onChange={handleChange} />
            <small>{""}</small>
          </section>
          <section>
            <label htmlFor="">ASIENTOS DISPONIBLES: </label>
            <input type="number" name="stock" value={newPassage.stock} onChange={handleChange} />
            <small>{""}</small>
          </section>
        </div>
        <div className="flex justify-between">
          <section>
            <label htmlFor="">ORIGEN: </label>
            <select name="origin" value={newPassage.origin} onChange={handleChange}>
              <option value="jardin">Jardin</option>
              <option value="amaga">Amaga</option>
              <option value="medellin">Medellin</option>
            </select>
            <small>{""}</small>
          </section>
          <section>
            <label htmlFor="">DESTINO: </label>
            <select name="destination" value={newPassage.destination} onChange={handleChange}>
              <option value="jardin">Jardin</option>
              <option value="amaga">Amaga</option>
              <option value="medellin">Medellin</option>
            </select>
            <small>{""}</small>
          </section>
        </div>
        <div className="flex justify-between">
          <section>
            <label htmlFor="">FECHA DE SALIDA: </label>
            <input
              type="date"
              name="arrivalDate"
              value={newPassage.arrivalDate}
              onChange={handleChange}
              disabled={false}
            />
            <small>{""}</small>
          </section>
          <section>
            <label htmlFor="">FECHA DE LLEGADA: </label>
            <input
              type="date"
              name="departureDate"
              value={newPassage.departureDate}
              onChange={handleChange}
              disabled={false}
            />
            <small>{""}</small>
          </section>
        </div>
        <div className="flex justify-between">
          <section>
            <label htmlFor="">HORARIO DE SALIDA: </label>
            <select name="arrivalTime" value={newPassage.arrivalTime} onChange={handleChange}>
              <option value="00:00 am">00:00 AM</option>
              <option value="01:00 am">00:00 AM</option>
              <option value="02:00 am">00:00 AM</option>
              <option value="03:00 am">00:00 AM</option>
              <option value="04:00 am">00:00 AM</option>
              <option value="05:00 am">00:00 AM</option>
              <option value="06:00 am">06:00 AM</option>
              <option value="07:00 am">07:00 AM</option>
              <option value="08:00 am">08:00 AM</option>
              <option value="09:00 am">09:00 AM</option>
              <option value="10:00 am">10:00 AM</option>
              <option value="11:00 am">12:00 PM</option>
              <option value="13:00 pm">13:00 PM</option>
              <option value="14:00 pm">14:00 PM</option>
              <option value="15:00 pm">15:00 PM</option>
              <option value="16:00 pm">16:00 PM</option>
              <option value="17:00 pm">17:00 PM</option>
              <option value="18:00 pm">18:00 PM</option>
              <option value="19:00 pm">19:00 PM</option>
              <option value="20:00 pm">20:00 PM</option>
              <option value="21:00 pm">21:00 PM</option>
              <option value="22:00 pm">22:00 PM</option>
              <option value="23:00 pm">23:00 PM</option>
            </select>
            <small>{""}</small>
          </section>
          <section>
            <label htmlFor="">HORARIO DE LLEGADA: </label>
            <select name="departureTime" value={newPassage.departureTime} onChange={handleChange}>
              <option value="00:00 am">00:00 AM</option>
              <option value="01:00 am">00:00 AM</option>
              <option value="02:00 am">00:00 AM</option>
              <option value="03:00 am">00:00 AM</option>
              <option value="04:00 am">00:00 AM</option>
              <option value="05:00 am">00:00 AM</option>
              <option value="06:00 am">06:00 AM</option>
              <option value="07:00 am">07:00 AM</option>
              <option value="08:00 am">08:00 AM</option>
              <option value="09:00 am">09:00 AM</option>
              <option value="10:00 am">10:00 AM</option>
              <option value="11:00 am">12:00 PM</option>
              <option value="13:00 pm">13:00 PM</option>
              <option value="14:00 pm">14:00 PM</option>
              <option value="15:00 pm">15:00 PM</option>
              <option value="16:00 pm">16:00 PM</option>
              <option value="17:00 pm">17:00 PM</option>
              <option value="18:00 pm">18:00 PM</option>
              <option value="19:00 pm">19:00 PM</option>
              <option value="20:00 pm">20:00 PM</option>
              <option value="21:00 pm">21:00 PM</option>
              <option value="22:00 pm">22:00 PM</option>
              <option value="23:00 pm">23:00 PM</option>
            </select>
            <small>{""}</small>
          </section>
        </div>
        <div className="flex justify-between">
          <section>
            <label htmlFor="">DURACION DEL VIAJE: </label>
            <select name="duration" value={newPassage.duration} onChange={handleChange}>
              <option value="1">1 hora</option>
              <option value="2">2 horas</option>
              <option value="3">3 horas</option>
              <option value="3">4 horas</option>
              <option value="3">5 horas</option>
              <option value="3">6 horas</option>
            </select>
            <small>{""}</small>
          </section>
          <section>
            <label htmlFor="">TIPO DE SERVICIO: </label>
            <select name="service" value={newPassage.service} onChange={handleChange}>
              <option value="semi-cama">Semi-cama</option>
              <option value="cama">Cama</option>
              <option value="cama-ejecutivo">Cama-ejecutivo</option>
            </select>
            <small>{""}</small>
          </section>
        </div>
        <div>
          <button>Crear Pasaje</button>
        </div>
      </form>
    </article>
  );
}
