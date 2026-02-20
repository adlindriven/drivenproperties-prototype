import { SearchBoxDesktop } from "./components/SearchBoxDesktop";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-5xl">
        <SearchBoxDesktop />
      </div>
    </div>
  );
}