import { Router } from "express";
import {
  newUser,
  updateUser,
  deletedUser,
  enableUser,
  newDeliveryRating,
  newChauffeurRating,
} from "../../controllers/inputs/user";
import { newUserValidated, updateUserValidated } from "../../utils/validations/user";
import { newRatingValidator } from "../../utils/validations/rating";

const router = Router();

/**
 * @swagger
 *
 * /users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Crea un nuevo usuario con la información proporcionada
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserToRegister'
 *     responses:
 *       '201':
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID del usuario creado
 *       '400':
 *         description: Error al crear el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Descripción del error
 */
router.post("/", newUserValidated, newUser);

router.post("/rating/delivery/:userId/:deliveryId", newRatingValidator, newDeliveryRating);

router.post("/rating/chauffeur/:userId/:chauffeurId", newRatingValidator, newChauffeurRating);

/**
 * @swagger
 *
 * /users/{id}:
 *   put:
 *     summary: Actualizar un usuario existente
 *     description: Actualiza un usuario existente con los datos proporcionados en el body de la petición. No permite actualizar los valores de `history.orders` y `history.travels`.
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del usuario a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserToUpdate'
 *     responses:
 *       '200':
 *         description: Usuario actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       '400':
 *         description: Error al actualizar el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Descripción del error
 */
router.put("/:id", updateUserValidated, updateUser);

/**
 * @swagger
 *
 * /users/enable/{id}:
 *   patch:
 *     summary: Habilitar un usuario
 *     description: Activa un usuario que ha sido previamente desactivado
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del usuario a habilitar
 *     responses:
 *       '200':
 *         description: Usuario habilitado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación de la operación
 *       '400':
 *         description: Error al habilitar el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Descripción del error
 */
router.patch("/enable/:id", enableUser);

/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *     summary: Elimina un usuario por su ID
 *     description: Elimina un usuario de la base de datos.
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del usuario a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: Usuario eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       '400':
 *         description: Error al eliminar el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Descripción del error
 */
router.delete("/delete/:id", deletedUser);

export default router;
