import { Search } from "lucide-react";

export default function TenkiSearch() {
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl  font-bold">天気予報アプリ</h1>
      <div className="grid grid-cols-[2fr_auto] gap-4">
        <div className="w-full relative">
          <Search className="absolute left-3 top-4 h-6 w-6 text-gray-400" />
          <input
            type="text"
            className="w-full pl-12 py-4 rounded-lg text-lg bg-white"
            placeholder="都市名を検索..."
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <div className="w-full h-full grid grid-cols-2 rounded-lg p-2 bg-white">
            <button className="px-3 py-0.5 rounded-sm text-xl cursor-pointer">
              ℃
            </button>
            <button className="px-3 py-0.5 rounded-sm text-xl cursor-pointer">
              ℉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
