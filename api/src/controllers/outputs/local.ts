import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { getDocs } from "firebase/firestore";
import { Local } from "../../schema/local";

export const searchLocal = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;

    const doc = await db.collection("locals").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Local no encontrado" });
    } else {
      const local = doc.data() as Local;
      res.json(local);
    }
  } catch (error) {
    console.error("Error al obtener el local", error);
    res.status(500).json({ message: "Error al obtener el local" });
  }
};

export const getLocals = async (req: Request, res: Response): Promise<void> => {
  try {
    const name: string = req.query.name.toString();
    const localsRef = db.collection("locals");

    let localsSnapshot: any;
    if (name) {
      const query = localsRef
        .where("name", ">=", name)
        .where("name", "<", `${name}\uf8ff`)
        .where("deleted", "==", false);
      localsSnapshot = await getDocs(query);
    } else {
      const query = localsRef.where("deleted", "==", false);
      localsSnapshot = await getDocs(query);
    }
    const locals: Object[] = [];
    localsSnapshot.forEach((doc) => {
      const local = {
        id: doc.id,
        ...doc.data(),
      };
      locals.push(local);
    });

    res.json(locals);
  } catch (error) {
    console.error("Error al obtener los locales", error);
    res.status(500).json({ message: "Error al obtener los locales" });
  }
};

export const getLocalByProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const productDoc = await db.collection("products").doc(id).get();

    if (!productDoc.exists) {
      res.status(404).json({ message: "Producto no encontrado" });
    } else {
      const product = productDoc.data();

      const localDoc = await db.collection("locals").doc(product.localId[0]).get();
      if (!localDoc.exists) {
        res.status(404).json({ message: "Local no encontrado" });
      } else {
        const local = localDoc.data() as Local;
        res.json(local);
      }
    }
  } catch (error) {
    console.error("Error al obtener el local", error);
    res.status(500).json({ message: "Error al obtener el local" });
  }
};

// -------------------------  POSIBLE METODO PARA MULTIPLES QUERYS DINÁMICAS ------------------------------- //

// const querys = req.query;
//     const property = Object.keys(querys)[0]
//     const value = querys[property]
//     const FunctionGetLocals = {
//       name: async (name) => {
//         const query = localsRef
//           .where("name", ">=", name)
//           .where("name", "<", `${name}\uf8ff`)
//           .where("deleted", "==", false);
//         return usersSnapshot = await getDocs(query);
//       },
//       dni: async(dni) => {
//         const query = localsRef
//           .where("DNI", ">=", dni)
//           .where("deleted", "==", false);
//         return usersSnapshot = await getDocs(query);
//       },
//       email: async(email) => {
//         const query = localsRef
//           .where("DNI", ">=", email)
//           .where("deleted", "==", false);
//         return usersSnapshot = await getDocs(query);
//       },
//     };

//     let usersSnapshot: any;
//     const result = FunctionGetLocals[property](value)
//     res.status(200).json(result);
