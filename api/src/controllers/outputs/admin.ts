import { Request, Response } from "express";
import { db } from "../../connection/connection";

export const getAdminState = async (req: Request, res: Response): Promise<void> => {
  try {
    const doc = await db.collection("adminStatus").doc("BECMkRXkiNt1QmsQjjZT").get();
    if (!doc.exists) {
      res.status(404).json({ message: "AdminStatus no encontrado" });
    } else {
      const adminState = { id: doc.id, ...doc.data() };
      res.status(200).json(adminState);
    }
  } catch (error) {
    console.error("Error al obtener el adminState", error);
    res.status(500).json({ message: "Error al obtener el adminState" });
  }
};

export const getProfit = async (req: Request, res: Response) => {
  try {
    const mes = req.query.mes as string; // Obtener el mes de la query string

    // Obtener datos de las tres colecciones
    const ticketsSnap = await db.collection('tickets').get();
    const ordersSnap = await db.collection('orders').get();
    const travelsSnap = await db.collection('travels').get();

    // Unir los datos de las tres colecciones
    const entradas = [
      ...ticketsSnap.docs.map(doc => ({ price: doc.data().price, createdAt: doc.data().createdAt })),
      ...ordersSnap.docs.map(doc => ({ price: doc.data().price, createdAt: doc.data().createdAt })),
      ...travelsSnap.docs.map(doc => ({ price: doc.data().price, createdAt: doc.data().createdAt })),
    ];

    // Filtrar las entradas por mes
    const entradasDelMes = entradas.filter(entrada => {
      const fecha = new Date(entrada.createdAt);
      return fecha.getMonth() === parseInt(mes) - 1;
    });

    // Sumar los precios de las entradas del mes
    const gananciasDelMes = entradasDelMes.reduce((total, entrada) => total + entrada.price, 0);

    // Devolver las ganancias en formato JSON
    res.json({ ganancias: gananciasDelMes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error' }); // Devolver un error 500 si ocurre algún problema
  }
};