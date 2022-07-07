export interface Field {
  id: number;

  state: string;

  city: string;

  type: FieldType;

  price: number;
}

export enum FieldType {
  Apartment = "Apartment",
  SingleFamily = "SingleFamily",
  Townhomes = "Townhomes",
  Condo = "Condo",
}
