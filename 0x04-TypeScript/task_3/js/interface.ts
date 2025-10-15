export type RowID = number;

// Defines the structure for a data row element.
export interface RowElement {
  firstName: string;
  lastName: string;
  // Age is an optional field.
  age?: number;
}