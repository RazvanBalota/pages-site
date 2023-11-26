import { JSX } from "preact/jsx-runtime";

export function About(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <section
      {...props}
      class={`${props.class} p-8 bg-base-200 w-full flex justify-center`}
    >
      <div class="max-w-screen-xl">
        <h2 class="font-montserrat text-4xl mb-12">Who are we</h2>

        <div class="flex">
          <p class="grow max-w-xl">
            A13 is a community of tech enthusiasts, entrepreneurs, and
            innovators that are passionate about building a thriving tech
            ecosystem in Alba Iulia. We are a diverse group of people with
            different backgrounds and experiences, but we all share the same
            vision: to make Alba Iulia a better place to live and work.
          </p>
          <div>
            <img
              src="/logos/whitecitycode_black.svg"
              alt="WhiteCity Code"
              class="max-h-24"
            />
            <img
              src="/logos/xplication.webp"
              alt="Xplication"
              class="max-h-24"
            />
            <img src="/logos/hub7.png" alt="HUB7" class="max-h-24" />
          </div>
        </div>
      </div>
    </section>
  );
}
