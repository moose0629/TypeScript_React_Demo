import { Field, FieldType } from '../entity/Field';

const mockData: Field[] = [
  { id: 1, state: "Georgia", city: "Atlanta", type: FieldType.Apartment, price: 435 },
  { id: 2, state: "Georgia", city: "Atlanta", type: FieldType.SingleFamily, price: 546 },
  { id: 3, state: "Georgia", city: "Atlanta", type: FieldType.Condo, price: 657 },
  { id: 4, state: "Georgia", city: "Atlanta", type: FieldType.Apartment, price: 334 },
  { id: 5, state: "Georgia", city: "Atlanta", type: FieldType.Apartment, price: 778 },
  { id: 6, state: "Georgia", city: "Atlanta", type: FieldType.Apartment, price: 1233 },
  { id: 7, state: "Georgia", city: "Atlanta", type: FieldType.Apartment, price: 598 },
  { id: 8, state: "Georgia", city: "Atlanta", type: FieldType.Apartment, price: 774 },
  { id: 9, state: "Georgia", city: "Atlanta", type: FieldType.SingleFamily, price: 998 },
  { id: 10, state: "Georgia", city: "Macon", type: FieldType.SingleFamily, price: 1098 },
  { id: 11, state: "Georgia", city: "Macon", type: FieldType.Apartment, price: 598 },
  { id: 12, state: "Georgia", city: "Macon", type: FieldType.Apartment, price: 774 },
  { id: 13, state: "Georgia", city: "Macon", type: FieldType.SingleFamily, price: 998 },
  { id: 14, state: "Georgia", city: "Macon", type: FieldType.SingleFamily, price: 1098 },
  { id: 15, state: "Georgia", city: "Macon", type: FieldType.SingleFamily, price: 1098 },
  { id: 16, state: "Georgia", city: "Savannah", type: FieldType.Apartment, price: 598 },
  { id: 17, state: "Georgia", city: "Savannah", type: FieldType.Apartment, price: 774 },
  { id: 18, state: "Georgia", city: "Savannah", type: FieldType.SingleFamily, price: 998 },
  { id: 19, state: "Georgia", city: "Savannah", type: FieldType.SingleFamily, price: 1098 }
]

export default mockData;