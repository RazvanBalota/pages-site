import { JSX } from "preact";

export function Events(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <section
        {...props}
        class={`${props.class} bg-white pt-10 max-w-[1300px] flex flex-col items-center px-12`}
      >
        <div class="gap-x-12 flex items-center justify-center">
          <figure class="flex items-center gap-x-10 gap-y-4 lg:gap-x-12 ">
            <blockquote class=" leading-6 text-gray-900  sm:text-lg sm:leading-6">
              <h1 class="text-4xl font-medium">Anti-Ateliere</h1>
              <p class="text-md lg:text-xl tracking-tight max-w-[1300px]">AI3 va organiza întâlniri periodice unde vom discuta diferite strategii de îmbunătățire și planificare a proiectelor și evenimentelor conturând rolul județului Alba în
                  ecosistemul tehnologic al regiunii.</p>             
            </blockquote>
            <div class="flex flex-col w-16 lg:w-72 w-full">
            </div>
          </figure>
        </div>

        <div class="gap-x-12 flex items-center justify-center pt-6">
          <figure class="flex items-center gap-x-10 gap-y-4 lg:gap-x-12 ">
            <div class="flex">
              <blockquote class=" leading-6 text-gray-900 sm:text-lg sm:leading-6">
                  <h1 class="text-4xl font-medium">Festival Digital</h1>
                  <p class="text-md lg:text-xl tracking-tight max-w-[1300px]">
                    AI3 plănuiește să organizeze o conferință anuală în care oricine poate rezerva un stand 
                    și poate aduce ceva nou și inovator. Dorim să creăm activități pentru toată lumea, precum hackathone, prezentări și speakeri care vor 
                    aduce un nou nivel de experiență participanților.
                  </p>
              </blockquote>
            </div>
            <div class="flex flex-col w-16 lg:w-72 w-full">
            </div>
          </figure>
        </div>

        <div class="gap-x-12 pt-6 w-full">
          <figure class="flex items-center gap-x-10 gap-y-4 lg:gap-x-12">
            <div class="flex flex-2">
              <blockquote class=" leading-6 text-gray-900  sm:text-lg sm:leading-6">
                <h1 class="text-4xl font-medium">Coder Dojo</h1>
                <div class="flex flex-col text-md lg:text-xl tracking-tight ">
                  <p>
                    CoderDojo este un club de informatică bazat pe voluntariat, care se adresează copiilor cu 
                    vârste intre 7 si 17 ani.
                  </p>
                  <p class="pb-6">
                    Dojo-urile sunt un spațiu pentru copii și adolescenți pentru a explora tehnologia într-un 
                    mediu informal, creativ, sigur și social. La CoderDojo vrem să ajutăm copiii și adolescenții 
                    să realizeze că își pot construi un viitor pozitiv prin programare.
                  </p>
                  <p class="mb-8">Mai multe detalii pe <a href="https://www.facebook.com/coderdojoalbaiulia/" class="text-blue-500 font-medium hover:text-blue-600 transisiton">facebook</a>.</p>
                </div>
              </blockquote>
            </div>
            <div class="w-[40rem]">
              <img src="/photos/coderdojo.jpeg" alt="anti-ateliere"/>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}
