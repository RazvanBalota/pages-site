type Props = {
  children: string | HTMLElement
}

export default function Paragraph({children}: Props) {
    return (
      <p class="text-base lg:text-lg tracking-tight leading-6 pb-2">
          {children}
      </p>
    );
  }
  