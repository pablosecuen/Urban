import { VehicleForChauffeur } from "../../schema/chauffeur";
import { Address, Payment, Phone, TypeVehicle } from "../../types/types";
import createHttpError from "http-errors";
import { Request, Response, NextFunction } from "express";

export const isNameValid = (req: Request, res: Response): void => {
  const name: string = req.body.lastName;
  if (typeof name !== "string") {
    throw createHttpError(400, "El nombre debe ser una cadena de texto");
  }
  if (name.length > 50) {
    throw createHttpError(400, "El nombre no puede tener más de 50 caracteres");
  }
};

export const isFirstNameValid = (req: Request, res: Response): void => {
  const name: string = req.body.firstName;

  if (typeof name !== "string") {
    throw createHttpError(400, "El nombre debe ser una cadena de texto");
  }
  if (name.length > 50) {
    throw createHttpError(400, "El nombre no puede tener más de 50 caracteres");
  }
};

export const isPasswordValid = (req: Request, res: Response): void => {
  const password: string = req.body.password;

  if (typeof password !== "string") {
    throw createHttpError(400, "La contraseña debe ser una cadena de texto");
  }
  if (password.length > 50) {
    throw createHttpError(400, "La contraseña no puede tener más de 50 caracteres");
  }
};

export const isEmailValid = (req: Request, res: Response): void => {
  const email: string = req.body.email;

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (typeof email !== "string") {
    throw createHttpError(400, "El correo debe ser una cadena de texto");
  }
  if (!emailRegex.test(email)) {
    throw createHttpError(400, "El correo no es válido");
  }
};

export const isAddressValid = (address: Address): string | null => {
  const allowProperties = ["postalCode", "location", "state", "street", "number", "department"];
  if (
    typeof address === "object" &&
    Object.keys(address).every((key) => allowProperties.includes(key)) &&
    Object.values(address).every((value) => typeof value === "string")
  ) {
    return null; // Sin errores
  }
  return "La dirección no es válida";
};

export const isPhoneValid = (phone: Phone): string | null => {
  const allowProperties = ["areaCode", "number", "displayPhone"];
  if (
    typeof phone === "object" &&
    Object.keys(phone).every((key) => allowProperties.includes(key)) &&
    Object.values(phone).every((value) => typeof value === "string")
  ) {
    return null; // Sin errores
  }
  return "El teléfono no es válido";
};

export const isCcValid = (cc: string): string | null => {
  if (typeof cc !== "string") {
    return "El cc debe ser una cadena de texto";
  }
  if (cc.length > 8) {
    return "El cc no puede tener más de 50 caracteres";
  }
  return null; // Sin errores
};

export const isCeValid = (ce: string): string | null => {
  if (typeof ce === "string" && ce.length === 8) {
    return null; // Sin errores
  }
  return "El número de CE no es válido";
};

export const isGenderValid = (gender: string): string | null => {
  if (gender !== "male" && gender !== "female") {
    return "El género debe ser 'male' o 'female'";
  }
  return null; // Sin errores
};

export const isDisplayNameValid = (displayName: string): string | null => {
  if (typeof displayName === "string" && displayName.length <= 50) return null;
  return "El nombre de usuario no es válido";
};

export const isNationalityValid = (nationality: string): string | null => {
  if (typeof nationality === "string" && nationality.length <= 50) return null;
  return "La nacionalidad no es válida";
};

export const isGenderVality = (gender: string): Boolean => {
  if (typeof gender === "string" && gender.length <= 40) return true;
  return false;
};

export const isBirthdayValid = (birthday: string): string | null => {
  if (typeof birthday === "string" && birthday.length <= 50) return null;
  return "La fecha de nacimiento no es válida";
};

export const isPassportValid = (passport: string): string | null => {
  if (typeof passport === "string" && passport.length <= 50) return null;
  return "El pasaporte no es válido";
};

// IMPORTANTE! comprobar el formato de las licencias de Colombia
//actualmente permite string entre 5 y 20 caracteres
export const isLicenseValid = (license: string): string | null => {
  if (typeof license === "string" && license.length >= 5 && license.length <= 20) return null;
  return "La licencia no es válida";
};

export const isTypeChauffeurValid = (typeChauffeur: string): string | null => {
  if (typeof typeChauffeur === "string" && typeChauffeur.length <= 50) return null;
  return "El tipo de chauffeur no es válido";
};

