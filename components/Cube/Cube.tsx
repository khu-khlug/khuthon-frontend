import "./Cube.css";

type Props = {
  onClick?: () => void;
};

export function Cube({ onClick }: Props) {
  return (
    <div className="cube" onClick={onClick}>
      <figure className="front"></figure>
      <figure className="back"></figure>
      <figure className="right"></figure>
      <figure className="left"></figure>
      <figure className="top"></figure>
      <figure className="bottom"></figure>
    </div>
  );
}
