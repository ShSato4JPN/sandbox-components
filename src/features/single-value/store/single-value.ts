import { atom } from "jotai";
import { UnitPosition } from "../types/field";
import { RecordFilter } from "../types/filter";

export const fieldCodeAtom = atom<string | null>(null);

export const titleAtom = atom<string | null>(null);

export const digitAtom = atom<boolean>(true);
export const scaleAtom = atom<number | null>(null);
export const unitAtom = atom<string | null>(null);
export const unitPositionAtom = atom<UnitPosition>("BEFORE");

export const recordFilterAtom = atom<RecordFilter[]>([]);
