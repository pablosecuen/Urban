import { VehicleForChauffeur } from "../../schema/chauffeur";
import { Address, Payment, Phone, TypeVehicle } from "../../types/types";

export const isNameValid = (name: string): string | null => {
  if (typeof name !== "string") {
    return "El nombre debe ser una cadena de texto";
  }
  if (name.length > 50) {
    return "El nombre no puede tener más de 50 caracteres";
  }
  return null; // Sin errores
};

export const isFirstNameValid = (firstName: string): string | null => {
  if (typeof firstName !== "string") {
    return "El primer nombre debe ser una cadena de texto";
  }
  if (firstName.length > 50) {
    return "El primer nombre no puede tener más de 50 caracteres";
  }
  return null; // Sin errores
};

export const isPasswordValid = (password: string): string | null => {
  if (typeof password !== "string") {
    return "La contraseña debe ser una cadena de texto";
  }
  if (password.length > 50) {
    return "La contraseña no puede tener más de 50 caracteres";
  }
  return null; // Sin errores
};

export const isEmailValid = (email: string): string | null => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (typeof email !== "string") {
    return "El correo electrónico debe ser una cadena de texto";
  }
  if (!emailRegex.test(email)) {
    return "El correo electrónico no es válido";
  }
  return null; // Sin errores
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

export const isDisplayNameValid = (displayName: string): string | null  => {
  if(typeof  displayName === "string" && displayName.length <= 50) return null;
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

export const isBirthdayValid = (birthday: string): string | null=> {
  if (typeof birthday === "string" && birthday.length <= 50) return null;
  return "La fecha de nacimiento no es válida";
};

export const isPassportValid = (passport: string): Boolean => {
  if (typeof passport === "string" && passport.length <= 100) return true;
  return false;
};

// IMPORTANTE! comprobar el formato de las licencias de Colombia
//actualmente permite string entre 5 y 20 caracteres
export const isLicenseValid = (license: string): Boolean => {
  if (typeof license === "string" && license.length >= 5 && license.length <= 20) return true;
  return false;
};

export const isTypeChauffeurValid = (typeChauffeur: string): Boolean => {
  if (typeof typeChauffeur === "string" && typeChauffeur.length <= 300) return true;
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
  const allowProperties = ["cardNumber", "expirationDate", "securityCode"];
  if (
    typeof payments === "object" &&
    Object.keys(payments).every((key) => allowProperties.includes(key)) &&
    Object.values(payments).every((value) => typeof value === "string")
  ) {
    return true;
  }
  return false;
};

export const isUserIdValid = (userId: string): Boolean => {
  if (typeof userId === "string") return true;
  return false;
};

export const isDistributorIdValid = (dealerId: string): Boolean => {
  if (typeof dealerId === "string") return true;
  return false;
};

export const isRatingValid = (rating: number): Boolean => {
  if (typeof rating === "number" && rating >= 0 && rating <= 5) return true;
  return false;
};

export const isCommentValid = (comment: string): Boolean => {
  if (typeof comment === "string" && comment.length <= 200) return true;
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

export const isPassageIdValid = (localId: string): Boolean => {
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
export const isDepartureDateValid = (departureTime: string): Boolean => {
  if (typeof departureTime === "string") return true;
  return false;
};
export const iCheckInValid = (checkIn: string): Boolean => {
  if (typeof checkIn === "string") return true;
  return false;
};
export const isDepartureTimeValid = (departureTime: string): Boolean => {
  if (typeof departureTime === "string") return true;
  return false;
};
export const isArrivalDateValid = (arrivalTime: string): Boolean => {
  if (typeof arrivalTime === "string") return true;
  return false;
};
export const isDurationValid = (duration: string): Boolean => {
  if (typeof duration === "string") return true;
  return false;
};

export const isNumberSeatValid = (numberSeat: number): Boolean => {
  if (typeof numberSeat === "number") return true;
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
export const isDealerIdValid = (chauffeurId: string): Boolean => {
  if (typeof chauffeurId === "string") return true;
  return false;
};

export const isOriginValid = (origin: string): Boolean => {
  if (typeof origin === "string" && origin.length >= 5 && origin.length <= 50) return true;
  return false;
};

export const isOcupationValid = (ocupation: string): Boolean => {
  if (typeof ocupation === "string") return true;
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
  const allowProperties = ["vehicleId", "patent"];
  if (
    typeof vehicle === "object" &&
    Object.keys(vehicle).every((key) => allowProperties.includes(key)) &&
    Object.values(vehicle).every((value) => typeof value === "string")
  )
    return true;
  return false;
};

export const isTypeVehicleValidByChauffeur = (value: string): boolean => {
  const validTypes: TypeVehicle[] = ["motorcycle", "car"];
  return validTypes.includes(value as TypeVehicle);
};

export const isTypeVehicleValidByDealer = (value: string): boolean => {
  const validTypes: TypeVehicle[] = ["motorcycle", "car", "bicycle", "van", "other"];
  return validTypes.includes(value as TypeVehicle);
};
