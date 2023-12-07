import { JSX } from "preact";
import Title from "./Title.tsx"
import Paragraph from "./Paragraph.tsx"

export function Events(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <section
        {...props}
        class={`${props.class} bg-white w-screen lg:container-lg flex flex-col px-6 lg:px-12 pt-8`}
      >
          <div class="pb-4">
            <figure>
              <blockquote class=" leading-6 text-gray-900  sm:text-lg sm:leading-6 w-full lg:w-2/3">
                <Title title="Anti-Ateliere"/>
                <Paragraph paragraph="AI3 organizează întâlniri periodice unde se discută diferite strategii de îmbunătățire și planificare a proiectelor și evenimentelor conturând rolul județului Alba în ecosistemul tehnologic al regiunii."/>         
              </blockquote>
            </figure>
          </div>

          <div class="pb-4">
            <figure>
                <blockquote class=" leading-6 text-gray-900 sm:text-lg sm:leading-6 w-full lg:w-2/3">
                    <Title title="Festival Digital"/>
                    <Paragraph paragraph=" AI3 te invită să explorezi primul Festival Digital din județul Alba unde trecutul longeviv întâlnește manifestarea artistică digitală în cel mai important oraș istoric din România: Alba Iulia, Cealaltă Capitală."/>
                </blockquote>
            </figure>
          </div>

          <div>
            <figure class="flex flex-col lg:flex-row items-center gap-x-10">
              <div>
                <blockquote>
                    <Title title="Coder Dojo"/>
                    <Paragraph paragraph="CoderDojo este un club de informatică bazat pe voluntariat, care se adresează copiilor cu 
                      vârste intre 7 si 17 ani."/>
                    <Paragraph paragraph="Dojo-urile sunt un spațiu pentru copii și adolescenți pentru a explora tehnologia într-un 
                      mediu informal, creativ, sigur și social. La CoderDojo vrem să ajutăm copiii și adolescenții 
                      să realizeze că își pot construi un viitor pozitiv prin programare."/>
                    <Paragraph paragraph="Mișcarea CoderDojo consideră că înțelegerea limbajelor de programare este din ce în 
                      ce mai importantă în lumea modernă, că este mai bine și mai ușor să înveți aceste abilități 
                      devreme și că nimănui nu ar trebui să i se refuze oportunitatea de a face acest lucru."/>
                    <div class="flex gap-x-1 ">
                        <Paragraph paragraph="Mai multe detalii pe "/><a href="https://www.facebook.com/coderdojoalbaiulia/" class="text-base leading-6 tracking-tight lg:text-lg text-blue-500 hover:text-blue-600 transition">facebook</a>
                    </div>
                </blockquote>
              </div>
              <div class="w-2/4">
                <img src="/photos/coderdojo.jpeg" alt="anti-ateliere"/>
              </div>
            </figure>
          </div>
      </section>
    </>
  );
}
