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

  const handleChange = (event: any) => {
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <article>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <section>
            <label htmlFor="">PRECIO: </label>
            <input type="text" name="price" value={newPassage.price} />
            <small>{""}</small>
          </section>
          <section>
            <label htmlFor="">ASIENTOS DISPONIBLES: </label>
            <input type="text" name="stock" value={newPassage.stock} />
            <small>{""}</small>
          </section>
        </div>
        <div className="flex justify-between">
          <section>
            <label htmlFor="">ORIGEN: </label>
            <select name="origin" value={newPassage.origin}>
              <option value="jardin">Jardin</option>
              <option value="amaga">Amaga</option>
              <option value="medellin">Medellin</option>
            </select>
            <small>{""}</small>
          </section>
          <section>
            <label htmlFor="">DESTINO: </label>
            <select name="destination" value={newPassage.destination}>
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
            <input type="text" name="arrivaldate" value={newPassage.arrivalDate} />
            <small>{""}</small>
          </section>
          <section>
            <label htmlFor="">FECHA DE LLEGADA: </label>
            <input type="text" name="departuredate" value={newPassage.departureDate} />
            <small>{""}</small>
          </section>
        </div>
        <div className="flex justify-between">
          <section>
            <label htmlFor="">HORARIO DE SALIDA: </label>
            <select name="arrivaltime" value={newPassage.arrivalTime}>
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
            <select name="departuretime" value={newPassage.departureTime}>
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
            <select name="duration" value={newPassage.duration}>
              <option value="1">1 hora</option>
              <option value="2">2 horas</option>
              <option value="3">3 horas</option>
              <option value="3">4 horas</option>
              <option value="3">5 horas</option>
              <option value="3">6 horas</option>
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
