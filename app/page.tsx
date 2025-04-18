import AboutUs from "@/components/AboutUs";
import Contacts from "@/components/Contacts";
import Employees from "@/components/employees/Employees";
import Feedbacks from "@/components/feedbacks/Feedbacks";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Home from "@/components/Home";
import Address from "@/components/Address";
import Schedule from "@/components/schedule/Schedule";
import Services from "@/components/services/Services";

export default function SPA() {
  return (
    <main className="scroll-smooth">
      <Header />

      <div className="flex flex-col gap-15">
        <Home />
        {/* <Store /> */}
        <AboutUs />
        <Services />
        <Employees />
        <Feedbacks />
        <div>
          <Contacts />
          <Address />
        </div>
        <Schedule />
      </div>
      <Footer />
    </main>
  );
}
