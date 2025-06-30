export type GuitarItem = {
  id: string;
  name: string;
  brand: string;
  type: string;
  price: number;
  description?: string;
};

export type BassItem = {
  id: string;
  name: string;
  brand: string;
  type: string;
  price: number;
  description?: string;
};

export type GearItem = GuitarItem | BassItem;
