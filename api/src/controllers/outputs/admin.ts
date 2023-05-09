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

export const getInactiveChauffeur = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = 1, pageSize = 10, ...filters } = req.query;

    const validFilters = Object.entries(filters).filter(([key, _]) => key !== "page" && key !== "pageSize");

    let query: any = db.collection("chauffeur").where("status", "==", false);

    validFilters.forEach(([property, value]) => {
      query = query.where(property, "==", value);
    });

    const chauffeurSnapshot = await query.get();

    const totalItems = chauffeurSnapshot.docs.length;
    const totalPages = Math.ceil(totalItems / Number(pageSize));

    const startIndex = (Number(page) - 1) * Number(pageSize);
    const endIndex = startIndex + Number(pageSize);

    const chauffeur = chauffeurSnapshot.docs.slice(startIndex, endIndex).map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.status(200).json({ chauffeur, totalPages });
  } catch (error) {
    console.error("Error al obtener los distribuidores", error);
    res.status(500).json({ message: "Error al obtener los distribuidores" });
  }
};

export const getInactiveDeliverys = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = 1, pageSize = 10, ...filters } = req.query;

    const validFilters = Object.entries(filters).filter(([key, _]) => key !== "page" && key !== "pageSize");

    let query: any = db.collection("deliverys").where("status", "==", false);

    validFilters.forEach(([property, value]) => {
      query = query.where(property, "==", value);
    });

    const deliverySnapshot = await query.get();

    const totalItems = deliverySnapshot.docs.length;
    const totalPages = Math.ceil(totalItems / Number(pageSize));

    const startIndex = (Number(page) - 1) * Number(pageSize);
    const endIndex = startIndex + Number(pageSize);

    const delivery = deliverySnapshot.docs.slice(startIndex, endIndex).map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.status(200).json({ delivery, totalPages });
  } catch (error) {
    console.error("Error al obtener los distribuidores", error);
    res.status(500).json({ message: "Error al obtener los distribuidores" });
  }
};