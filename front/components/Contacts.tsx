import InstagramIcon from "@/public/icons/instagram";
import WhatsappIcon from "@/public/icons/whatsapp";
import Image from "next/image";

export default function Contacts() {
  return (
    <section id="contacts" className="flex flex-col items-center gap-3">
      <h2 className="font-medium text-lg">
        Entre em contato e venha nos visitar
      </h2>
      <div className="w-full flex justify-center gap-5">
        <a
          href="https://wa.me/5581992478819"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappIcon className="size-12" />
        </a>
        <a
          href="https://www.instagram.com/paisdepetcandeias/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="size-12" />
        </a>
      </div>
    </section>
  );
}
