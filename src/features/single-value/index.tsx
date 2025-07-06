"use client";

import FilterField from "./components/filter-field";
import NumberField from "./components/number-field";
import SelectField from "./components/select-field";
import Title from "./components/title";

export default function SingleValue() {
  return (
    <div className="flex flex-col gap-4">
      <SelectField />
      <Title />
      <FilterField />
      <NumberField />
    </div>
  );
}
