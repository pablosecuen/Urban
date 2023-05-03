import { VehicleForChauffeur } from "../../schema/chauffeur";
import { Payment } from "../../types/types";

export const isNameValid = (name: string): Boolean => {
  if (typeof name === "string" && name.length <= 50) return true;
  return false;
};
export const isFirstNameValid = (name: string): Boolean => {
  if (typeof name === "string" && name.length <= 50) return true;
  return false;
};
export const isLastNameValid = (name: string): Boolean => {
  if (typeof name === "string" && name.length <= 50) return true;
  return false;
};

export const isEmailValid = (email: string): Boolean => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (typeof email === "string" && emailRegex.test(email)) return true;
  return false;
};

export const isPasswordValid = (password: string): Boolean => {
  if (typeof password === "string" && password.length <= 50) return true;
  return false;
};

// numero de telefono en string de entre 8 y 20 caracteres
export const isPhoneValid = (phone: string): Boolean => {
  if (typeof phone === "string" && phone.length > 5 && phone.length < 20) return true;
  return false;
};

// IMPORTANTE!  solo permite DNI de 9 dígitos en formato string, preguntar como es en Colombia
export const isCcValid = (cc: string): Boolean => {
  if (typeof cc === "string" && cc.length === 8) return true;
  return false;
};

// IMPORTANTE! comprobar el formato de las licencias de Colombia
//actualmente permite string entre 5 y 20 caracteres
export const isLicenseValid = (license: string): Boolean => {
  if (typeof license === "string" && license.length >= 5 && license.length <= 20) return true;
  return false;
};

// string de entre 5 y 50 caracteres
export const isAddressValid = (address: string): Boolean => {
  if (typeof address === "string" && address.length >= 5 && address.length <= 50) return true;
  return false;
};

// string de entre 5 y 1000 caracteres (por si se usan links)
export const isImgValid = (img: string): Boolean => {
  if (typeof img === "string" && img.length >= 5 && img.length <= 1000) return true;
  return false;
};

export const isArrayImgValid = (imgs: string[]): Boolean => {
  if (imgs.every((i) => typeof i === "string")) return true;
  return false;
};

// string de entre 5 y 50 caracteres
export const isVehicleTypeValid = (vehicleType: string): Boolean => {
  const allowValues = ["motorcycle", "car", "bicycle", "van", "other"];
  if (allowValues.includes(vehicleType)) return true;
  return false;
};

// IMPORTANTE! => por ahora solo verifica que es un objeto (falta definir el formato)
export const arePaymentsValid = (payments: Payment): Boolean => {
  if (
    typeof payments.cardNumber === "string" &&
    typeof payments.expirationDate === "string" &&
    typeof payments.securityCode === "string"
  ) {
    return true;
  }
  return false;
};

export const isUserIdValid = (userId: string): Boolean => {
  if (typeof userId === "string") return true;
  return false;
};

export const isDistributorIdValid = (distributorId: string): Boolean => {
  if (typeof distributorId === "string") return true;
  return false;
};

export const isProductIdValid = (productId: string): Boolean => {
  if (typeof productId === "string") return true;
  return false;
};

export const isLocalIdValid = (localId: string): Boolean => {
  if (typeof localId === "string") return true;
  return false;
};

export const areVehiclesIdValid = (vehiclesId: string[]): Boolean => {
  if (vehiclesId.some((id) => typeof id !== "string")) return true;
  return false;
};

//IMPORTANTE: definir formato de fecha
export const isDateValid = (date: string): Boolean => {
  if (typeof date === "string") return true;
  return false;
};

export const isPriceValid = (price: number): Boolean => {
  if (typeof price === "number" && price >= 0) return true;
  return false;
};

export const isDestinationValid = (destination: string): Boolean => {
  if (typeof destination === "string" && destination.length >= 5 && destination.length <= 50)
    return true;
  return false;
};

export const isDescriptionValid = (description: string): Boolean => {
  if (typeof description === "string" && description.length >= 5 && description.length <= 1000)
    return true;
  return false;
};

export const isStockValid = (stock: number): Boolean => {
  if (typeof stock === "number" && stock >= 0) return true;
  return false;
};

//IMPORTANTE: verificar funcionamiento
export const isProductTypeValid = (type: string): Boolean => {
  const allowProductTypes = ["food", "drink", "snack", "other", "all"];
  if (typeof type === "string" && allowProductTypes.includes(type)) return true;
  return false;
};

//IMPORTANTE: verificar funcionamiento
export const isTravelTravelValid = (travel: string): Boolean => {
  const allowTravelStatus = ["pending", "progress", "approved", "rejected"];
  if (typeof travel === "string" && allowTravelStatus.includes(travel)) return true;
  return false;
};

export const isDeletedValid = (deleted: boolean): Boolean => typeof deleted === "boolean";

export const isTravelStatusValid = (status: boolean): Boolean => typeof status === "boolean";

export const isChauffeurIdValid = (chauffeurId: string): Boolean => {
  if (typeof chauffeurId === "string") return true;
  return false;
};

export const isOriginValid = (origin: string): Boolean => {
  if (typeof origin === "string" && origin.length >= 5 && origin.length <= 50) return true;
  return false;
};

export const isOwnerIdValid = (ownerId: string): Boolean => {
  if (typeof ownerId === "string") return true;
  return false;
};

export const isVehiclesIdValid = (vehiclesId: any): boolean => {
  if (Array.isArray(vehiclesId)) {
    return true;
  }
  return false;
};

export const isPatentValid = (patent: string): Boolean => {
  if (typeof patent === "string" && patent.length >= 5 && patent.length <= 10) return true;
  return false;
};

export const isBrandValid = (brand: string): Boolean => {
  if (typeof brand === "string" && brand.length >= 5 && brand.length <= 50) return true;
  return false;
};

export const isModelValid = (model: string): Boolean => {
  if (typeof model === "string" && model.length >= 5 && model.length <= 50) return true;
  return false;
};

export const isYearValid = (year: string): Boolean => {
  if (typeof year === "string" && year.length >= 2 && year.length <= 4) return true;
  return false;
};

export const isVehicleToChauffeurValid = (vehicle: VehicleForChauffeur): Boolean => {
  if (
    typeof vehicle === "object" &&
    typeof vehicle.vehicleId === "string" &&
    typeof vehicle.patent === "string"
  )
    return true;
  return false;
};
