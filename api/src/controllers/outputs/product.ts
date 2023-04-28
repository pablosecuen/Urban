import { Request, Response } from 'express';
import { db } from '../../connection/connection';
import { Products } from '../../schema/products';

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const filters = Object.keys(req.query)
      .filter(key => key !== 'page' && key !== 'pageSize')
      .reduce((acc, key) => {
        return acc.where(key, '==', req.query[key]);
      }, db.collection("products"));

    const productsSnapshot = await filters.limit(endIndex).get();

    const totalFilteredUsers = productsSnapshot.size;
    const totalPages = Math.ceil(totalFilteredUsers / pageSize);

    const productsData = productsSnapshot.docs.slice(startIndex, endIndex).map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json({ products: productsData, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los productos');
  }
};

export const getAllProductsByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const productType: string = req.params.productType;
    const productsSnapshot = await db.collection('products').where('type', '==', productType).get();

    const products = productsSnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los productos por tipo');
  }
};

export const getAllProductsByStore = async (req: Request, res: Response): Promise<void> => {
  try {
    const store: string = req.params.store;
    const productsSnapshot = await db.collection('products').where('localId', 'array-contains', store).get();

    const products = productsSnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los productos por tienda');
  }
};

