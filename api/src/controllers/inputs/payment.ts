import axios from "axios";

const { MP_TOKEN } = process.env;
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: MP_TOKEN,
});

export const postPayment = (req, res) => {
  const products = req.body;
  console.log(req.body);

  // preference
  let preference = {
    items: products,
    back_urls: {
      // corregir redireccionamiento
      success: `http://localhost:3001/home/reserva/viajes/confirmacion/pagos/checkout`,
      failure: `http://localhost:3001/failure`,
      pending: ``,
    },
    auto_return: "approved",
    binary_mode: true,
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => {
      res.status(200).json({
        response,
      });
    })
    .catch((error) => {
      res.status(400).send({ error: error.message });
    });
};

export const getMerchantOrderData = async (req, res): Promise<void> => {
  const { merchantOrder } = req.query;
  try {
    const { data } = await axios.get(
      `https://api.mercadopago.com/merchant_orders/${merchantOrder}`,
      {
        headers: {
          Authorization: `Bearer ${MP_TOKEN}`,
        },
      }
    );

    return res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
