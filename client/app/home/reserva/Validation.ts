import { Query } from '../../types/Passages';

export const validateQuery = (query: Query) => {
    const { origin, destination, departureDate } = query;
    return origin && destination && departureDate ? true : false;
  };