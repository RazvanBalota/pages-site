import { JSX } from "preact/jsx-runtime";

export function Members(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <section
      {...props}
      class={`${props.class} p-8 bg-neutral-content w-full`}
    >
      <h2 class="text-black text-center text-2xl text-extrabold mb-4">
        Members
      </h2>
      <div class="carousel carousel-center space-x-24  flex  justify-center mt-8 ">
        <div class="carousel-item">
          <img
            class="h-16"
            src="/logos/xplication_color.webp"
            alt="Xplication"
          />
        </div>
        <div class="carousel-item">
          <img
            class="h-16"
            src="/logos/whitecitycode_black.svg"
            alt="WhiteCity Code"
          />
        </div>
        <div class="carousel-item">
          <img
            class="h-16"
            src="/logos/hub7.png"
            alt="HUB7"
          />
        </div>
      </div>
    </section>
  );
}
