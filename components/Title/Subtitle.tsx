import "./Subtitle.css";

type Props = {
  children: React.ReactNode;
};

export default function Subtitle({ children }: Props) {
  return <h3 className="subtitle relative Text__Main-Color">{children}</h3>;
}
