export type ListManagerResponseManager = {
  id: string;
  email: string;
  createdAt: Date;
};

export type ListManagerResponseDto = {
  managers: ListManagerResponseManager[];
};
