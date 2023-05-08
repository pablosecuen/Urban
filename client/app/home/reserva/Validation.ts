import { Query } from '../../types/Passages';

export const validateGetPassage = ( query: Query) => {
    const { origin, destination, departureDate } = query
    if (!origin || !destination || !departureDate) {
        throw new Error('Missing parameters')
    } 
}