//Padre
"use client";
import { Passage } from "@component/app/types/Passages";
import { RootState } from "@component/Redux/store/store";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Pagos() {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const passages = useSelector((state: RootState) => state.payment.passageById);

  console.log(passages);

  interface ToPay {
    passageId: string; // Update the type to a string or the appropriate type for passageId
    id: any;
    name: string | Passage;
    img: string | Passage | null;
    unit_price: number | Passage | null;
    quantity: number | Passage;
  }

  const token: string = `${user.id}`;

  let toPay: ToPay[] = [];

  if (passages) {
    toPay = passages.slice(0, 2).map((passage) => {
      return {
        passageId: passage.id,
        id: passage.id,
        name: `De ${passage.origin} a ${passage.destination}`,
        img: passage.img,
        unit_price: passage.price,
        quantity: passage.quantity,
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
      // currency_id: "COP",
    };
  });

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
    <div className="flex w-4/5 flex-col items-center justify-center gap-4 rounded-3xl border-2 py-20 text-center shadow-2xl shadow-black/40 lg:p-10">
      <span className="text-2xl">Valor a pagar: ${totalPrice}</span>
      <button>Bancolombia</button>
      <button onClick={handleClickMP}>Mercado Pago</button>
      <button>Generar ticket Efecty</button>
      <button>PSE</button>
      <button>Efectivo</button>
      <span className="font-bold">Cuando tu pago sea acreditado podrás gestionar tu viaje</span>
    </div>
  );
}
