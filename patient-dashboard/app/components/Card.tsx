// Card Prop Types
type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <article>{children}</article>;
}
