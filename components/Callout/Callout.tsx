import "./Callout.css";

type CalloutProps = {
  children: React.ReactNode;
};

export function Callout({ children }: CalloutProps) {
  return <div className="complete">{children}</div>;
}
