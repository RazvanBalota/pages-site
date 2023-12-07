

export default function Paragraph(props: {paragraph: string} ) {
    return (
      <h1 class="text-base lg:text-lg tracking-tight leading-6 pb-2">
          {props.paragraph}
      </h1>
    );
  }
  