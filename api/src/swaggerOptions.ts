import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Urban',
            version: '1.0.0',
            description: 'API de ejemplo utilizando Swagger y Express con TypeScript',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local',
            },
        ],
        components: {
            schemas: {
                UserToRegister: {
                    type: 'object',
                    properties: {
                        firstName: {
                            type: 'string'
                        },
                        lastName: {
                            type: 'string'
                        },
                        email: {
                            type: 'string'
                        },
                        password: {
                            type: 'string'
                        },
                    },
                    required: ['name', 'email', 'password']
                },
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description: 'ID del usuario'
                        },
                        password: {
                            type: 'string',
                            description: 'Contraseña del usuario'
                        },
                        img: {
                            type: 'string',
                            description: 'URL de la imagen del usuario'
                        },
                        deleted: {
                            type: 'boolean',
                            description: 'Indica si el usuario ha sido eliminado'
                        },
                        payments: {
                            type: 'object',
                            properties: {
                                securityCode: {
                                    type: 'string',
                                    description: 'Código de seguridad de la tarjeta de crédito del usuario'
                                },
                                cardNumber: {
                                    type: 'string',
                                    description: 'Número de tarjeta de crédito del usuario'
                                },
                                expirationDate: {
                                    type: 'string',
                                    description: 'Fecha de expiración de la tarjeta de crédito del usuario'
                                }
                            },
                            description: 'Información de pagos del usuario'
                        },
                        name: {
                            type: 'string',
                            description: 'Nombre del usuario'
                        },
                        adress: {
                            type: 'string',
                            description: 'Dirección del usuario'
                        },
                        history: {
                            type: 'object',
                            properties: {
                                travels: {
                                    type: 'array',
                                    items: {
                                        type: 'string',
                                        description: 'ID de los viajes del usuario'
                                    },
                                    description: 'Lista de IDs de los viajes del usuario'
                                },
                                orders: {
                                    type: 'array',
                                    items: {
                                        type: 'string',
                                        description: 'ID de los pedidos del usuario'
                                    },
                                    description: 'Lista de IDs de los pedidos del usuario'
                                }
                            }
                        },
                        email: {
                            type: 'string',
                            description: 'Correo electrónico del usuario'
                        },
                        DNI: {
                            type: 'string',
                            description: 'Número de documento de identidad del usuario'
                        }
                    }
                }
            },
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
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
        path.join(__dirname, '/routers/inputs/*.ts'),
        path.join(__dirname, '/routers/outputs/*.ts'),
    ],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec };
