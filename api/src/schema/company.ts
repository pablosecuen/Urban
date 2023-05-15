export interface Company {
  name: string;
  rating: number;
  createdAt: string;
}
export interface CompanyToUpdate extends Company {
  updatedAt: string;
}
