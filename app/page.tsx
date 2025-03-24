import AboutUs from "@/components/AboutUs";
import Employees from "@/components/Employees";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Schedule from "@/components/Schedule";
import Services from "@/components/Services";
import Store from "@/components/Store";

export default function SPA() {
  return (
    <main>
      <Header />

      <div className="flex flex-col gap-15">
        <Home />
        <Store />
        <Services />
        <Employees />
        <AboutUs />
        <Schedule />
      </div>
    </main>
  );
}
