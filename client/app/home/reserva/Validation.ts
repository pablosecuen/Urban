import { Query } from '../../types/Passages';

export const validateQuery = ( query: Query) => {
    const { origin, destination, departureDate } = query
    if (!origin || !destination || !departureDate) {
        throw new Error('Missing parameters')
    } 
}