import { SetStateAction } from "jotai";
import { v7 as uuid } from "uuid";
import { BassItem, GearItem, GuitarItem } from "../types/items";

type useGearProps = {
  items: GearItem[];
  setItems: (value: SetStateAction<GuitarItem[] | BassItem[]>) => void;
};
export default function useGear({ items, setItems }: useGearProps) {
  const addItem = (newItem: Omit<GearItem, "id">) => {
    setItems((prevItem) => [...prevItem, { id: uuid(), ...newItem }]);
  };

  const updateItem = (newItem: GearItem) => {
    setItems(() =>
      items.map((item) => (newItem.id === item.id ? { ...newItem } : item))
    );
  };

  return { items, setItems, addItem, updateItem };
}
