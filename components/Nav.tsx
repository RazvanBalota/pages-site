type Props = {
  heading: string;
  chlidren: any;
};

export function Nav({ heading, children }: Props) {
  return (
    <nav class="flex flex-col text-sm lg:text-md">
      <header class="font-medium uppercase">{heading}</header>
      {children.map((child) => (
        <a href="#" class="hover:text-gray-900 transition">{child}</a>
      ))}
      <a href="#" class="hover:text-gray-900 transition">Contact</a>
    </nav>
  );
}
