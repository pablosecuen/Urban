import { Query } from '../../types/Passages';

export const validateQuery = (origin: string, destination: string, departureDate: string) =>  {
    return origin && destination && departureDate ? true : false;
  };