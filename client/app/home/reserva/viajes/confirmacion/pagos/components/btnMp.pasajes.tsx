"use client";
import { RootState } from "@component/Redux/store/store";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToPay } from "@component/app/types/MercadoPago";

export default function Pagos() {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const passages = useSelector((state: RootState) => state.payment.passageById);
  const passagerData = useSelector((state: any) => state.payment?.passengerData);

  const token: string = `${user.id}`;

  let toPay: ToPay[] = [];

  if (passages) {
    toPay = passages.slice(0, 2).map((passage, index) => {
      const passenger = passagerData[index];
      let description = `Pasaje de viaje cantidad ${passage.quantity}`;

      if (passenger) {
        const passengerInfo = `${passenger.nombre} ${passenger.apellido}`;
        description += `, a nombre de ${passengerInfo}, asiento ${passenger.asiento}`;
      }

      return {
        passageId: passage.id,
        id: passage.id,
        name: `De ${passage.origin} a ${passage.destination}`,
        img: passage.img,
        unit_price: passage.price,
        quantity: passage.quantity,
        description: description,
      };
    });
  }

  const totalPrice = toPay.reduce((total, item) => {
    const unitPrice = typeof item.unit_price === "number" ? item.unit_price : 0;
    const quantity = typeof item.quantity === "number" ? item.quantity : 0;
    return total + unitPrice * quantity;
  }, 0);

  const arrToPay = toPay.map((item) => {
    return {
      id: item.id,
      title: item.name,
      picture_url: item.img,
      unit_price: item.unit_price,
      quantity: item.quantity,
      //currency_id: "COP",
      description: item.description,
    };
  });
  console.log(arrToPay);

  const handleClickMP = async () => {
    try {
      if (token) {
        const { data } = await axios.post("http://localhost:3000/payment/new", arrToPay);
        window.location.href = await data.response.body.init_point;
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <span className='text-2xl'>Valor a pagar: ${totalPrice}</span>
      <button onClick={handleClickMP} className='w-48'>
        Mercado Pago
      </button>
    </>
  );
}
