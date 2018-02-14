export interface Book {
    id: string;
    description:string
    name:string;
    price: number;
    quantity: number;
    pictureUrl: string;
    categoryId: number;
    date: DateTimeFormat;
  }


  export interface CartBook {
    id: String;
    name:String;
    price: number;
    quantity: number;
    pictureUrl: String;
    categoryId: String;
  }


