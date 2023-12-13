import { VNode } from "preact";
import { JSX } from "preact/jsx-runtime";

type Props = {
  children: JSX.Element;
};

export default function Paragraph({ children }: Props) {
  return (
    <h1 class="text-base lg:text-lg tracking-tight leading-6 pb-2">
      {children}
    </h1>
  );
}
