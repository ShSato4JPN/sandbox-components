import TenkiSearch from "@/features/tenki/tenki-search";
import TenkiToday from "@/features/tenki/tenki-today";
import TenkiWeekly from "@/features/tenki/tenki-weekly";

export default function Tenki() {
  return (
    <div className="grid place-items-center bg-blue-400">
      <div className="w-full max-w-[900px] grid place-items-center">
        <TenkiSearch />
        <TenkiToday />
        <TenkiWeekly />
      </div>
    </div>
  );
}
