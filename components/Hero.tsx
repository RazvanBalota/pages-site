import { JSX } from "preact";

export function Hero(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <section {...props} class={`${props.class} hero flex max-w-screen-xl`}>
      <div class="hero-content flex-col lg:flex-row-reverse max-w-[100rem]">
        <img
          alt="a13"
          src="/photos/citadel.jpg"
          class="max-w-xl rounded-lg shadow-2xl mask mask-hexagon-2 rotate-30"
        />
        <div class="max-w-[60rem]">
          <p class="uppercase font-bold">Alba Iulia tech + startups</p>
          <h1 class="text-6xl font-extrabold">Tech-Driven <mark class="bg-accent text-base-200">Community</mark> Growth.</h1>
          <p class="py-6">
            Welcome to A13, where the journey has just begun. Join us in laying
            the foundation for innovation, fostering collaboration, and igniting
            growth together.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
}
