"use client"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import success from "../../../../../../assets/imagenes/success.png";
import axios from "axios";

interface Product {
  id: string;
  unitPrice: number;
  quantity: number;
}

interface RequestData {
  userId: string;
  products: Product[];
  paymentId: string | null;
  merchantOrder: string | null;
  status: string | null;
}

export default function Checkout() {
  const router = useRouter();
  const [dataState, setDataState] = useState<RequestData>({
    userId: "",
    products: [],
    paymentId: null,
    merchantOrder: null,
    status: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams(router.query.search as string);
      const paymentId = queryParams.get("payment_id");
      const merchantOrder = queryParams.get("merchant_order_id");
      const status = queryParams.get("status");

      if (paymentId && merchantOrder && status) {
        const requestData = await getToken(paymentId, merchantOrder, status);
        setDataState(requestData);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getToken = async (
    paymentId: string,
    merchantOrder: string,
    status: string
  ): Promise<RequestData> => {
    const { data } = await axios.get(`/token?merchantOrder=${merchantOrder}`);
    //este axios pueeeede llegar a ser a mercadopago

    const requestData: RequestData = {
      userId: "",
      products: data.items.map((product: any) => {
        return {
          id: product.id,
          unitPrice: product.unit_price,
          quantity: product.quantity,
        };
      }),
      paymentId: paymentId,
      merchantOrder: merchantOrder,
      status: status,
    };
    return requestData;
  };

  return (
    <div className="flex flex-col justify-center gap-8">
      <p className="text-center text-2xl font-bold">Su pago ha sido realizado con éxito !</p>
      <Image src={success} alt="pago exitoso" className="h-80 w-80 self-center" />

      <Link href="/home">
        <button className="mx-auto flex  w-1/2 justify-center py-1 text-center">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
