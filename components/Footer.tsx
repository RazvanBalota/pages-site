import { JSX } from "preact/jsx-runtime";

export function Footer(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <footer class="py-4 bg-base-200 w-full">
        <div class="mx-auto max-w-7xl flex justify-between px-4 lg:px-8 md:max-w-2xl lg:max-w-7xl">
          <nav class="flex flex-col text-sm lg:text-md">
              <header class="font-medium uppercase">Asociație</header>
              <a href="#" class="hover:text-gray-900 transition">Despre noi</a>
              <a href="#" class="hover:text-gray-900 transition">Contact</a>
          </nav>
          <nav class="flex flex-col text-sm lg:text-md">
              <header class="font-medium uppercase">Legal</header>
              <a href="#" class="hover:text-gray-900 transition">Termeni și condiții</a>
              <a href="#" class="hover:text-gray-900 transition">Politică securitate</a>
              <a href="#" class="hover:text-gray-900 transition">Politică cookies</a>
          </nav>
        </div>
      </footer>
      <footer class="px-4 lg:px-10 py-2 border-t bg-base-300 border-base-300">
        <div class="flex items-center gap-x-2">
          <img src="/logos/ai3-ro.png" alt="AI3" class="max-h-16 lg:max-h-24"></img>
          <p class="text-sm lg:text-md">
            Construit cu mândrie în Alba Iulia{" "}
            <br />Creșterea comunității îndrumată de tehnologie.
          </p>
        </div>
      </footer>
    </>
  );
}
