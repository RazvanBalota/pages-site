
type Props = {
  children: any
}

export default function Paragraph({children}: Props) {
  return (
    <h1 class="text-base lg:text-lg tracking-tight leading-6 pb-2">
      {children}
    </h1>
  );
}
