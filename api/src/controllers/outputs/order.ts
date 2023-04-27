import { Request, Response } from "express";
import { db } from "../../connection/connection";
import Order from "../../schema/order";
import { newOrder } from "../inputs/order";

/**
 * Controlador para buscar una orden por id
 */
export const searchOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const doc = await db.collection("orders").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Orden no encontrado" });
    } else {
      const orden = doc.data() as Order;
      res.status(201).json(orden);
    }
  } catch (error) {
    console.error("Error al obtener la orden", error);
    res.status(500).json({ message: "Error al obtener la orden" });
  }
};
/**
 * controlador para buscar todas las ordenes
 */
export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const ordersRef = db.collection("orders");
    const [ordersSnapshot, totalOrdersSnapshot] = await Promise.all([
      ordersRef.limit(endIndex).get(),
      ordersRef.get(),
    ]);
    const ordersData = ordersSnapshot.docs
      .slice(startIndex, endIndex)
      .map((doc) => ({ id: doc.id, ...doc.data() }));
    const totalOrders = totalOrdersSnapshot.size;

    res.status(201).json({ orders: ordersData, totalOrders });
  } catch (error) {
    console.error("Error al obtener las ordenes", error);
    res.status(500).json({ message: "Error al obtener las ordenes" });
  }
};
