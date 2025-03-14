import Header from "@/components/Header";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Shop from "@/components/Shop";

export default function SPA() {
  return (
    <main>
      <Header />
      <div className="flex flex-col gap-5">
        <Home />
        <Shop />
        <Services />
      </div>
    </main>
  );
}
