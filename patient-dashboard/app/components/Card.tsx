// Card Prop Types
type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-md">
      {children}
    </article>
  );
}