// string de entre 5 y 1000 caracteres (por si se usan links)
export const isImgValid = (img: string): String | Boolean => {
  if (typeof img === "string" && img.length >= 5 && img.length <= 1000) return null;
  return "La imagen no es válida";
};

export const isArrayImgValid = (imgs: string[]): string | Boolean => {
  if (imgs.every((i) => typeof i === "string")) return null;
  return "La imagen no es válida";
};

// string de entre 5 y 50 caracteres
export const isVehicleTypeValid = (vehicleType: string): string | null => {
  if (typeof vehicleType === "string" && vehicleType.length >= 5 && vehicleType.length <= 50)
    return null;
  return "El tipo de vehículo no es válido";
};

// IMPORTANTE! => por ahora solo verifica que es un objeto (falta definir el formato)
export const arePaymentsValid = (payments: Payment): string | null => {
  const allowProperties = ["cardNumber", "expirationDate", "securityCode"];
  if (
    typeof payments === "object" &&
    Object.keys(payments).every((key) => allowProperties.includes(key)) &&
    Object.values(payments).every((value) => typeof value === "string")
  ) {
    return null;
  }
  return "Los pagos no son válidos";
};

export const isUserIdValid = (userId: string): string | null => {
  if (typeof userId === "string") return null;
  return "El id del usuario no es válido";
};

export const isDistributorIdValid = (dealerId: string): string | null => {
  if (typeof dealerId === "string") return null;
  return "El id del distribuidor no es válido";
};

export const isRatingValid = (rating: number): string | null => {
  if (typeof rating === "number" && rating >= 0 && rating <= 5) return null;
  return "El rating no es válido";
};

export const isCommentValid = (comment: string): string | null => {
  if (typeof comment === "string" && comment.length <= 200) return null;
  return "El comentario no es válido";
};

export const isProductIdValid = (productId: string): string | null => {
  if (typeof productId === "string") return null;
  return "El id del producto no es válido";
};

export const isCompanyIdValid = (companyId: string): string | null => {
  if (typeof companyId === "string") return null;
  return "El id de la compañía no es válido";
};

export const isLocalIdValid = (localId: string): string | null => {
  if (typeof localId === "string") return null;
  return "El id del local no es válido";
};

export const isPassageIdValid = (passageId: string): string | null => {
  if (typeof passageId === "string") return null;
  return "El id del pasaje no es válido";
};

export const areVehiclesIdValid = (vehiclesId: string[]): string | null => {
  if (vehiclesId.every((id) => typeof id === "string")) return null;
  return "El id del vehículo no es válido";
};

//IMPORTANTE: definir formato de fecha
export const isDateValid = (date: string): string | null => {
  if (typeof date === "string") return null;
  return "La fecha no es válida";
};

export const isDepartureDateValid = (departureTime: string): string | null => {
  if (typeof departureTime === "string") return null;
  return "La fecha de salida no es válida";
};

export const iCheckInValid = (checkIn: string): string | null => {
  if (typeof checkIn === "string") return null;
  return "El check in no es válido";
};

export const isDepartureTimeValid = (departureTime: string): string | null => {
  if (typeof departureTime === "string") return null;
  return "La hora de salida no es válida";
};

export const isArrivalDateValid = (arrivalTime: string): string | null => {
  if (typeof arrivalTime === "string") return null;
  return "La fecha de llegada no es válida";
};

export const isDurationValid = (duration: string): string | null => {
  if (typeof duration === "string") return null;
  return "La duración no es válida";
};

export const isNumberSeatValid = (numberSeat: number): string | null => {
  if (typeof numberSeat === "number") return null;
  return "El nÚmero de asientos no es válido";
};

export const isPriceValid = (price: number): string | null => {
  if (typeof price === "number") return null;
  return "El precio no es válido";
};

export const isDestinationValid = (destination: string): string | null => {
  if (typeof destination === "string" && destination.length >= 5 && destination.length <= 50)
    return null;
  return "La destino no es válido";
};

export const isDescriptionValid = (description: string): string | null => {
  if (typeof description === "string" && description.length >= 5 && description.length <= 1000)
    return null;
  return "La descripción no es válida";
};

export const isStockValid = (stock: number): string | null => {
  if (typeof stock === "number") return null;
  return "El stock no es válido";
};

