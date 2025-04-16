import AboutUs from "@/components/AboutUs";
import Employees from "@/components/Employees";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Schedule from "@/components/Schedule";
import Services from "@/components/Services";

export default function SPA() {
  return (
    <main className="">
      <Header />

      <div className="flex flex-col gap-18">
        <Home />
        {/* <Store /> */}
        <AboutUs />
        <Services />
        <Employees />
        <Schedule />
      </div>
      <Footer />
    </main>
  );
}
