import { Request, Response } from 'express';
import { db } from '../../connection/connection';
import { Products, ProductsToUpdate } from '../../schema/products';

export const newProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("hola");
    const data: Products = req.body;
    const docRef = await db.collection("products").add(data);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear un nuevo producto');
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedProductData: ProductsToUpdate = req.body;
    const productName: string = req.params.productName;
    await db.collection('products').doc(productName).update(updatedProductData);
    res.status(200).json(updatedProductData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el producto');
  }
};
export const deletedProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("product").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el producto");
    }
    await db.collection("product").doc(id).update({ deleted: true });
    res.status(201).json({ menssage: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("Error al borrar el Producto", error);
    res.status(400).json({ messege: error.message });
  }
};
