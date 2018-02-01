export interface Book {
    id: number;
    description:string
    name:string;
    price: number;
    quantity: number;
    pictureUrl: string;
    categoryId: number;
    date: DateTimeFormat;
  }