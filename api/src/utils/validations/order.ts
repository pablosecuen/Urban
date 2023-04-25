import Order from "../../schema/order";

export const validateOrder = (dataOrder: Order): boolean => {
  if (
    !dataOrder.userId ||
    !dataOrder.distributorId ||
    !dataOrder.localId ||
    !dataOrder.date ||
    !dataOrder.price ||
    !dataOrder.destination ||
    !dataOrder.order
  ) {
    return false;
  }

  return true;
};
