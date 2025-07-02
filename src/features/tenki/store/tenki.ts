import { atom } from "jotai";
import { Temperature } from "../types/tenki";

export const temperatureUnitAtom = atom<Temperature>("celsius");