//IMPORTANTE: verificar funcionamiento
export const isProductTypeValid = (type: string): string | null => {
  const allowProductTypes = ["food", "drink", "snack", "other", "all"];
  if (typeof type === "string" && allowProductTypes.includes(type)) return null;
  return "El tipo de producto no es válido";
};

//IMPORTANTE: verificar funcionamiento
export const isTravelTravelValid = (travel: string): string | null => {
  const allowTravelTypes = ["food", "drink", "snack", "other", "all"];
  if (typeof travel === "string" && allowTravelTypes.includes(travel)) return null;
  return "El tipo de viaje no es válido";
};

export const isDeletedValid = (deleted: boolean): string | null => {
  if (typeof deleted === "boolean") return null;
  return "El estado no es válido";
};

export const isTravelStatusValid = (status: boolean): string | null => {
  if (typeof status === "boolean") return null;
  return "El estado no es válido";
};

export const isChauffeurIdValid = (chauffeurId: string): string | null => {
  if (typeof chauffeurId === "string") return null;
  return "El id del chofer no es válido";
};

export const isDealerIdValid = (chauffeurId: string): string | null => {
  if (typeof chauffeurId === "string") return null;
  return "El id del chofer no es válido";
};

export const isOriginValid = (origin: string): string | null => {
  if (typeof origin === "string" && origin.length >= 5 && origin.length <= 50) return null;
  return "La origen no es válido";
};

export const isOcupationValid = (ocupation: string): string | null => {
  if (typeof ocupation === "string" && ocupation.length >= 5 && ocupation.length <= 50) return null;
  return "La ocupación no es válido";
};

export const isOwnerIdValid = (ownerId: string): string | null => {
  if (typeof ownerId === "string") return null;
  return "El id del propietario no es válido";
};

export const isVehiclesIdValid = (vehiclesId: any): string | null => {
  if (Array.isArray(vehiclesId)) return null;
  return "Los id de los vehículos no son válidos";
};

export const isPatentValid = (patent: string): string | null => {
  if (typeof patent === "string" && patent.length >= 5 && patent.length <= 10) return null;
  return "El patente no es válido";
};

export const isBrandValid = (brand: string): string | null => {
  if (typeof brand === "string" && brand.length >= 5 && brand.length <= 50) return null;
  return "La marca no es válida";
};

export const isModelValid = (model: string): string | null => {
  if (typeof model === "string" && model.length >= 5 && model.length <= 50) return null;
  return "El modelo no es válido";
};

export const isYearValid = (year: string): string | null => {
  if (typeof year === "string" && year.length >= 2 && year.length <= 4) return null;
  return "El año no es válido";
};

export const isVehicleToChauffeurValid = (vehicle: VehicleForChauffeur): string | null => {
  const allowProperties = ["vehicleId", "patent"];
  if (
    typeof vehicle === "object" &&
    Object.keys(vehicle).every((key) => allowProperties.includes(key)) &&
    Object.values(vehicle).every((value) => typeof value === "string")
  )
    return null;
  return "Los datos para el vehiculo no son correctos";
};

export const isTypeVehicleValidByChauffeur = (value: string): string | null => {
  const validTypes: TypeVehicle[] = ["motorcycle", "car", "bicycle"];
  if (validTypes.includes(value as TypeVehicle)) return null;
  return "El tipo de vehiculo no es válido";
};

export const isTypeVehicleValidByDealer = (value: string): string | null => {
  const validTypes: TypeVehicle[] = ["motorcycle", "car", "bicycle", "van", "other"];
  if (validTypes.includes(value as TypeVehicle)) return null;
  return "El tipo de vehiculo no es válido";
};

export const isServiceValid = (service: string): string | null => {
  if (typeof service !== "string") {
    return "El tipo de servicio no es válido";
  }
  const validServices = ["semi cama", "cama", "cama ejecutivo"];
  if (!validServices.includes(service.toLowerCase())) {
    return "El tipo de servicio no es válido";
  }
  return null;
};

export const isValidNumberSeat = (numberSeat: string[], stock: number): string | null => {
  if (!Array.isArray(numberSeat)) {
    return "El número de asientos debe ser un array";
  }

  if (numberSeat.length !== stock) {
    return "La longitud del número de asientos debe ser igual al stock";
  }

  for (const seat of numberSeat) {
    if (typeof seat !== "string") {
      return "Cada valor del número de asientos debe ser una cadena de texto";
    }
  }

  return null; // El número de asientos es válido
};
