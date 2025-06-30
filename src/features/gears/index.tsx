import BassList from "./base-list";
import BassForm from "./bass-form";
import GuitarForm from "./guitar-form";
import GuitarList from "./guitar-list";

export default function Gears() {
  return (
    <div className="w-full grid place-items-center ">
      <div className="w-full grid grid-cols-2 gap-5">
        <div>
          <GuitarForm />
          <GuitarList />
        </div>
        <div>
          <BassForm />
          <BassList />
        </div>
      </div>
    </div>
  );
}
