export interface Company {
  id: string;
  name: string;
  rating: number;
  comments: Array<{ comment: string; userId: string }>;
  createdAt: string;
}
