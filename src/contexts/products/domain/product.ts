export interface IProduct {
  id?: string;
  name: string;
  description: string;
  stock: number;
  urlImage: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product {
  constructor(private attributes: IProduct) {}

  static create(createProduct: {
    name: string;
    description: string;
    stock: number;
    urlImage: string;
    price: number;
  }) {
    return new Product({
      name: createProduct.name,
      description: createProduct.description,
      stock: createProduct.stock,
      urlImage: createProduct.urlImage,
      price: createProduct.price,
    });
  }

  static fromPrisma(data: IProduct): Product {
    return new Product({
      id: data.id,
      name: data.name,
      description: data.description,
      stock: data.stock,
      urlImage: data.urlImage,
      price: data.price,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  }

  toValue(): IProduct {
    return {
      id: this.attributes.id,
      name: this.attributes.name,
      description: this.attributes.description,
      stock: this.attributes.stock,
      urlImage: this.attributes.urlImage,
      price: this.attributes.price,
      createdAt: this.attributes.createdAt,
      updatedAt: this.attributes.updatedAt,
    };
  }
}
