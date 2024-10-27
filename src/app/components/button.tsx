type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <button className=" bg-accent px-20 py-3 text-lg">{children}</button>;
}
