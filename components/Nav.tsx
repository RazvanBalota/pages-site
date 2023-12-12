type Props = {
  header: string;
  content: 
  {
    title: string,
    href: string
  }[];
};

export function Nav({ header, content }: Props) {
  return (
    <nav class="flex flex-col text-sm lg:text-md">
      <header class="font-medium uppercase">{header}</header>
      {content.map((child) => (
        <a href={child.href} class="hover:text-gray-900 transition">{child.title}</a>
      ))}
    </nav>
  );
}
