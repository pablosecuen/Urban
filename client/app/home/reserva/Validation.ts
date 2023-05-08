import { Query } from '../../types/Passages';

export const validateGetPassage = ( query: Query) => {
    const { origin, destination, departureDate, arrivalDate } = query
    if (!origin || !destination || !departureDate) {
        throw new Error('Missing parameters')
    } 
}