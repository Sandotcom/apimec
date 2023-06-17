import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-yellow-500 justify-between p-24">
      <h1 className="h-1.5 text-8xl font-bold ">API MEC</h1>
      <SearchForm />
    </main>
  );
}
