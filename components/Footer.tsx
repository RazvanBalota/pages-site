import { JSX } from "preact/jsx-runtime";
import { Nav } from "./Nav.tsx";
import { association, legal } from "../routes/footer.tsx";

export function Footer(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <footer class="py-4 bg-base-200 w-full">
        <div class="mx-auto max-w-7xl flex justify-between px-4 lg:px-8 md:max-w-2xl lg:max-w-7xl">
          <Nav header="Asociație" content={association} />
          <Nav header="Legal" content={legal} />
        </div>
      </footer>
      <footer class="px-4 lg:px-10 py-2 border-t bg-base-300 border-base-300">
        <div class="flex items-center gap-x-2">
          <img src="/logos/ai3-ro.png" alt="AI3" class="max-h-16 lg:max-h-24">
          </img>
          <p class="text-sm lg:text-md">
            Construit cu mândrie în Alba Iulia{" "}
            <br />Creșterea comunității îndrumată de tehnologie.
          </p>
        </div>
      </footer>
    </>
  );
}
