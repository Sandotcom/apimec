import TestGet from "@/components/TestGet";
import SearchForm from "../components/SearchForm";
import TableData from "../components/TableData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-amber-50 justify-between p-24">
      <h1 className="h-0 text-6xl font-bold text-yellow-400	">API MEC</h1>
      <TestGet />
      <SearchForm />

      <TableData />
    </main>
  );
}