

export default function Title(props: {title: string} ) {
  return (
    <h1 class="text-2xl lg:text-3xl font-medium tracking-tight pb-1">
        {props.title}
    </h1>
  );
}
