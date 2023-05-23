import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Urban",
      version: "1.0.0",
      description: "API de ejemplo utilizando Swagger y Express con TypeScript",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
    components: {
      schemas: {
        UserToRegister: {
          type: "object",
          properties: {
            firstName: {
              type: "string",
            },
            lastName: {
              type: "string",
            },
            email: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
          required: ["name", "email", "password"],
        },
        User: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "ID del usuario",
            },
            birthday: {
              type: "string",
              description: "Fecha de nacimiento del usuario",
            },
            firstName: {
              type: "string",
              description: "Nombre del usuario",
            },
            lastName: {
              type: "string",
              description: "Apellido del usuario",
            },
            email: {
              type: "string",
              description: "Email del usuario",
            },
            cc: {
              type: "string",
              description: "Cédula de ciudadania del usuario",
            },
            gender: {
              type: "string",
              description: "Género del usuario",
            },
            ce: {
              type: "string",
              description: "Cédula de extranjería del usuario",
            },
            deleted: {
              type: "boolean",
              description: "Indica si el usuario está eliminado",
            },
            nationality: {
              type: "string",
              description: "Nacionalidad del usuario",
            },
            img: {
              type: "string",
              description: "Imagen del usuario",
            },
            createdAt: {
              type: "string",
              description: "Fecha de creación del usuario",
            },
            password: {
              type: "string",
              description: "Contraseña del usuario",
            },
            address: {
              type: "object",
              properties: {
                number: {
                  type: "string",
                  description: "Numero de la calle",
                },
                street: {
                  type: "string",
                  description: "Nombre de calle",
                },
                postalCode: {
                  type: "string",
                  description: "Codigo posta de localidad",
                },
                location: {
                  type: "string",
                  description: "Localidad",
                },
                state: {
                  type: "string",
                  description: "Estado",
                },
                department: {
                  type: "string",
                  description: "Numero de departamento",
                },
              },
              description: "Información de donde vive el usuario",
            },
            payments: {
              type: "object",
              properties: {
                securityCode: {
                  type: "string",
                  description: "Código de seguridad de la tarjeta de crédito del usuario",
                },
                cardNumber: {
                  type: "string",
                  description: "Número de tarjeta de crédito del usuario",
                },
                expirationDate: {
                  type: "string",
                  description: "Fecha de expiración de la tarjeta de crédito del usuario",
                },
              },
              description: "Información de pagos del usuario",
            },
            history: {
              type: "object",
              properties: {
                travels: {
                  type: "array",
                  items: {
                    type: "string",
                    description: "ID de los viajes del usuario",
                  },
                  description: "Lista de IDs de los viajes del usuario",
                },
                orders: {
                  type: "array",
                  items: {
                    type: "string",
                    description: "ID de los pedidos del usuario",
                  },
                  description: "Lista de IDs de los pedidos del usuario",
                },
                tickets: {
                  type: "array",
                  items: {
                    type: "string",
                    description: "ID de los billetes del usuario",
                  },
                  description: "Lista de IDs de los billetes del usuario",
                },
              },
            },
            phone: {
              type: "object",
              properties: {
                number: {
                  type: "string",
                  description: "Numero de principal de numero",
                },
                areaCode: {
                  type: "string",
                  description: "Area de codigo del numero",
                },
                displayPhone: {
                  type: "string",
                  description: "Numero completo del numero",
                },
              },
              description: "Informacion del numero",
            },
          },
        },
        RatingInput: {
          type: "object",
          properties: {
            rating: {
              type: "number",
              description: "Calificación de la entrega (entre 1 y 5)",
            },
            comment: {
              type: "string",
              description: "Comentario adicional (opcional)",
            },
          },
        },
      },
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: [
    path.join(__dirname, "/routers/inputs/*.ts"),
    path.join(__dirname, "/routers/outputs/*.ts"),
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec };
