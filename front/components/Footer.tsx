export default function Footer() {
  const instagemUrl = "https://instagram.com";
  return (
    <footer className="w-full py-2 bg-amber-900 text-white capitalize flex flex-wrap justify-center gap-x-4 gap-y-2">
      <p>
        design por{" "}
        <a className="underline" href={`${instagemUrl}/hiru_ice`}>
          @Hiru_ice
        </a>
      </p>
      <p>
        desenvolvido por{" "}
        <a className="underline" href={`${instagemUrl}/marcus.xavier.dev`}>
          @marcus.xavier.dev
        </a>
      </p>
      {/* <div className="w-full text-center">© copyright 2025</div> */}
    </footer>
  );
}
