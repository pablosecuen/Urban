export interface Company {
  name: string;
  rating: number;
  comments: Array<{ comment: string; userId: string }>;
  createdAt: string;
}
