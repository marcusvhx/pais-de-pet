import Header from "@/components/Header";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Store from "@/components/Store";

export default function SPA() {
  return (
    <main>
      <Header />
      <div className="flex flex-col gap-5">
        <Home />
        <Store />
        <Services />
      </div>
    </main>
  );
}
