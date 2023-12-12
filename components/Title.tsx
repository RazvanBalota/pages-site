type Props = {
  children: string;
};

export default function Title({ children }: Props) {
  return (
    <h1 class="text-2xl lg:text-3xl font-medium tracking-tight pb-1">
      {children}
    </h1>
  );
}
