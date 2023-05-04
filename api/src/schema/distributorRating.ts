export interface DistributorRatingToRegister {
  userId: string;
  distributorId: string;
  rating: number;
  comment: string;
}

export interface Ticket extends DistributorRatingToRegister {
  createdAt: string;
  updateAt: string;
}
