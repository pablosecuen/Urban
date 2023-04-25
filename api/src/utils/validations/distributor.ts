import { Distributor } from "../../schema/distributor";

export const validateDistributor = (data: Distributor): boolean => {
  // Validar que todas las propiedades tengan un valor válido

  if (
    !data.name ||
    !data.adress ||
    !data.email ||
    !data.password ||
    !data.img ||
    !data.vehicle ||
    !data.dni ||
    !data.license
  ) {
    return false;
  }

  return true;
};
